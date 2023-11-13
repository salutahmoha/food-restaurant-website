import {Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar/navbar';

import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Menu from './Components/Pages/Menu';
import Services from './Components/Pages/Services';
import Contact from './Components/Pages/Contact';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/menuu" element={<Menu/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
