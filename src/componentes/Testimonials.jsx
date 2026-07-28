import { useRef, useState } from "react";
import "../styles/Testimonials.css";

const videos = [
  { id: "h0Xqh4LoZkU", title: "Videoclip 1" },
  { id: "LIEh6Es2X7g", title: "Videoclip 2" },
  { id: "wpaRGvDyIs4", title: "Videoclip 3" },
  { id: "7dBxcC-ozCE", title: "Videoclip 4" },
  { id: "CfecLHNo01E", title: "Videoclip 5" },
  { id: "BBLPWYiVAG4", title: "Videoclip 6" },
  { id: "U8LXeFlAUxk", title: "Videoclip 7" },
  { id: "0QNoYA8CjXE", title: "Videoclip 8" },
  { id: "dBfJ52GWeyQ", title: "Videoclip 9" },
  { id: "T7NMb8S92O0", title: "Videoclip 10" },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailsRef = useRef(null);

  const activeVideo = videos[activeIndex];

  const selectVideo = (index) => {
    setActiveIndex(index);
  };

  const previousVideo = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? videos.length - 1 : currentIndex - 1
    );
  };

  const nextVideo = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === videos.length - 1 ? 0 : currentIndex + 1
    );
  };

  const scrollThumbnails = (direction) => {
    if (!thumbnailsRef.current) return;

    thumbnailsRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="testimonials-section" id="videoclip">
      <div className="testimonials-container">
        <p className="section-label">MIRA CÓMO TRABAJAMOS</p>

        <h2>Sonido, imagen y energía desde La Rolling Studio</h2>

        <div className="video-carousel">
          <button
            type="button"
            className="main-video-arrow main-video-arrow-left"
            onClick={previousVideo}
            aria-label="Ver vídeo anterior"
          >
            ‹
          </button>

          <div className="video-wrapper">
            <iframe
              key={activeVideo.id}
              src={`https://www.youtube.com/embed/${activeVideo.id}`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <button
            type="button"
            className="main-video-arrow main-video-arrow-right"
            onClick={nextVideo}
            aria-label="Ver vídeo siguiente"
          >
            ›
          </button>
        </div>

        <div className="thumbnail-carousel">
          <button
            type="button"
            className="thumbnail-arrow"
            onClick={() => scrollThumbnails("left")}
            aria-label="Desplazar miniaturas a la izquierda"
          >
            ‹
          </button>

          <div className="video-thumbnails" ref={thumbnailsRef}>
            {videos.map((video, index) => (
              <button
                type="button"
                className={`video-thumbnail ${
                  activeIndex === index ? "active" : ""
                }`}
                key={video.id}
                onClick={() => selectVideo(index)}
                aria-label={`Reproducir ${video.title}`}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={`Miniatura de ${video.title}`}
                  loading="lazy"
                />

                <span className="thumbnail-overlay">
                  <span className="thumbnail-play">▶</span>
                </span>

                <span className="thumbnail-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            className="thumbnail-arrow"
            onClick={() => scrollThumbnails("right")}
            aria-label="Desplazar miniaturas a la derecha"
          >
            ›
          </button>
        </div>

        <div className="video-counter">
          <span>{String(activeIndex + 1).padStart(2, "0")}</span>
          <span className="counter-line"></span>
          <span>{String(videos.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;