import "./App.css";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import InterestSection from "./components/InterestSection";
import SkillSection from "./components/SkillSection";

function App() {
  return (
    <div className="font-sans leading-6">
      <Navbar />
      {/* <HomeSection /> */}
      <InterestSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
