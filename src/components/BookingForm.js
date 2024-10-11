import dayjs from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


export default function BookingForm({ onNameChange, onDateChange, timeSlots, onTimeSlotSelect, occasion, onOccasionSelect, guest, onGuestSelect, onClose, onSubmit}){

    const currentDate = dayjs();

    return(
        <>
            <form onSubmit="onSubmit" className="form-booking-form">
                <formfield className="formfield-booking-form">
                    <div className="timeslot">
                        <label>Name</label>
                        <input className="form-input-field" placeholder="your name" onChange={(e) => onNameChange(e.target.value)}/>
                    </div>
                    <div className="timeslot">
                        <label>Date</label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        className="mui-date-picker"
                                        label="pick date"
                                        minDate={currentDate}
                                        maxDate={dayjs().add(30, 'day')}
                                        onChange={(e) => onDateChange(e)} />
                            </LocalizationProvider>
                    </div>

                    <div className="timeslot">
                        <label>Time</label>
                        <select className="slotpicker" onChange={(e) => onTimeSlotSelect(e.target.value)} defaultValue="">
                            <option value="">select a time slot</option>
                            {timeSlots.length > 0 ? (timeSlots.map((slot, index) => (
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
                        <select className="slotpicker" onChange={(e) => onOccasionSelect(e.target.value)} defaultValue="">
                            <option>select occasion</option>
                            {occasion.map((occasion, index) => (<option key={index} value={occasion}>{occasion}</option>))}
                        </select>
                    </div>

                    <div className="timeslot">
                        <label>Guests</label>
                        <select className="slotpicker" onChange={(e) => onGuestSelect(e.target.value)} defaultValue="">
                            <option>select number of guests</option>
                            {guest.map((guest, index) => (<option key={index} value={guest}>{guest}</option>))}
                        </select>
                    </div>

                </formfield>

                <div>
                    <button className="reservation-btn" onClick={onClose}>Make Reservation</button>
                </div>
            </form>
        </>
    )
}


// we can use submit button to submit form data to a list where we can store the reservation data each time button is clicked