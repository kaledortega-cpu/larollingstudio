import { useEffect, useRef, useState } from "react";
import "../styles/StatsBanner.css";

function AnimatedNumber({ target }) {
  const [value, setValue] = useState(0);
  const numberRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = numberRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;

        const duration = 800;
        const startTime = performance.now();

        const animate = (currentTime) => {
          const progress = Math.min(
            (currentTime - startTime) / duration,
            1
          );

          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.floor(target * easedProgress);

          setValue(currentValue);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setValue(target);
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [target]);

  return (
    <span className="stat-number" ref={numberRef}>
      +{value.toLocaleString("es-ES")}
    </span>
  );
}

function StatsBanner() {
  return (
    <div className="stats-banner">
      <div className="stat-item">
        <AnimatedNumber target={50} />
        <span className="stat-label">Artistas</span>
      </div>

      <div className="stat-item">
        <AnimatedNumber target={150} />
        <span className="stat-label">Canciones</span>
      </div>

      <div className="stat-item">
        <AnimatedNumber target={100000} />
        <span className="stat-label">Reproducciones</span>
      </div>
    </div>
  );
}

export default StatsBanner;