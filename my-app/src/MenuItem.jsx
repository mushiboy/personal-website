import React from "react";
import { motion } from "framer-motion";

function MenuItem(props) {
  return (
    <motion.div>
      <motion.button
        className={props.menuClass}
        whileHover={{
          scale: 1,
          rotate: props.rotate,
          backgroundColor: "transparent",
          borderColor: "#fff",
          borderWidth: "5px",
          color: "#fff",
        }}
      >
        {props.title}
      </motion.button>
    </motion.div>
  );
}

export default MenuItem;
