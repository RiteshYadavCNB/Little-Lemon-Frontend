import { ref, push, set } from "firebase/database"
import { rtdb } from "./firebaseConfig"

// new booking entry in rtdb
const createBooking = (formData, setBookingStatus) => {
    const bookingsRef = ref(rtdb, 'bookings/'); //bookings is your node in the RTDB
    const newBookingRef = push(bookingsRef); //Automatically generates a unique key

    console.log("function rtdb called successfully");

    set(newBookingRef, formData)
    .then(()=>{
        console.log("Booking Successfully created in Realtime DB!");
        setBookingStatus(true);
    })
    .catch((error)=>{
        console.error("Error creating bookings: ", error);
    });
};

export default createBooking;