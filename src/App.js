import Navbar from "./components/Navbar";
import "./styles.css"
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'
import Contact from './pages/Contact.jsx'
import Companies from "./pages/Companies";
import Footer from "./components/Footer";
import Gallery from './pages/Gallery';

function App() {
  return (
    <>

      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Gallery/>
      <Companies/>
      <Contact/>
      <Footer/>


    </>
  );
}

export default App;
