import "../styles/Packs.css";

function Packs() {
  return (
    <section className="packs-section" id="packs">
      <div className="packs-container">
        <p className="section-kicker">PLANES PARA ARTISTAS</p>

        <h2>Elige el plan que mejor encaje contigo</h2>

        <div className="packs-grid">
          <article className="pack-card">
            <span className="pack-label">SESIÓN COMPLETA</span>

            <h3>Grabación Completa</h3>

            <p className="pack-price">80€</p>

            <ul>
              <li>Grabación</li>
              <li>Mezcla</li>
              <li>Mastering</li>
              <li>Entrega final lista para publicar</li>
            </ul>

            <a
              href="https://instagram.com/Krow_fs"
              target="_blank"
              rel="noreferrer"
            >
              Reservar sesión
            </a>
          </article>

          <article className="pack-card">
            <span className="pack-label">STANDARD</span>

            <h3>Pack Standard</h3>

            <p className="pack-price">
              150€ <span>/ mes</span>
            </p>

            <ul>
              <li>2 sesiones al mes</li>
              <li>Sesiones de 3 a 4 horas</li>
              <li>Grabación</li>
              <li>Mezcla</li>
              <li>Mastering</li>
              <li>Apoyo de marketing</li>
            </ul>

            <a
              href="https://instagram.com/Krow_fs"
              target="_blank"
              rel="noreferrer"
            >
              Reservar pack
            </a>
          </article>

          <article className="pack-card featured">
            <span className="recommended">RECOMENDADO</span>

            <span className="pack-label">AUDIOVISUAL</span>

            <h3>Pack Audiovisual</h3>

            <p className="pack-price">200€</p>

            <ul>
              <li>Grabación</li>
              <li>Mezcla</li>
              <li>Mastering</li>
              <li>Videoclip</li>
              <li>Contenido grabado en el estudio</li>
              <li>Material listo para redes sociales</li>
            </ul>

            <a
              href="https://instagram.com/Krow_fs"
              target="_blank"
              rel="noreferrer"
            >
              Reservar pack
            </a>
          </article>

          <article className="pack-card">
            <span className="pack-label">PRO</span>

            <h3>Pack Pro</h3>

            <p className="pack-price">
              300€ <span>/ mes</span>
            </p>

            <ul>
              <li>1 sesión semanal</li>
              <li>Sesiones de 3 a 4 horas</li>
              <li>Graba todo lo que dé tiempo</li>
              <li>Mezcla y mastering</li>
              <li>1 videoclip mensual</li>
              <li>Apoyo de marketing</li>
            </ul>

            <a
              href="https://instagram.com/Krow_fs"
              target="_blank"
              rel="noreferrer"
            >
              Reservar pack
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Packs;