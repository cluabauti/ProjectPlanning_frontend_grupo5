import { useState, useEffect } from "react";
import "./styles/LandingPage.css";

export default function LandingPage() {
  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // cambia la foto automáticamente cada 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="landing-container">
      <div className="carousel">
        <img src={images[current]} alt="Slide" />
      </div>
      <div className="info">
        <h1>Bienvenido a <span>ProjectPlanning</span></h1>
        <p>
          Una plataforma para que ONGs colaboren entre sí creando y gestionando proyectos de impacto social.
        </p>
        <p>
          Podrás crear proyectos, organizar etapas y compartir recursos con otras organizaciones.
        </p>
        <button className="btn btn-primary">Comenzar</button>
      </div>
    </div>
  );
}
