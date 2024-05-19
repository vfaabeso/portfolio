import "./App.css";
import Footer from "./components/Footer";
import MainBody from "./components/MainBody";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-sans leading-6">
      <Navbar />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
