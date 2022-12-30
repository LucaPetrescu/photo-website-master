import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from './pages/Home'
import Gallery from "./pages/Gallery";
import About from './pages/About'
import Footer from './components/Footer'

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
      <Footer/>
    </>
  );
}

export default App;
