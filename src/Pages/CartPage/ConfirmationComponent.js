import { ConfirmationContainer, DeliveryPartner, OrderStatus } from "./CartStyle";
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';

export const  OrderConfirmation = () => {
    return(
        <ConfirmationContainer>

            <OrderStatus>
                <img src="./confirmation.png" alt="confirmation"/>
                <p>Preparing Your Order</p>
                <div>
                    <p className="preparation">30 mins | On time</p>
                    <div className="refresh"><AutorenewRoundedIcon sx={{fontSize: '18px'}}/></div>
                </div>
            </OrderStatus>

            <DeliveryPartner>
                <div>
                    <Person2RoundedIcon sx={{fontSize: '30px'}}/>
                </div>
                <p><span>Rubeus Hagrid | Delivery Partner</span><br/><span>will be delivering your order securely</span></p>
            </DeliveryPartner>

        </ConfirmationContainer>
    );
};