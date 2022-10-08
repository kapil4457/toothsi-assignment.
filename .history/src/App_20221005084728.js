import logo from './logo.svg';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Thanks from './components/Thanks/Thanks';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/thanks' element={<Thanks />} />
   </Routes>
  );
}

export default App;
