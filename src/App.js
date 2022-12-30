import './App.css';
import { Header } from './Components/Header';
import Footer from './Components/Footer';
import AboutSection from './Components/AboutSection';
import HomeSection from './Components/HomeSection';
import ContactSection from './Components/ContactSection';
import ProjectsSection from './Components/ProjectsSection';

function App() {
  return (
    <>
      <Header />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />

      <Footer />
    </>
  );
}

export default App;
