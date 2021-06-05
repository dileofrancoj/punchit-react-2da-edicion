import { useEffect, useState } from "react";

const MouseMove = () => {
  const [mouseCoords, setMouseCoords] = useState({ x: null, y: null });

  const handleMouseCoords = (e) => {
    setMouseCoords({
      x: e.clientX,
      y: e.clientY,
    });
  };
  // ciclos de vida
  // componentDidMount -> Cuando el componente se monta
  // componentDidUpdate -> Cuando el componente se actualiza
  // componentWillUnmount -> Cuando el componente se destruye
  // efecto -> Todos los efectos secundarios de la aplicacion
  // API
  // Cambio de estado
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseCoords);

    return () => {
      window.removeEventListener("mousemove", handleMouseCoords);
    };
  });
  return (
    <div className="mouse-area">
      <h1>Encontrá la coordenada secreta 🔥</h1>
      <h2>Frio frio / Caliente Caliente</h2>
      <h3>
        X : {mouseCoords.x} | Y: {mouseCoords.y}
      </h3>
    </div>
  );
};

export default MouseMove;
