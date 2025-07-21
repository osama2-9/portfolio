import { ToastContainer } from "react-toastify";
import "./App.css";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Experince from "./components/Experince";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutme />
      <Experince />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
