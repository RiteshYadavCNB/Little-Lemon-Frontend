import './App.css';
import Header from './components/Header'
import Homepage from './components/Home'
import Footer from './components/Footer'
import Booking from './components/Booking'
import { Routes, Route} from 'react-router-dom'



function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/booking' element={<Booking />}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
