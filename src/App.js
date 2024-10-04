import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Homepage from './components/Home'
import Booking from './components/Booking'
import { Routes, Route} from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';



function App() {
  return (
    <>
      <Header />

      <LocalizationProvider>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/booking' element={<Booking />}/>
        </Routes>
      </LocalizationProvider>

      <Footer />

    </>
  );
}

export default App;
