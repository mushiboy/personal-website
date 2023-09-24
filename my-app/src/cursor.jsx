import React, { useEffect, useState } from "react";

function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const cursorStyle = {
    position: "fixed",
    top: `${mousePosition.y + 10}px`,
    left: `${mousePosition.x + 5}px`,
    backgroundColor: "white",
    width: "15px",
    height: "15px",
  };

  return <div style={cursorStyle}></div>;
}

export default Cursor;
