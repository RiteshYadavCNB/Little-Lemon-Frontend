import dayjs from "dayjs";
import { useState, useEffect } from "react";
import PopUp from "../utility/PopUp";
import BookingForm from "./BookingForm";
import  createBooking  from '../firebaseService'

export default function Booking(){

    const [selectedDate, setSelectedDate] = useState(null);
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [availableTimeSlots, setAvailableTimeSlots] = useState({});
    const [selectedTimeSlots, setSelectedTimeSlots] = useState(null);
    const [guestNumber, setGuestNumber] = useState(null);
    const [occasion, setOccasion] = useState(null);
    const [name, setName] = useState("");

    /* manage state for db data to be sent */
    const [formData, setFormData] = useState({
        userName: "",
        bookingDate: "",
        timeSlot: "",
        occasionInfo: "",
        guests: "",
    });

    /* handle form submission */
    
    const handleSubmit = (e) => {
        e.preventDefault();

        // setting formData state

        setFormData({
            userName: name,
            bookingDate: selectedDate,
            timeSlot: selectedTimeSlots,
            occasionInfo: occasion,
            guests: guestNumber
        })

        // call createBooking function with form data
        
        createBooking(formData)
            .then(()=>{
                console.log('Booking created successfully');
            })
            .catch((error)=>{
                console.error("Error creating Booking: ", error);
            })
    }


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

    /* handle name */

    const handleNameChange = (e) => {
        setName (e);
    }

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
        setName("");
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
        <div className="booking-main">
            <div className="booking-background-img-container">
                    <img src="/booking-background.jpg" alt="background-image"/>
            </div>

            <div className="booking-container">

                <div className="heading-container">
                    <h1 className="heading"> Book Table Now!</h1>
                    <p style={{fontSize: '18px', fontWeight:'500', color:'green'}}>Get Up to 20% Off</p>
                </div>
                <button className="reserve-table-btn" onClick={openPopUp}>Reserve a table</button>
                <PopUp isOpen={isPopUpOpen} onClose={closePopUp}>
                    <BookingForm
                        onNameChange={handleNameChange}
                        onDateChange={handleDateChange}
                        timeSlots={availableTimeSlots[selectedDate] || []}
                        onTimeSlotSelect={handleTimeSlots}
                        occasion={occasionInfo}
                        onOccasionSelect={handleOccasion}
                        guest={guests}
                        onGuestSelect={handleGuests}
                        onClose={closePopUp}
                        onSubmit={handleSubmit}
                    />
                </PopUp>
            </div>
            <div className="booking-information-container">
                <p className="booking-info-heading">Reservation Confirmed</p>
                <p>Name: {name}</p>
                <p>Date: {selectedDate ? dayjs(selectedDate).format('ddd DD MMMM') : 'No date selected'}</p>
                <p>Time: {selectedTimeSlots ? selectedTimeSlots : 'No time slots selected'}</p>
                <p>Occasion: {occasion}</p>
                <p>Guests: {guestNumber}</p>
            </div>
            <div className="reset">
                <button style={{width: '60px'}} onClick={resetAll}>Reset All</button>
            </div>
        </div>
    )
}