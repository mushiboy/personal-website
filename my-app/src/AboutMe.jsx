import React from "react";
import { gsap, Power4 } from "gsap";
import { TextPlugin } from "gsap/all";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";
import Menu from "./Menu";
import Cursor from "./Cursor";
import Image from "./Image";

gsap.registerPlugin(TextPlugin);

const customEases = {
  easeInOutBack: [0.68, -0.55, 0.27, 1.55],
  bounce: [0.18, 0.89, 0.32, 1.28],
  elastic: [0.68, -0.55, 0.27, 1.55],
  slowStart: [0.25, 0.1, 0.25, 1.0],
};

const nameVariants = {
  initial: {
    x: -10,
    fontSize: "4.5rem",
  },
  animate: {
    y: "-40%",
    x: 0,
    fontSize: "3rem",
  },
};

function AboutMe() {
  return (
    <div className="h-screen bg-black">
      <motion.span
        className="font-PWar text-7xl text-white absolute bottom-0 left-0 right-0 top-0 grid place-items-center"
        variants={nameVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 2, delay: 1, ease: customEases.slowStart }}
      >
        MUGESH
      </motion.span>
      <motion.div
        className="w-full absolute lg:bottom-48  sm:bottom-60 flex justify-center items-baseline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1, staggerChildren: 0.3 }}
      >
        <span className="font-Pixel text-2xl text-white inline">I'm a </span>
        <Typewriter
          class="text-center ml-2 "
          words={["Student", "Developer", "Graphic Designer"]}
          tlRepeat={-1}
          textRepeat={1}
          textClass="font-Pixel text-7xl text-white"
          markerClass="inline-block text-2xl text-white"
          duration={2}
          yoyo={true}
          lg
          ease={Power4.easeInOut}
          load={false}
        />
      </motion.div>
      <Menu />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 3 }}
      >
        <Image />
      </motion.div>
    </div>
  );
}

export default AboutMe;
