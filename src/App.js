import './App.css';
import Copper from './Components/Copper/Copper';
import { Route, Routes } from 'react-router-dom';
import Aluminum from './Components/Aluminum/Aluminum';
import Strips from './Components/Strips/Strips';
import HomePage from './Components/HomePage/HomePage';
import OurBusiness from './Components/OurBusiness/OurBusiness';
import ContactUs from './Components/ContactUs/ContactUs';
import Products from './Components/Products/Products';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/ourBusiness' element={<OurBusiness />} />
      <Route path='/products' element={<Products />} />
      <Route path='/copper' element={<Copper />} />
      <Route path='/aluminum' element={<Aluminum />} />
      <Route path='/strips' element={<Strips />} />
      <Route path='/contact' element={<ContactUs />} />
    </Routes>
  );
}

export default App;
