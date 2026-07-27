import { useEffect } from "react";

import Navbar from "./componentes/Navbar";
import Hero from "./componentes/Hero";
import Services from "./componentes/Services";
import Packs from "./componentes/Packs";
import Gallery from "./componentes/Gallery";
import Testimonials from "./componentes/Testimonials";
import Location from "./componentes/Location";
import Footer from "./componentes/Footer";

import "./App.css";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.05,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      <div className="reveal">
        <Services />
      </div>

      <div className="reveal">
        <Packs />
      </div>

      <div className="reveal">
        <Gallery />
      </div>

      <div className="reveal">
        <Testimonials />
      </div>

      <div className="reveal">
        <Location />
      </div>

      <div className="reveal">
        <Footer />
      </div>
    </>
  );
}

export default App;