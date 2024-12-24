import { AddressField, AddressTag, CheckoutAddressContainer, ContactField } from "./CartStyle";


export const AddressComponent = () => {

    return(
        <CheckoutAddressContainer>

            <ContactField>
                    <label>Contact Details</label>
                    <input placeholder="Name"/>
                    <input placeholder="Mobile Number"/>
            </ContactField>
            <AddressField>
                <div>
                    <label>Address Details</label>
                    <input placeholder="House No/ Building/ Street/ Area"/>
                    <input placeholder="Locality"/>
                    <input placeholder="Pin Code"/>
                </div>

                <div style={{flexDirection: "row"}}>
                    <AddressTag>Home</AddressTag>
                    <AddressTag>Work</AddressTag>
                </div>
            </AddressField>
        </CheckoutAddressContainer>
    );
}