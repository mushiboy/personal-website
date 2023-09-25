import { useState } from "react";
import React from "react";
import { easeIn, easeInOut, easeOut, motion } from "framer-motion";
import myImage from "./images/MugeshRGB.png";
const customEases = {
  easeInOutBack: [0.68, -0.55, 0.27, 1.55],
  bounce: [0.18, 0.89, 0.32, 1.28],
  elastic: [0.68, -0.55, 0.27, 1.55],
  slowStart: [0.25, 0.1, 0.25, 1.0],
};

function PixelBody() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div className="absolute grid place-items-center w-screen h-screen lg:mt-16 overflow-hidden">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 308.62 236.33"
        className="absolute grid place-items-center w-1/3 h-1/3"
        initial={{ y: 100, visibility: "hidden", scale: 0.5 }}
        animate={{ y: -140, visibility: "unset", scale: 1 }}
        transition={{ duration: 2, delay: 4.5, ease: customEases.slowStart }}
        style={{ opacity: isHovered ? 0 : 1 }}
        onHoverStart={handleHover}
        onHoverEnd={handleHover}
      >
        <defs>
          <style>
            {
              ".cls-1{fill:#fff;stroke:#fff;stroke-miterlimit:10;stroke-width:3px}"
            }
          </style>
        </defs>
        <title>{"Asset 12"}</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              d="M118.88 1.5h70.87v70.87h-70.87zM118.88 82.73h70.87v70.87h-70.87zM118.88 163.97h70.87v70.87h-70.87zM47.318 100.016l36.823-21.26 21.26 36.823-36.823 21.26zM2.053 126.159l36.823-21.26 21.26 36.823-36.823 21.26zM24.857 174.86 61.68 153.6l21.26 36.823-36.823 21.26zM240.049 135.078l-36.824-21.26 21.26-36.823 36.824 21.26zM285.319 161.224l-36.824-21.26 21.26-36.823 36.824 21.26zM262.509 209.92l-36.823-21.26 21.26-36.823 36.823 21.26z"
              className="cls-1"
              rx={5}
              ry={5}
            />
          </g>
        </g>
      </motion.svg>

      <motion.div
        className="h-3 bg-white origin-center rounded-lg"
        style={{ transformOrigin: "center" }}
        initial={{ width: 0, height: 0 }}
        animate={{ width: "300px", height: "10px" }}
        transition={{ duration: 1, delay: 3, ease: customEases.slowStart }}
      ></motion.div>
      <motion.div
        className=" bg-black origin-center absolute grid place-items-center w-1/3 h-1/3 "
        style={{ transformOrigin: "center" }}
        initial={{
          width: 350,
          height: 300,
          visibility: "unset",
          opacity: 0,
          y: 160,
        }}
        exit={{ visibility: "hidden" }}
        animate={{ visibility: "unset", opacity: 1 }}
        transition={{ duration: 0.1, delay: 3, ease: customEases.slowStart }}
      ></motion.div>
    </div>
  );
}

export default PixelBody;
