import { useCallback, useState } from "react";
import {
  PaymentContainer,
  PaymentMode,
  PaymentModeDescription,
  Divider
} from "./CartStyle";

import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { CashOnDeliveryModule, GooglePayModule } from "./PaymentModules";

import { useDispatch } from "react-redux";
import { updatePayment } from "src/redux/slices/orderSlice";

export const PaymentComponent = ({ payableAmount }) => {

  const dispatch = useDispatch();

  const [ paymentMethod, setPaymentMethod ] = useState('CARD');

  // payment data
  const [payment, setPayment] = useState({
                                        paymentMethod: null,
                                        paymentStatus: null,
                                        cardDetails: {
                                            cardNumber: null,
                                            cardNetwrok: null,
                                        }
                                      });

  // handle payment method
  const handlePaymentMethod = (e) => {
    if(e.target.name === 'CARD'){
      setPaymentMethod('CARD');
    }
    if(e.target.name === 'COD'){
      setPayment((prev) => ({ ...prev, paymentMethod: e.target.value, paymentStatus: 'pending'}));
      setPaymentMethod('COD');
      const updatedPayment = {
        ...payment,
        paymentMethod: e.target.value,
        paymentStatus: 'pending'
      }
      // update redux state
      dispatch(updatePayment(updatedPayment));
    }
  }

  // update transaction details
  const updateTransaction = (cardDetails, cardNetwrok, paymentType) => {
    paymentType === 'CARD' && setPayment((prev) => ({
      ...prev,
      paymentMethod: 'CARD',
      paymentStatus: 'completed',
      cardDetails: {
        ...prev.cardDetails,
        cardNumber: cardDetails,
        cardNetwrok: cardNetwrok
      }
    }));
    dispatch(updatePayment(payment));
  }

  // dynamic payment Gateway
  const PAYMENT_MODULE = {
    CARD: { id: 'CARD', component: <GooglePayModule payableAmount={payableAmount} updateTransaction={updateTransaction} /> },
    COD: { id: 'COD', component: <CashOnDeliveryModule />}
  };

  const customComponent = PAYMENT_MODULE?.[paymentMethod]?.component || null;

  return (
    <PaymentContainer>
      <PaymentMode>
          <RadioGroup
              onChange={handlePaymentMethod}
              row={true} sx={{ width:'100%', justifyContent:'flex-start', gap: '16px', padding: '0px 16px'}}
              defaultValue='CARD'
          >
            <FormControlLabel name='CARD' value='CARD' control={<Radio color='#4b4719' size='small' />} label='Credit/Debit Card' />
            <FormControlLabel name='COD' value='COD' control={<Radio color='#4b4719' size='small' />} label='Cash on Delivery' />

          </RadioGroup>

        <Divider />

          <PaymentModeDescription>
            {customComponent}
          </PaymentModeDescription>

      </PaymentMode>
    </PaymentContainer>
  );
};
