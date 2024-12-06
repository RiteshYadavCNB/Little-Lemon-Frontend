import dayjs from "dayjs";
import { useState, useEffect } from "react";
import PopUp from "../utility/PopUp";
import  createBooking  from '../firebaseService';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import InputField from "./UtilityComponents/InputField";
import DropDownSelection from "./UtilityComponents/DropDownSelection";
import CTAButton from "./Buttons/CTAButton";
import MobileOTP  from "../services/otpService";


import styled from "styled-components";




const BookingPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    margin-top: 60px;
    margin bottom: 40px;

    @media (max-width: 768px) {
        height: max-content;
        margin-top: 0px;
        margin-bottom: 40px;
    }

    @media (max-width: 360px) {
        height: max-content;
        margin-top: 0px;
        margin-bottom: 60px;
    }
`;

const BookingHead = styled.div`
    position: relative;
    display: flex;
    width: 90%;
    height: 300px;
    align-items: center;
    overflow: hidden;
    border-radius: 24px;
    margin-top: 40px;
`;

const BookingBgImageStyle = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const BookingHeadingContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    Z-index: 1;
`;

const BookingHeading = styled.h1`
    font-size: 60px;
    font-weight: 700;
    color: white;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);

    @media (max-width: 768px) {
        font-size: 40px;
    }
`;

const BookingHeadingTag = styled.h4`
    font-size: 32px;
    font-weight: 600;
    color: white;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

// issue with this method is to apply the new style we need to refresh the page

// const bookingHeading = {
//     fontSize: window.innerWidth < 768 ? '40px' : '60px',
//     fontWeight: '700',
//     color: 'white'

// }

// const tagHeading = {
//     fontSize: window.innerWidth < 768 ? '24px' : '32px',
//     fontWeight: '600',
//     color: 'white'
// }

const BookingSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    position: relative;
`;

const BookingSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 700px;
    justify-content: center;
    gap: 20px;
    margin: 60px 0px 40px 0px;
    padding: 30px 40px;
    background-color: white;
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 0px 0px 6px 2px hsl(0, 0%, 90%);


    @media (max-width: 768px){
        flex-direction: column;
        width: max-content;
        padding: 20px;
        margin: 40px 0px 60px 0px;
    }

    @media (max-width: 360px){
        flex-direction: column;
        width: max-content;
        padding: 20px;
        margin: 40px 0px 60px 0px;
    }
`;

const SelectDate = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 0;
    gap: 10px;
    box-sizing: border-box;
`;

const MuiDatePickerStyles = {
    "& .MuiInputBase-root":{fontSize: "14px", height: "54px"},
    "& .MuiFormLabel-root":{fontSize: "14px", color: "rgb(139, 139, 139)"},
    "& .MuiOutlinedInput-root": {height: "54px"},
    "& .MuiSvgIcon-root": {color: "lightgrey"},
}

const Booking = () => {

    const [isPopUpOpen, setIsPopUpOpen] = useState(false)
    const [availableTimeSlots, setAvailableTimeSlots] = useState({})
    const [bookingStatus, setBookingStatus] = useState(false)

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

        setFormData((formData) => ({...formData, timeSlot: e }))


        // to update available time slots
        //const updatedSlots = availableTimeSlots[formData.bookingDate].filter((slot) => slot !== e )
        //console.log("updated slots: ", updatedSlots)

        //setAvailableTimeSlots(prev => ({...prev, [formData.bookingDate]:prev[formData.bookingDate].filter((slot)=> slot !== e)}))
        //what we did here: setAvailableTimeSlots()is a function it will only take parameters so if we want to pass a computation here we need to
        //write the arrow function --- in the arrow function we are passing the prev state as obj and inside the function we are spreading it
        //after spreading the prev obj we are accessing the particular property in this case, date and than we are telling the fun that for
        //this date property you need to reassign a new filtered array here ":prev[date]" to reassign and "prev[date].filter()" to tell what to assign
        //in filter() method we are giving it an array as slot and then we are telling it that return all those value which are not equal to "e"
        //"e" is the selected time slot

        //we are getting an issue here slotpicker was not showing the selected value because we are using the state to map the options so when we change
        //the state the slotpicker component gets re-rendered and by default select element shows the first option instead of the selection we made
        //how we cured this bug --- we are not updating the availabletimeslots state for now.
    }


    /*reset all time slots and states manually*/

    const resetAll = () => {
        setAvailableTimeSlots(generateTimeSlots())
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
        <BookingPage>
            <BookingHead>
                    <BookingBgImageStyle src="/booking-background.jpg" alt="background-image"/>
                    <BookingHeadingContainer>
                        <BookingHeading> Book Table Now!</BookingHeading>
                        <BookingHeadingTag>Get Up to 20% Off</BookingHeadingTag>
                    </BookingHeadingContainer>
            </BookingHead>

            <BookingSectionContainer>

                <BookingSection>
                        <InputField
                            width="100%"
                            label="Name" placeholder="your name"
                            username={formData.userName}
                            actions={(e) => setFormData((formData) => ({...formData, userName: e.target.value}))}
                        />

                        <SelectDate>
                            <label style={{fontSize: "16px"}}>Date</label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    sx={MuiDatePickerStyles}
                                    value={formData.bookingDate != null ? dayjs(formData.bookingDate) : null}
                                    label={"Pick Date"}
                                    format="MM-DD-YYYY"
                                    disablePast
                                    minDate={dayjs()}
                                    maxDate={dayjs().add(30, 'day')}
                                    onChange={(newValue) => {
                                        setFormData((formData) => ({...formData, bookingDate : dayjs(newValue).format("MM-DD-YYYY")}))}}
                                />
                            </LocalizationProvider>
                        </SelectDate>

                        <DropDownSelection
                            label="Time" value={formData.timeSlot}
                            placeholder="select a time slot"
                            mapParameter={availableTimeSlots[formData.bookingDate]}
                            actions={(e) => handleTimeSlots(e.target.value)}
                        />

                        <DropDownSelection
                            label="Occasion" value={formData.occasion}
                            placeholder="select occasion"
                            mapParameter={occasionInfo}
                            actions={(e) => setFormData((formData)=>({...formData, occasion: e}))}
                        />

                        <DropDownSelection
                            label="Guests" value={formData.guests}
                            placeholder="select number of guests"
                            mapParameter={guests}
                            actions={(e) => setFormData((formData) => ({...formData, guests:e}))}
                        />

                </BookingSection>

                <CTAButton buttonText="Reserve a Table" actions={openPopUp}/>

                <PopUp isOpen={isPopUpOpen} onClose={closePopUp}>
                   <MobileOTP validationType="tel"/>
                </PopUp>

            </BookingSectionContainer>

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

        </BookingPage>
    )
}

export default Booking;