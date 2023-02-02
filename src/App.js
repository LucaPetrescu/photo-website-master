import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Home from './pages/Home/Home'
import Gallery from "./pages/Gallery/Gallery";
import About from './pages/About/About';

import './components/Footer/Footer.css'
import './components/Navbar/Navbar.css'
import './pages/About/About.css'
import './pages/Contact/Contact.css'
import './pages/Home/Home.css'
import './pages/Gallery/Gallery.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </>
  );
}

export default App;
