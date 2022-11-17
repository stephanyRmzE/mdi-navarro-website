import Navbar from "./components/Navbar";
import "./styles.css"
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'
import Contact from './pages/Contact.jsx'
import Herramientas from "./pages/Herramientas";
import Companies from "./pages/Companies";
import Footer from "./components/Footer";

function App() {
  return (
    <>

      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      {/* <Herramientas/> */}
      <Companies/>
      <Contact/>
      <Footer/>


    </>
  );
}

export default App;
