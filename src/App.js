import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Homepage from './Pages/HomePage/Home'
import Booking from './Pages/BookingPage/Booking'
import { Routes, Route} from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import OrderOnline from './Pages/OrderOnlinePage/OrderOnline';
import { CartProvider } from './Context/CartContext';


function App() {
  return (
    <>
    <CartProvider>
      <Header />

      <LocalizationProvider>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/table-booking' element={<Booking />}/>
          <Route path='/order-online' element={<OrderOnline />}/>
        </Routes>
      </LocalizationProvider>

      <Footer />
    </CartProvider>
    </>
  );
}

export default App;
