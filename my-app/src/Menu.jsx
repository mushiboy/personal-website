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
      className="w-5/6 sm:ml-28 grid grid-cols-3 items-center justify-center absolute bottom-10 translate-x-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 3.5,
        duration: 2,
        ease: customEases.bounce,
      }}
    >
      <motion.div
        className="flex items-center justify-center h-full"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.5 }}
      >
        <Link className="" to="">
          <MenuItem title="Home" rotate={-15} />
        </Link>
      </motion.div>
      <motion.div
        className="flex items-center justify-center"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 3.7, duration: 0.5 }}
      >
        <Link className="" to="/projects">
          <MenuItem title="Projects" rotate={15} />
        </Link>
      </motion.div>
      <motion.div
        className="flex items-center justify-center"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 3.9, duration: 0.5 }}
      >
        <Link className="" to="contact-me">
          <MenuItem title="Contact Me" rotate={-15} />
        </Link>
      </motion.div>
    </motion.div>
  );
}
export default Menu;
