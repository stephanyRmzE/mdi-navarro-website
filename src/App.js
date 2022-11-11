import Navbar from "./components/Navbar";
import "./styles.css"
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <>

      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Contact/>

    </>
  );
}

export default App;
