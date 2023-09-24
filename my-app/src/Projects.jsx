import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "./Grid";
import MenuItem from "./MenuItem";
import { motion } from "framer-motion";
import ProjectsContent from "./ProjectsContent";
import Cursor from "./Cursor";

function Projects() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <div className="bg-black w-screen h-screen flex justify-center items-center">
        {!isChecked ? (
          <ProjectsContent type="Project" />
        ) : (
          <ProjectsContent type="Work" />
        )}
        <motion.h1
          className="swiper-b-prev text-4xl font-Pixel w-20 h-20 bg-white absolute md:left-20 lg:left-56 rounded-lg flex justify-center items-center"
          whileHover={{
            scale: 1,
            backgroundColor: "transparent",
            borderColor: "#fff",
            borderWidth: "3px",
            borderStyle: "dashed",
            color: "#fff",
          }}
          transition={{ duration: 0.08 }}
        >
          &lt;
        </motion.h1>
        <motion.h1
          className="swiper-b-next text-4xl font-Pixel w-20 h-20 bg-white absolute md:right-20 lg:right-56 rounded-lg flex justify-center items-center"
          whileHover={{
            scale: 1,
            backgroundColor: "transparent",
            borderColor: "#fff",
            borderWidth: "3px",
            borderStyle: "dashed",
            color: "#fff",
          }}
          transition={{ duration: 0.08 }}
        >
          &gt;
        </motion.h1>
        <div className="absolute bottom-10 flex items-center justify-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 0.5 }}
          >
            <Link className="" to="/">
              <MenuItem title="Home" rotate={15} />
            </Link>
          </motion.div>
        </div>
        <div className="absolute top-32">
          <label
            htmlFor="check"
            className="bg-white cursor-pointer relative w-56 h-10 rounded-lg flex items-center border-2 border-white"
            onClick={toggleSwitch}
          >
            <input
              type="checkbox"
              className="sr-only"
              checked={isChecked}
              onChange={() => {}}
            />
            <motion.span
              className=" text-white absolute font-Pixel text-lg translate-x-4 z-10"
              initial={false}
              animate={{
                color: isChecked ? "black" : "white",
              }}
            >
              Projects
            </motion.span>
            <motion.span
              className="w-2/5 h-4/5 bg-black absolute rounded-lg"
              initial={false}
              animate={{
                left: isChecked ? "calc(100% - 92px)" : "3.5px",
              }}
              transition={{ duration: 0.3, ease: [0.18, 0.89, 0.32, 1.28] }}
            ></motion.span>
            <motion.span
              className=" text-white absolute font-Pixel text-lg translate-x-39"
              initial={false}
              animate={{
                color: isChecked ? "white" : "black",
              }}
            >
              Jobs
            </motion.span>
          </label>
        </div>
      </div>
      <Cursor />
    </div>
  );
}

export default Grid(Projects);
