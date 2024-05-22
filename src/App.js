import './App.css';
import Copper from './Components/Copper/Copper';
import { Route,Routes } from 'react-router-dom';
import Aluminum from './Components/Aluminum/Aluminum';
import Strips from './Components/Strips/Strips';
import HomePage from './Components/HomePage/HomePage';
import OurBusiness from './Components/OurBusiness/OurBusiness';

function App() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/ourBusiness' element={<OurBusiness/>} />
        <Route path='/copper' element={<Copper/>}/>
        <Route path='/aluminum' element={<Aluminum/>} />
        <Route path='/strips' element={<Strips/>}/>
      </Routes>
  );
}

export default App;
