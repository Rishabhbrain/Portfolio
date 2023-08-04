
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Projects from './components/projects';
import AboutMe from './components/aboutme';
import Skills from './components/skills';
import WorkExperience from './components/workex';
import Testimonials from './components/testimonials';
import ContactInfo from './components/contactme';
import VirtualResume from './components/resume';

function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <AboutMe/>
    <Skills/>
    <WorkExperience/>
    <Projects/>
    <Testimonials/>
    <ContactInfo/>
    
    <VirtualResume/>
    </div>
    );
}

export default App;
