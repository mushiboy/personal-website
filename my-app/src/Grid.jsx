import React from "react";
import { motion } from "framer-motion";

const generateRectangles = () => {
  const numRectangles = 20;
  const size_of_rectangle = 130;
  const rectangles = [];

  for (let i = 0; i < numRectangles; i++) {
    for (let j = 0; j < numRectangles; j++) {
      rectangles.push({
        x: i * size_of_rectangle,
        y: j * size_of_rectangle,
        delay: Math.random() * 0.5,
      });
    }
  }

  return rectangles;
};
const Grid = (OgComponent) => {
  let rectangles = generateRectangles();
  return () => (
    <>
      <OgComponent />
      <div className="fixed min-h-screen flex items-center justify-center z-10 top-0 pointer-events-none">
        <motion.svg width="100vw" height="100vh">
          {rectangles.map((rectangle) => (
            <motion.rect
              className="z-50"
              key={`${rectangle.x}-${rectangle.y}`}
              x={rectangle.x}
              y={rectangle.y}
              width="130"
              height="130"
              fill="white"
              initial={{ opacity: 1, visibility: "visible" }}
              animate={{ opacity: 0, zIndex: -50 }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                delay: rectangle.delay,
                ease: [0.18, 0.89, 0.32, 1.28],
              }}
            />
          ))}
        </motion.svg>
      </div>
    </>
  );
};

export default Grid;
