import "../styles/Hero.css";
import logo from "../assets/images/logo.jpg";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div>
        <img src={logo} alt="La Rolling Studio" />

        <h1>LA ROLLING STUDIO</h1>

        <p>
          Grabación · Mezcla · Mastering
        </p>

        <button
          onClick={() =>
            window.open("https://instagram.com/Krow_fs", "_blank")
          }
        >
          Reservar por Instagram
        </button>
      </div>
    </section>
  );
}

export default Hero;