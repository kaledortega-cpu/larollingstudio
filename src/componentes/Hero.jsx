import "../styles/Hero.css";
import logo from "../assets/images/logo.png";
import StatsBanner from "./StatsBanner";

function Hero() {
  const abrirInstagram = () => {
    window.open(
      "https://instagram.com/Krow_fs",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <div className="logo-glow"></div>

        <img
          src={logo}
          alt="Logo de La Rolling Studio"
          className="hero-logo"
        />

        <h1>LA ROLLING STUDIO</h1>

        <p>Tu música merece sonar profesional.</p>

        <span className="services">
          Grabación • Mezcla • Mastering
        </span>

        <button type="button" onClick={abrirInstagram}>
          RESERVAR SESIÓN
        </button>

        <StatsBanner />
      </div>
    </section>
  );
}

export default Hero;