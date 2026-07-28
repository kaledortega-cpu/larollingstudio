import "../styles/Hero.css";
import logo from "../assets/images/logo.jpg";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <div className="logo-glow"></div>

        <img src={logo} alt="La Rolling Studio" className="hero-logo" />

        <h1>LA ROLLING STUDIO</h1>

        <p>Tu música merece sonar profesional.</p>

        <span className="services">
          Grabación • Mezcla • Mastering
        </span>

        <button
          onClick={() =>
            window.open("https://instagram.com/Krow_fs", "_blank")
          }
        >
          RESERVAR SESIÓN
        </button>
      </div>
    </section>
  );
}

export default Hero;