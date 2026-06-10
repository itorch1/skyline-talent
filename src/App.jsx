import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AboutUs from "./sections/About";
import CTA from "./sections/CTA";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";

function App() {
  return (
    <div className="bg-agency-obsidian text-agency-silver relative">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Gallery />
        <AboutUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
