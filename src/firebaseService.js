import { ref, push, set } from "firebase/database"
import { rtdb } from "./firebaseConfig"

// new booking entry in rtdb
const createBooking = (formData) => {
    const bookingsRef = ref(rtdb, 'bookings/'); //bookings is your node in the RTDB
    const newBookingRef = push(bookingsRef); //Automatically generates a unique key

    set(newBookingRef, formData)
    .then(()=>{
        console.log("Booking Successfully created in Realtime DB!");
    })
    .catch((error)=>{
        console.error("Error creating bookings: ", error);
    });
};

export default createBooking;