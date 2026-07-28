import { useEffect, useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <a href="#inicio" className="logo" onClick={closeMenu}>
        LA ROLLING
      </a>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
      >
        <span className={menuOpen ? "menu-icon open" : "menu-icon"}>
          <span></span>
          <span></span>
          <span></span>
        </span>

        <span>{menuOpen ? "Cerrar" : "Menú"}</span>
      </button>

      <div className={menuOpen ? "menu open" : "menu"}>
        <a href="#inicio" onClick={closeMenu}>
          Inicio
        </a>

        <a href="#servicios" onClick={closeMenu}>
          Servicios
        </a>

        <a href="#packs" onClick={closeMenu}>
          Packs
        </a>

        <a href="#galeria" onClick={closeMenu}>
          Galería
        </a>

        <a href="#videoclip" onClick={closeMenu}>
          Videoclip
        </a>

        <a href="#contacto" onClick={closeMenu}>
          Contacto
        </a>
      </div>
    </nav>
  );
}

export default Navbar;