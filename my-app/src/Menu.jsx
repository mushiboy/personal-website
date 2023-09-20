import React from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

function Menu() {
  const customEases = {
    easeInOutBack: [0.68, -0.55, 0.27, 1.55],
    bounce: [0.18, 0.89, 0.32, 1.28],
    elastic: [0.68, -0.55, 0.27, 1.55],
    slowStart: [0.25, 0.1, 0.25, 1.0],
  };
  return (
    <motion.div
      className="w-5/6 lg:ml-56 sm:ml-28 grid grid-cols-4 items-center justify-center absolute bottom-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 8.5,
        duration: 2,
        ease: customEases.bounce,
      }}
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 8.5, duration: 0.5 }}
      >
        <Link className="" to="">
          <MenuItem
            title="Home"
            menuClass="p-5 w-32 h-32 bg-white font-VT323 text-3xl"
            rotate={-45}
          />
        </Link>
      </motion.div>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 8.7, duration: 0.5 }}
      >
        <Link className="" to="/projects">
          <MenuItem
            title="Projects"
            menuClass="p-5 w-32 h-32 bg-white font-VT323 text-3xl"
            rotate={45}
          />
        </Link>
      </motion.div>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 8.9, duration: 0.5 }}
      >
        <Link className="" to="contact-me">
          <MenuItem
            title="Contact Me"
            menuClass="p-5 w-32 h-32 bg-white font-VT323 text-3xl"
            rotate={-45}
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 9.1, duration: 0.5 }}
      >
        <Link className="" to="/resume">
          <MenuItem
            title="My Resume"
            menuClass="p-5 w-32 h-32 bg-white font-VT323 text-3xl"
            rotate={45}
          />
        </Link>
      </motion.div>
    </motion.div>
  );
}
export default Menu;
