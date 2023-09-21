import React from "react";
import Grid from "./Grid";
import ContactIcons from "./ContactIcons";
import linkedinImage from "./images/lin.png";
import instaImage from "./images/insta.png";
import fbImage from "./images/fb.png";
import wpImage from "./images/wp.png";

function Contact() {
  return (
    <div className="bg-black h-screen min-w-screen">
      <div className="container mx-auto py-16 px-4 h-screen my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full center">
          <div className="grid1 p-4  border-dashed border-white border-4 rounded-lg bg-black text-white grid">
            <div className="flex flex-col justify-center h-full items-center">
              <h1 className="font-BlackOps font-extrabold text-6xl">
                Contact Me!
              </h1>
              <h3 className="font-Pixel text-3xl">
                Let's Connect and Collaborate
              </h3>
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
                  />
                  <ContactIcons
                    link="https://www.facebook.com/Mugesh0025/"
                    image={fbImage}
                    alt="FaceBook"
                  />
                  <ContactIcons
                    link="https://wa.me/+919597719478"
                    image={wpImage}
                    alt="WhatsApp"
                  />
                  <ContactIcons
                    link="https://www.instagram.com/mushi__boy/"
                    image={instaImage}
                    alt="Instagram"
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
