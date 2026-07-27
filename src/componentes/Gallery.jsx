import "../styles/Gallery.css";

import studio1 from "../assets/images/studio1.jpg";
import studio2 from "../assets/images/studio2.jpg";
import studio3 from "../assets/images/studio3.jpg";

function Gallery() {
  return (
    <section className="gallery-section" id="galeria">
      <div className="gallery-container">
        <p className="section-kicker">GALERÍA</p>

        <h2>Así se vive una sesión en La Rolling Studio</h2>

        <div className="gallery-grid">
          <img src={studio1} alt="Estudio 1" />
          <img src={studio2} alt="Estudio 2" />
          <img src={studio3} alt="Estudio 3" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;