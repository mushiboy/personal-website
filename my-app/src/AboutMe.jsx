import React, { useEffect, useLayoutEffect, useRef } from "react";
import MyPhoto from "./images/Mugesh.png";
import { gsap, Power4 } from "gsap";
import { TextPlugin } from "gsap/all";

gsap.registerPlugin(TextPlugin);

function AboutMe() {
  let marker = useRef(null);
  let texts = useRef(null);
  const words = ["Developer", "Graphic Designer"];

  useEffect(() => {
    gsap.to(marker, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: Power4.easeInOut,
    });

    let tlMaster = gsap.timeline({ repeat: -1 });
    words.forEach((word) => {
      let tlText = gsap.timeline({ repeat: 1, yoyo: true });
      tlText.to(texts, { duration: 1, text: word });
      tlMaster.add(tlText);
    });
  }, [texts, words]);

  return (
    <div>
      <div className="">
        <div className="about-me w-2/3 flex">
          <img src={MyPhoto} alt="Mugesh" id="my_photo" className="w-1/3" />
          <h1>I'm a</h1>
          <div
            ref={(item) => {
              texts = item;
            }}
          ></div>
          <span
            ref={(item) => {
              marker = item;
            }}
          >
            |
          </span>
          <p>
            Grounded and Solution-oriented Machine Learning Enthusiast with a
            strong determination to help others through modern technologies.
            Adept at motivating self and others. Passionate about ML and Data
            Science and how it can solve modern problems
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
