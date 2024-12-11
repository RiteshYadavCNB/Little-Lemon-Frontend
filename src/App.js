import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Homepage from './components/HomePage/Home'
import Booking from './components/BookingPage/Booking'
import { Routes, Route} from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import OrderOnline from './components/OrderOnlinePage/OrderOnline';



function App() {
  return (
    <>
      <Header />

      <LocalizationProvider>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/table-booking' element={<Booking />}/>
          <Route path='/order-online' element={<OrderOnline />}/>
        </Routes>
      </LocalizationProvider>

      <Footer />
    </>
  );
}

export default App;
