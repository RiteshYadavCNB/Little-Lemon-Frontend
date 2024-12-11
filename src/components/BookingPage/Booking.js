import dayjs from "dayjs";
import { useState, useEffect } from "react";
import PopUp from "../../utility/PopUp";
import  createBooking  from '../../firebaseService';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import InputField from "../UtilityComponents/InputField";
import DropDownSelection from "../UtilityComponents/DropDownSelection";
import CTAButton from "../UtilityComponents/Buttons/CTAButton";
import MobileOTP  from "../../services/otpService";
import { BookingBgImageStyle, BookingHead, BookingHeading, BookingHeadingContainer, BookingHeadingTag, BookingPage, BookingSection, BookingSectionContainer, MuiDatePickerStyles, SelectDate } from "./BookingStyle";


const Booking = () => {

    // state variables

    const [isPopUpOpen, setIsPopUpOpen] = useState(false)
    const [availableTimeSlots, setAvailableTimeSlots] = useState({})
    const [bookingStatus, setBookingStatus] = useState(false)

    /* state table reservatian form */

    const [formData, setFormData] = useState({
        userName: "",
        bookingDate: null,
        timeSlot: "",
        occasion: "",
        guests: ""
    });

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

    const occasionInfo = ['Birthday', 'Anniversary', 'Casual Dine'];
    const guests = ['2', '4', '6'];


    /* handle form submission */

    const handleSubmit = (e) => {
        console.log({formData});

        // call createBooking function with form data from the OTP popup page

        createBooking(formData);
        console.log("called createBooking");
        closePopUp();
        setBookingStatus(true);
        setFormData({
            userName: "",
            bookingDate: "",
            timeSlot: "",
            occasion: "",
            guests: ""
         });
    };


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


    /*OTP pop up*/

    const openPopUp = () => {
        setIsPopUpOpen(true);
    };

    const closePopUp = () => {
        setIsPopUpOpen(false);
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
                            actions={(e) => setFormData((formData)=>({...formData, occasion: e.target.value}))}
                        />

                        <DropDownSelection
                            label="Guests" value={formData.guests}
                            placeholder="select number of guests"
                            mapParameter={guests}
                            actions={(e) => setFormData((formData) => ({...formData, guests:e.target.value}))}
                        />

                </BookingSection>

                <CTAButton buttonText="Reserve a Table" actions={openPopUp}/>

                {/* <PopUp isOpen={isPopUpOpen} onClose={closePopUp} children={<MobileOTP actionCall={TempHandleSubmit}/>} /> */}
                <PopUp isOpen={isPopUpOpen} onClose={closePopUp}>
                    <MobileOTP actionCall={handleSubmit}/>
                </PopUp>

            </BookingSectionContainer>


            {bookingStatus && console.log(formData) &&
            <div>
                {/* <p>Reservation Confirmed</p>
                <p>Name: {formData.userName}</p>
                <p>Date: {formData.bookingDate ? dayjs(formData.bookingDate).format('ddd DD MMMM') : 'No date selected'}</p>
                <p>Time: {formData.timeSlot ? formData.timeSlot : 'No time slots selected'}</p>
                <p>Occasion: {formData.occasion}</p>
                <p>Guests: {formData.guests}</p> */}
            </div>}

        </BookingPage>
    )
}

export default Booking;