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
  return () => (
    <div>
      <OgComponent />
      <div className="fixed min-h-screen  flex items-center justify-center">
        <motion.svg width="100vw" height="100vh">
          {generateRectangles().map((rectangle) => (
            <motion.rect
              className=""
              key={`${rectangle.x}-${rectangle.y}`}
              x={rectangle.x}
              y={rectangle.y}
              width="130"
              height="130"
              fill="white"
              initial={{ visibility: "visible" }}
              animate={{ visibility: "hidden" }}
              transition={{
                duration: 0.5,
                delay: rectangle.delay,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.svg>
      </div>
    </div>
  );
};

export default Grid;
