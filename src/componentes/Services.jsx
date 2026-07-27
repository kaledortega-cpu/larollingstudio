import "../styles/Services.css";

function Services() {
  const services = [
    {
      title: "Grabación",
      text: "Graba tus voces en un entorno preparado para conseguir claridad, presencia y una interpretación sólida.",
    },
    {
      title: "Mezcla",
      text: "Trabajamos cada pista para dar equilibrio, pegada y profundidad a tu canción.",
    },
    {
      title: "Mastering",
      text: "El acabado final para que tu música suene potente y preparada para plataformas digitales.",
    },
  ];

  return (
    <section className="services-section" id="servicios">
      <div className="services-container">
        <p className="section-kicker">LO QUE HACEMOS</p>
        <h2>Sonido profesional de principio a fin</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span className="service-number">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;