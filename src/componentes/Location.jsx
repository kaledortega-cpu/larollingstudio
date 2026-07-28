import "../styles/Location.css";

function Location() {
  return (
    <section className="location-section" id="contacto">
      <div className="location-container">
        <div className="location-info">
          <p className="section-kicker">CONTACTO</p>

          <h2>Reserva tu próxima sesión</h2>

          <p className="location-text">
            Escríbenos para consultar disponibilidad, resolver dudas o reservar
            una sesión en La Rolling Studio.
          </p>

          <div className="contact-details">
            <div>
              <span>UBICACIÓN</span>
              <p>Carrer de Saragossa 1, bajos</p>
              <p>08227 Terrassa, Barcelona</p>
            </div>

            <div>
              <span>WHATSAPP</span>
              <a
                className="contact-link"
                href="https://wa.me/34622463331"
                target="_blank"
                rel="noreferrer"
              >
                622 463 331
              </a>
            </div>

            <div>
              <span>EMAIL</span>
              <a
                className="contact-link"
                href="mailto:kaledortega@gmail.com"
              >
                kaledortega@gmail.com
              </a>
            </div>

            <div>
              <span>INSTAGRAM</span>
              <a
                className="contact-link"
                href="https://instagram.com/Krow_fs"
                target="_blank"
                rel="noreferrer"
              >
                @Krow_fs
              </a>
            </div>
          </div>

          <div className="contact-buttons">
            <a
              className="primary-button"
              href="https://wa.me/34622463331"
              target="_blank"
              rel="noreferrer"
            >
              Escribir por WhatsApp
            </a>

            <a
              className="secondary-button"
              href="https://instagram.com/Krow_fs"
              target="_blank"
              rel="noreferrer"
            >
              Contactar por Instagram
            </a>
          </div>
        </div>

        <div className="map-container">
          <iframe
            title="Ubicación de La Rolling Studio"
            src="https://www.google.com/maps?q=41.5612238,2.0400575&z=17&output=embed"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Location;