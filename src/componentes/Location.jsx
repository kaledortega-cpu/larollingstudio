import "../styles/Location.css";

function Location() {
  return (
    <section className="location-section" id="contacto">
      <div className="location-container">

        <div className="location-info">
          <p className="section-kicker">CONTACTO</p>

          <h2>Reserva tu próxima sesión</h2>

          <p className="location-text">
            Escríbenos por Instagram para consultar disponibilidad,
            resolver dudas o reservar una sesión.
          </p>

          <div className="contact-details">
            <div>
              <span>UBICACIÓN</span>
              <p>Carrer de Saragosa 1</p>
              <p>Terrassa, Barcelona</p>
            </div>

            <div>
              <span>INSTAGRAM</span>
              <p>@Krow_fs</p>
            </div>
          </div>

          <a
            href="https://instagram.com/Krow_fs"
            target="_blank"
            rel="noreferrer"
          >
            Contactar por Instagram
          </a>
        </div>

        <div className="map-container">
          <iframe
            title="Ubicación de La Rolling Studio"
            src="https://www.google.com/maps?q=41.5612238,2.0400575&z=17&output=embed"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default Location;