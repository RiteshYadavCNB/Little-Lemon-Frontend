import { useState } from 'react';
import DateAndTimePicker from './TimePicker';
import { Button, Select } from '@mui/material';

export default function Booking(){
    const [guestNumber, setGuestNumber] = useState(2);
    const [occasion, setOccasion] = useState('');

    const Guests = (e) =>{
        console.log("input state is updating properly")
        setGuestNumber(e.target.value)
    }

    const Occasion = (e) => {
        setOccasion(e.target.value)
    }

    return(
        <div>
            <form className='form'>
                <fieldset>
                    <div>
                        <label>Pick Date and Time of Reservation</label>
                        <DateAndTimePicker />
                    </div>
                    <div>
                        <label htmlFor='guestnumber'>Number of Guests</label><br/>
                        <input id='guestnumber' type='number' min={2} max={10} value={guestNumber} onChange={Guests}/>
                    </div>
                    <div>
                        <label htmlFor='occasion' >Occasion</label><br/>
                        <Select id='occasion' placeholder='select an occasion' value={occasion} onClick={Occasion}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Dining Out</option>
                        </Select>
                    </div>
                    <Button>Make Reservation</Button>
                </fieldset>
            </form>

            <div>
                <p>{guestNumber}</p>
                <p>{occasion}</p>
            </div>
        </div>
    )
}

/* occasion wale element mein selection proper kro dekho onclick ya aur koi event handler lgega kya */

