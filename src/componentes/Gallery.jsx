import "../styles/Gallery.css";

import studio1 from "../assets/images/studio1.jpg";
import studio2 from "../assets/images/studio2.jpg";
import studio3 from "../assets/images/studio3.jpg";

const galleryImages = [
  {
    src: studio1,
    alt: "Zona de grabación de La Rolling Studio",
  },
  {
    src: studio2,
    alt: "Interior de La Rolling Studio",
  },
  {
    src: studio3,
    alt: "Equipamiento de La Rolling Studio",
  },
];

function Gallery() {
  return (
    <section className="gallery-section" id="galeria">
      <div className="gallery-container">
        <p className="section-kicker">GALERÍA</p>

        <h2>Así se vive una sesión en La Rolling Studio</h2>

        <div className="gallery-carousel">
          {galleryImages.map((image, index) => (
            <article
              className={`gallery-card ${
                index === 1 ? "gallery-card-featured" : ""
              }`}
              key={image.src}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />

              <div className="gallery-overlay">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>La Rolling Studio</p>
              </div>
            </article>
          ))}
        </div>

        <p className="gallery-mobile-hint">
          Desliza para ver más imágenes
        </p>
      </div>
    </section>
  );
}

export default Gallery;