import React from "react";
import { motion } from "framer-motion";

function ContactIcons(props) {
  const customEases = {
    easeInOutBack: [0.68, -0.55, 0.27, 1.55],
    bounce: [0.18, 0.89, 0.32, 1.28],
    elastic: [0.68, -0.55, 0.27, 1.55],
    slowStart: [0.25, 0.1, 0.25, 1.0],
  };
  return (
    <div className="flex items-center mb-6">
      <motion.a href={props.link} target="_blank" rel="noopener noreferrer">
        <motion.img
          src={props.image}
          alt={props.alt}
          className="w-16 h-16 mr-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 3 + props.key * 0.5,
            ease: customEases.elastic,
          }}
        />
      </motion.a>
      <div>
        <motion.h2
          className="text-2xl font-semibold font-Pixel"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 8 + props.key * 0.8,
            ease: customEases.elastic,
          }}
        >
          {props.alt}
        </motion.h2>
        <motion.h4
          className="text-lg font-semibold font-Pixel italic -mt-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 5 + props.key * 0.8,
            ease: customEases.elastic,
          }}
        >
          {props.alt === "WhatsApp" ? "+91 9597719478" : props.link}
        </motion.h4>
      </div>
    </div>
  );
}

export default ContactIcons;
