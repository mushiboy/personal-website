import React, { useEffect, useLayoutEffect, useRef } from "react";
import MyPhoto from "./images/Mugesh.png";
import { gsap, Power4 } from "gsap";
import { TextPlugin } from "gsap/all";
import MyPicture from "./MyPicture";

gsap.registerPlugin(TextPlugin);

function AboutMe() {
  let marker = useRef(null);
  let texts = useRef(null);

  useEffect(() => {
    gsap.to(marker, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: Power4.easeInOut,
    });

    const words = ["Developer", "Graphic Designer"];

    let tlMaster = gsap.timeline({ repeat: -1 });
    words.forEach((word) => {
      let tlText = gsap.timeline({ repeat: 1, yoyo: true });
      tlText.to(texts, { duration: 2, text: word });
      tlMaster.add(tlText);
    });
  }, [texts]);

  return (
    <div>
      <div className="">
        <div className="about-me w-2/3 flex">
          <MyPicture image={MyPhoto} class="w-1/3" />

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
            _
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
