import "../styles/Testimonials.css";

function Testimonials() {
  const opiniones = [
    {
      nombre: "Krow",
      texto: "El tema quedó mucho más profesional de lo que esperaba. Muy buen trato y muy buen sonido."
    },
    {
      nombre: "Chepive",
      texto: "Me ayudaron durante todo el proceso y consiguieron exactamente el sonido que buscaba."
    },
    {
      nombre: "Dlesson",
      texto: "Buen ambiente, rapidez y una mezcla muy limpia. Volveré para los próximos temas."
    }
  ];

  return (
    <section className="testimonials-section" id="opiniones">
      <p className="section-label">OPINIONES</p>
      <h2>Lo que dicen nuestros artistas</h2>

      <div className="testimonials-grid">
        {opiniones.map((opinion, index) => (
          <article className="testimonial-card" key={index}>
            <div className="stars">★★★★★</div>
            <p>“{opinion.texto}”</p>
            <h3>{opinion.nombre}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;