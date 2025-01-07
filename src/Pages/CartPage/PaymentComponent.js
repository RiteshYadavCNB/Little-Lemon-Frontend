import { useState } from "react";
import {
  PaymentContainer,
  PaymentMode,
  PaymentModeDescription,
  PaymentModeSelection,
  Divider
} from "./CartStyle";

import Radio from "@mui/material/Radio";
import { CashOnDeliveryModule, GooglePayModule } from "./PaymentModules";


export const PaymentComponent = () => {
  const [paymentMode, setPaymentMode] = useState("card");


  // handle payment mode

  const handlePaymentMode = (e) =>{
    setPaymentMode(e.target.value);
  };

  // dynamic payment Gateway

  const PAYMENT_MODULE = {
    card: { id: "card", component: <GooglePayModule /> },
    cod: { id: "cod", component: <CashOnDeliveryModule />}
  };

  const CustomComponent = PAYMENT_MODULE?.[paymentMode]?.component || null;


  return (
    <PaymentContainer>
      <PaymentMode>
        <PaymentModeSelection>
          <ul>
            <li>
                  <Radio
                    checked={paymentMode === "card"}
                    onChange={handlePaymentMode}
                    value={"card"}
                    name="radio-buttons"
                    inputProps={{ "aria-label": "cardpayment" }}
                  />
                  <p>Credit/Debit Card</p>
            </li>

            <li>
                <Radio
                  checked={paymentMode === "cod"}
                  onChange={handlePaymentMode}
                  value={"cod"}
                  name="radio-buttons"
                  inputProps={{ "aria-label": "cashondelivery" }}
                />
                <p>Cash on Delivery</p>
            </li>
          </ul>
        </PaymentModeSelection>

        <Divider />

          <PaymentModeDescription>
            {CustomComponent}
          </PaymentModeDescription>

      </PaymentMode>
    </PaymentContainer>
  );
};
