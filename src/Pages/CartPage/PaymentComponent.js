import { useState } from "react";
import { ModeDescription, ModeSelection, PaymentContainer, PaymentMode, PaymentModeDescription, PaymentModeSubSelection, } from "./CartStyle";

import Radio from '@mui/material/Radio';


export const PaymentComponent = () => {

    const [paymentMode, setPaymentMode] = useState("upi");
    const [ upiMode, setUpiMode ] = useState("gpay")

    const paymentModes = [
        {key: "upi", mode: "UPI"},
        {key: "cod", mode: "Cash On Delivery"},
        {key: "cardPayment", mode: "Credit/Debit Card"}
    ]

    // handle radio upi payment mode

    const handleUpiModeChange = (e) =>{
        setUpiMode(e.target.value);
    };


    return(
        <PaymentContainer>
            <PaymentMode>
                <ModeSelection>
                    <ul>
                        {paymentModes.map((paymentmode)=>(
                            <li>
                                <div key={paymentmode.key} tabIndex={0}>{paymentmode.mode}</div>
                            </li>
                        ))}
                    </ul>
                </ModeSelection>

                <ModeDescription>
                    {
                        paymentMode === "upi" &&
                        <PaymentModeSubSelection>
                            <div>
                                <Radio
                                    checked={upiMode === "gpay"}
                                    onChange={handleUpiModeChange}
                                    value={"gpay"}
                                    name="radio-buttons"
                                    inputProps={{"aria-label": "googlepay"}}
                                />
                                <p>Google Pay</p>
                            </div>
                            <div>
                                <Radio
                                    checked={upiMode === "bhim"}
                                    onChange={handleUpiModeChange}
                                    value={"bhim"}
                                    name="radio-buttons"
                                    inputProps={{"aria-label": "BHIM"}}
                                />
                                <p>BHIM</p>
                            </div>
                        </PaymentModeSubSelection>
                    }

                </ModeDescription>

            </PaymentMode>
        </PaymentContainer>
    );
}