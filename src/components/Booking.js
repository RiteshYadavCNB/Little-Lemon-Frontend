import { useState } from 'react';
import AmPMCustomization from './TimePicker'

export default function Booking(){
    const [state, setState] = useState('');

    const nameInput = (e) =>{
        console.log("input state is updating properly")
        setState(e.target.value)
    }

    return(
        <div>
            <form>
                <div>
                    <label>Time</label>
                    <AmPMCustomization />
                </div>
                <div>
                    <label>Name</label><br/>
                    <input value={state} onChange={nameInput}/>
                </div>
                <div>
                    <p>{state}</p>
                </div>

            </form>
        </div>
    )
}
