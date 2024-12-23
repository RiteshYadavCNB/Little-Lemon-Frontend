import { AddressField, CheckoutAddressContainer } from "./CartStyle";


export const AddressComponent = () => {

    return(
        <CheckoutAddressContainer>

            <div>
                Contact Details
            </div>
            <AddressField>
                <div>
                    <label>House/ Building/ Flat Number</label>
                    <input placeholder="House No/ Building/ Street/ Area"/>
                    <input placeholder="Locality"/>
                    <input placeholder="Pin Code"/>
                </div>

                <div>Home</div>
                <div>Work</div>
            </AddressField>
        </CheckoutAddressContainer>
    );
}