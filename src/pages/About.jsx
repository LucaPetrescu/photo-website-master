import Navbar from '../components/Navbar'
import '../styles/About.css'

function About() {
  return (
    <>
    <Navbar/>
    <div className='container'>
        <h1>I am a full-time software engineer and part-time photograhper</h1>
        <p className='presentation'>Hi! I'm Luca Petrescu. I love photography as much as I love writing code. Even this website is developed by me!</p>
        <h2>Gear I use</h2>
    </div>
    </>
  );
}

export default About;
