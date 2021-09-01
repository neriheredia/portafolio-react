import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonios from "./components/testimonios/Testimonios";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import {useState} from 'react';
import './app.scss';

function App() {
  // creando el estado del menu principal
  const [menuOpen, setMenuOpen ] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen = {menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonios/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
