import dayjs from "dayjs";
import { useState, useEffect } from "react";
import PopUp from "../utility/PopUp";
import  createBooking  from '../firebaseService';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import  MobileOTP  from "../services/otpService";

export default function Booking(){

    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [availableTimeSlots, setAvailableTimeSlots] = useState({});
    const [bookingStatus, setBookingStatus] = useState(false);

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

    /* state for reservatian form */

    const [formData, setFormData] = useState({
        userName: "",
        bookingDate: null,
        timeSlot: "",
        occasion: "",
        guests: ""
    });

    /* handle form submission */

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     console.log({formData})

    //     // call createBooking function with form data from the OTP popup page

    //     createBooking(formData)

    //     closePopUp();

    //     setFormData({
    //         userName: "",
    //         bookingDate: "",
    //         timeSlot: "",
    //         occasion: "",
    //         guests: ""
    //      });

    //     console.log(formData);
    // }


    /*handle available time slots*/

     const handleTimeSlots = (e) => {
        setFormData((formData) => ({...formData, timeSlot : e.target.value}));
        // to update available time slots
        const updatedSlots = availableTimeSlots[formData.bookingDate].filter(slot => slot !== formData.timeSlot);
        setAvailableTimeSlots(prev => ({...prev, [formData.bookingDate]: updatedSlots}));
    }


    /*reset all time slots and states manually*/

    const resetAll = () => {
        setAvailableTimeSlots(generateTimeSlots());
        setFormData({
            userName: "",
            bookingDate: null,
            timeSlot: "",
            occasion: "",
            guests: ""
        })
    }

    /*OTP pop up*/

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


                <form className="form-booking-form">
                    <formfield className="formfield-booking-form">
                        <div className="timeslot">
                            <label>Name</label>
                            <input className="form-input-field" placeholder="your name" value={formData.userName} onChange={(e) => setFormData((formData) => ({...formData, userName : e.target.value}))}/>
                        </div>

                         <div className="timeslot">
                            <label>Date</label>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        className="mui-date-picker"
                                        value={formData.bookingDate != null ? dayjs(formData.bookingDate) : null}
                                        //if we directly pass null to value first react would try to compare mui value prop
                                        //which is by default an object with the null and it will throw error
                                        //if we pass null to dayjs(null) and assign it to value
                                        //dayjs will return the date format which eventhough is valid but is not a date so the mui validation will throw error
                                        //to remedy we need to tell react that first check whether formData.bookingDate obj has the null value
                                        //if it does not have the null assign the formData.bookingDate to value otherwise assign null
                                        label={"Pick Date"}
                                        disablePast
                                        minDate={dayjs()}
                                        maxDate={dayjs().add(30, 'day')}
                                        onChange={(date) => {
                                            console.log(date)
                                            setFormData((formData) => ({...formData, bookingDate : date}))}}
                                    />
                                </LocalizationProvider>
                        </div>

                        <div className="timeslot">
                            <label>Time</label>
                            <select className="slotpicker" onChange={(e) => handleTimeSlots(e.target.value)} defaultValue="">
                                <option value="">select a time slot</option>
                                {availableTimeSlots.length > 0 ? (availableTimeSlots.map((slot, index) => (
                                    <option key={index} value={slot}>{slot}</option>
                                ))
                                ) : (
                                    <option disabled>Sorry! all tables booked</option>
                                )
                            }
                            </select>
                        </div>

                        <div className="timeslot">
                            <label>Occasion</label>
                            <select className="slotpicker" onChange={(e) => setFormData((formData) => ({...formData, occasion : e.target.value}))} defaultValue="">
                                <option>select occasion</option>
                                {occasionInfo.map((occasion, index) => (<option key={index} value={occasion}>{occasion}</option>))}
                            </select>
                        </div>

                        <div className="timeslot">
                            <label>Guests</label>
                            <select className="slotpicker" onChange={(e) => setFormData((formData) => ({...formData, guests : e.target.value}))} defaultValue="">
                                <option>select number of guests</option>
                                {guests.map((guest, index) => (<option key={index} value={guest}>{guest}</option>))}
                            </select>
                        </div>

                        </formfield>
                </form>

                <button className="reserve-table-btn" onClick={openPopUp}>Reserve a table</button>
                <PopUp isOpen={isPopUpOpen} onClose={closePopUp}>
                   <MobileOTP/>
                </PopUp>
            </div>

            <div className="reset">
                <button style={{width: '60px'}} onClick={resetAll}>Reset All</button>
            </div>

            <div>
                {bookingStatus &&
                <div className="booking-information-container">
                    <p className="booking-info-heading">Reservation Confirmed</p>
                    <p>Name: {formData.userName}</p>
                    <p>Date: {formData.bookingDate ? dayjs(formData.bookingDate).format('ddd DD MMMM') : 'No date selected'}</p>
                    <p>Time: {formData.timeSlot ? formData.timeSlot : 'No time slots selected'}</p>
                    <p>Occasion: {formData.occasion}</p>
                    <p>Guests: {formData.guests}</p>
                </div>}
            </div>

        </div>
    )
}