import { ref, push, set } from "firebase/database"
import { db } from "./firebaseConfig"

// new booking entry in rtdb
const createBooking = (bookingData) => {
    const bookingsRef = ref(db, "bookings"); //bookings is your node in the RTDB
    const newBookingRef = push(bookingsRef); //Automatically generates a unique key

    return set(newBookingRef, bookingData)
        .then(()=>{
            console.log("Booking Successfully created in Realtime DB!");
        })
        .catch((error)=>{
            console.error("Error creating bookings: ", error);
        });
};

export default createBooking;