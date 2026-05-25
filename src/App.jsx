import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import PlanetGrid from "./components/PlanetGrid";
import FactsTable from "./components/FactsTable";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./style.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <VideoSection />
      <PlanetGrid />
      <FactsTable />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;