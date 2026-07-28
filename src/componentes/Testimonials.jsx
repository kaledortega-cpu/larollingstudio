import "../styles/Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials-section" id="videoclip">
      <div className="testimonials-container">
        <p className="section-label">MIRA CÓMO TRABAJAMOS</p>

        <h2>Sonido, imagen y energía desde La Rolling Studio</h2>

        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/h0Xqh4LoZkU"
            title="Videoclip de La Rolling Studio"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;