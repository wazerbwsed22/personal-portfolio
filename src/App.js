import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Skills } from './components/Skills';
import { Projects } from "./components/Projects";
import { Hackathons } from "./components/Hackathons";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Hackathons />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
