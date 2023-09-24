import React from "react";
import Grid from "./Grid";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import ContactIcons from "./ContactIcons";
import linkedinImage from "./images/lin.png";
import instaImage from "./images/insta.png";
import fbImage from "./images/fb.png";
import wpImage from "./images/wp.png";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="bg-black h-screen min-w-screen">
      <div className="container mx-auto py-16 px-4 h-screen my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full center">
          <div className="grid1 p-4  border-dashed border-white border-4 rounded-lg bg-black text-white grid">
            <div className="flex flex-col justify-center h-full items-center">
              <motion.span
                className="font-PWar text-7xl text-white mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 2,
                  ease: [0.25, 0.1, 0.25, 1.0],
                }}
              >
                MUGESH
              </motion.span>
              <motion.h1
                className="font-BlackOps font-extrabold text-6xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                Contact Me!
              </motion.h1>

              <motion.h3
                className="font-Pixel text-3xl"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Let's Connect and Collaborate
              </motion.h3>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-10"
              >
                <Link className="text-black" to="/">
                  <MenuItem title="Home" rotate={-15} />
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="grid2 p-4 bg-white rounded-lg">
            <div className="flex flex-col justify-center h-full">
              <div className="contactus flex justify-center items-center">
                <div className="contact mb-8">
                  <ContactIcons
                    link="https://www.linkedin.com/in/mugeshsp/"
                    image={linkedinImage}
                    alt="LinkedIn"
                    key={1}
                  />
                  <ContactIcons
                    link="https://www.facebook.com/Mugesh0025/"
                    image={fbImage}
                    alt="FaceBook"
                    key={2}
                  />
                  <ContactIcons
                    link="https://wa.me/+919597719478"
                    image={wpImage}
                    alt="WhatsApp"
                    key={3}
                  />
                  <ContactIcons
                    link="https://www.instagram.com/mushi__boy/"
                    image={instaImage}
                    alt="Instagram"
                    key={4}
                  />
                  <h1 className="text-3xl text-center font-VT323 mt-10">
                    Feel Free to click on the icons :)
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid(Contact);
