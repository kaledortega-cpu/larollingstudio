import { useEffect, useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <a href="#inicio" className="logo">
        LA ROLLING
      </a>

      <div className="menu">
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#packs">Packs</a>
        <a href="#galeria">Galería</a>
        <a href="#contacto">Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar;