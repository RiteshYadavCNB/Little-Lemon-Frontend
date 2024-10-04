import dayjs from "dayjs";
import { useState, useEffect } from "react";
import PopUp from "../utility/PopUp";
import BookingForm from "./BookingForm";

export default function Booking(){

    const [selectedDate, setSelectedDate] = useState(null);
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [availableTimeSlots, setAvailableTimeSlots] = useState({});
    const [selectedTimeSlots, setSelectedTimeSlots] = useState(null);
    const [guestNumber, setGuestNumber] = useState(null);
    const [occasion, setOccasion] = useState(null);


    /*Generate time slots for the next 30 days*/

    const generateTimeSlots = () => {
        const slots ={};
        const currentDate = dayjs();

        for (let i = 0; i<30; i++){
            const date =currentDate.add(i, 'day').format('MM-DD-YYYY');
            slots[date]=['05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM']
        }
        return slots;
    }

    useEffect(()=>{
        setAvailableTimeSlots(generateTimeSlots())
    }, []);

    /*occasion & guests*/

    const occasionInfo = ['Birthday', 'Anniversary', 'Casual Dine']
    const guests = ['2', '4', '6']

    /*handle date change*/

    const handleDateChange = (e) => {
        setSelectedDate(e ? dayjs(e).format('MM-DD-YYYY') : null)
        setSelectedTimeSlots(null);
    };

     /*handle available time slots*/

     const handleTimeSlots = (timeSlot) => {
        setSelectedTimeSlots(timeSlot)
        // to update available time slots
        const updatedSlots = availableTimeSlots[selectedDate].filter(slot => slot !== timeSlot);
        setAvailableTimeSlots(prev => ({...prev, [selectedDate]: updatedSlots}));
    }

    /*handle occasion*/

    const handleOccasion = (e) => {
        setOccasion(e)
    }

    /*handle guests*/

    const handleGuests = (e) => {
        setGuestNumber(e)
    }

    /*reset all time slots and states manually*/

    const resetAll = () => {
        setAvailableTimeSlots(generateTimeSlots());
        setSelectedTimeSlots(null);
        setSelectedDate(null);
        setOccasion(null);
        setGuestNumber(null);
    }

    /*booking form pop up*/

    const openPopUp = () => {
        setIsPopUpOpen(true)
    };

    const closePopUp = () => {
        setIsPopUpOpen(false)
    };

    /*component*/

    return(
        <>
            <div>
                <h1>Book a Reservation</h1>
                <button onClick={openPopUp}>Book Now</button>
                <PopUp isOpen={isPopUpOpen} onClose={closePopUp}>
                    <BookingForm
                        onDateChange={handleDateChange}
                        timeSlots={availableTimeSlots[selectedDate] || []}
                        onTimeSlotSelect={handleTimeSlots}
                        occasion={occasionInfo}
                        onOccasionSelect={handleOccasion}
                        guest={guests}
                        onGuestSelect={handleGuests}
                    />
                </PopUp>
            </div>
            <div style={{display: "block", width: "100vw", maxWidth: "50vw"}}>
                <p>Reservation Confirmed</p>
                <p>Date: {selectedDate ? dayjs(selectedDate).format('ddd DD MMMM') : 'No date selected'}</p>
                <p>Time: {selectedTimeSlots ? selectedTimeSlots : 'No time slots selected'}</p>
                <p>Occasion: {occasion}</p>
                <p>Guests: {guestNumber}</p>
            </div>
            <div>
                <button onClick={resetAll}>Reset All</button>
            </div>
        </>
    )
}