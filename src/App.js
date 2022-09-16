import Aboutus from "./components/aboutus/Aboutus";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Skills from "./components/skills/Skills";
import Portfolio from './components/portfolio/Portfolio'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      
      <Aboutus/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      
      
    </div>
  );
}

export default App;
