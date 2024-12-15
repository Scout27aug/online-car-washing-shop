import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Booking from "./pages/Booking";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="contact/" element = {<Contact/>}/>
        <Route path="about/" element = {<About/>}/>
        <Route path="service/" element = {<Services/>}/>
        <Route path="booking/" element = {<Booking/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
