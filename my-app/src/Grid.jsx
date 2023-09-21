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
      <div className="fixed min-h-screen flex items-center justify-center z-50">
        <motion.svg width="100vw" height="100vh">
          {rectangles.map((rectangle) => (
            <motion.rect
              className=""
              key={`${rectangle.x}-${rectangle.y}`}
              x={rectangle.x}
              y={rectangle.y}
              width="130"
              height="130"
              fill="white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                delay: rectangle.delay,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.svg>
      </div>
    </>
  );
};

export default Grid;
