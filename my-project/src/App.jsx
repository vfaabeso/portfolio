import "./App.css";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";

function App() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
