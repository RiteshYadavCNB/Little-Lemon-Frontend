import dayjs from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function BookingForm({ onDateChange, timeSlots, onTimeSlotSelect, occasion, onOccasionSelect, guest, onGuestSelect}){

    const currentDate = dayjs();

    return(
        <>
            <form className="form">
                <formfield class="bookingform">
                    <div className="timeslot">
                    <label>Date</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Pick Date"
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
            </form>
        </>
    )
}