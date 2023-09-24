import React from "react";
import { motion } from "framer-motion";

function MenuItem(props) {
  return (
    <motion.div>
      <motion.button
        className="p-5 w-28 h-28 bg-white font-Pixel text-3xl rounded-lg flex items-center justify-center"
        whileHover={{
          scale: 1,
          rotate: props.rotate,
          backgroundColor: "transparent",
          boxShadow: "0 0 0 5px #fff",
          color: "#fff",
        }}
      >
        <h1 className="text-center ml-1.5">{props.title}</h1>
      </motion.button>
    </motion.div>
  );
}

export default MenuItem;
