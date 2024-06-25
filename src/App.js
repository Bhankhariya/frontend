
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './Rapp.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Login from './Components/Login';
import Register from './Components/Register';
import Order from './Components/Order';
import Ocational from './Components/Ocational';
import Logout from './Components/Logout';


function App() {
  return (
   <>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Menu' element={<Menu />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/Order' element={<Order />} />
      <Route path='/Ocational' element={<Ocational />} />
      <Route path='/Logout' element={<Logout />} />
    </Routes>
    
   </>
  );
}

export default App;
