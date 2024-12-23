import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Homepage from './Pages/HomePage/Home'
import Booking from './Pages/BookingPage/Booking'
import { Routes, Route} from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import OrderOnline from './Pages/OrderOnlinePage/OrderOnline';
import { CartItemProvider } from './Context/CartItemsContext';
import  Cart from './Pages/CartPage/Cart';


function App() {
  return (
    <>
    <CartItemProvider>
      <Header />

      <LocalizationProvider>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/table-booking' element={<Booking />}/>
          <Route path='/order-online' element={<OrderOnline />}/>
        </Routes>
      </LocalizationProvider>

      <Footer />
    </CartItemProvider>
    </>
  );
}

export default App;
