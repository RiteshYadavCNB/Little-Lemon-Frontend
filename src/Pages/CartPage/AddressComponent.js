import { Address, AddressFields, CheckoutAddressContainer, ContactField, StyledFormControlLabel } from "./CartStyle";
import { RadioGroup, Radio } from "@mui/material";

export const AddressComponent = ({ handleContact, handleAddress}) => {

return(
    <CheckoutAddressContainer>

        <ContactField onChange={handleContact} >
                <label>Contact Details</label>
                <input type="text" name="name" placeholder="Name" />
                <input type="tel" name="mobile" placeholder="Mobile Number" />
        </ContactField>
        <Address>
            <AddressFields onChange={handleAddress}>
                <label>Address Details</label>
                <input type="text" name="building" placeholder="House No/ Building/ Street/ Area"/>
                <input type="text" name="locality" placeholder="Locality"/>
                <input type="number" name="pinCode" placeholder="Pin Code"/>
            </AddressFields>

            <RadioGroup row={true} sx={{ width:'100%', justifyContent:'flex-start', gap: '16px', padding: '0px 16px'}}
                onClick={handleAddress}
            >
                <StyledFormControlLabel name="tag" value='home' control={<Radio color='#4b4719' size='small' />} label='Home' />
                <StyledFormControlLabel name="tag" value='work' control={<Radio color='#4b4719' size='small' />} label='Work' />
                <StyledFormControlLabel name="tag" value='other' control={<Radio color='#4b4719' size='small' />} label='Other' />
            </RadioGroup>
        </Address>
    </CheckoutAddressContainer>
);
};