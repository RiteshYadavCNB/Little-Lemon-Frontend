import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"; // lib to generate unique ids

// order object ---intial state---
const initialState = {
    orderId: null,
    user: {
        contactDetails: {
            name: "",
            mobile: ""
        },
        addressDetails: {
            building: "",
            locality: "",
            pinCode: 0,
            tag: ""
        }
    },
    cart: [],
    coupon: {
        couponCode: null,
        discount: 0
    },
    bill: {
        billedItems: [],
        itemTotal: 0,
        itemDiscount: 0,
        couponDiscount: 0,
        deliveryFee: 0,
        taxFee: 0,
        payableAmount: 0,
    },
    payment: {
        paymentMethod: null,
        paymentStatus: null,
        cardDetails: {
            cardNumber: null,
            cardNetwrok: null,
        }
    }
}

// reducer fucntions
const reducers = {
    // generate order ID when order starts
    generateOrderId: (state) => {
        state.orderId = uuidv4();
    },

    // update Contact Details
    updateContactDetails: (state, action) => {
        state.user.contactDetails = {...state.user.contactDetails, ...action.payload};
    },

    // update Address Details
    updateAddressDetails: (state, action) => {
        state.user.addressDetails = {...state.user.addressDetails, ...action.payload};
    },

    // add Item to Cart
    addItemToCart: (state, action) => {
        // replacing the cart array with a new updated array from cart checkout page
        state.cart = [...action.payload];
    },

    // apply a Coupon Code
    applyCoupon: (state, action) => {
        state.couponCode = action.payload;
    },

    // update Bill Details
    updateBill: (state, action) => {
        state.bill = { ...state.bill, ...action.payload };
    },

    // update Payment
    updatePayment: (state, action) => {
        state.payment = { ...state.payment, ...action.payload };
    },

    // reset Order
    resetOrder: () => initialState,
};

// Redux State Order Slice
const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers
});

// export actions
// action creators are generated for each case reducer function
export const {
    generateOrderId,
    updateContactDetails,
    updateAddressDetails,
    addItemToCart,
    removeItemFromCart,
    applyCoupon,
    updateBill,
    setPaymentMethod,
    updatePayment,
    resetOrder
} = orderSlice.actions;



// export reducer
export default orderSlice.reducer;