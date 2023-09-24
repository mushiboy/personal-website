import React, { useState } from "react";
import { motion } from "framer-motion";
import my_photo from "./images/Mugesh_f.png";
import my_photo_2 from "./images/Mugesh_f_2.PNG";

function Image() {
  const [isHovered, setIsHovered] = useState(false);

  const hoverAnimation = {
    scale: 1.05,
    boxShadow: isHovered ? "0px 0px 10px rgba(0, 0, 0, 0.5)" : "none",
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  };

  return (
    <div className="container min-w-full h-auto flex justify-center items-center absolute top-36 left-0  -z-0">
      <motion.div
        className={`img-container w-96 h-96 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 perspective-1000 relative ${
          isHovered ? "shadow-lg" : ""
        }`}
        whileHover={hoverAnimation}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.img
          src={isHovered ? my_photo_2 : my_photo}
          alt="Mugesh"
          className="img absolute w-96 h-96 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 backface-hidden"
          initial={false}
        />
      </motion.div>
    </div>
  );
}

export default Image;
