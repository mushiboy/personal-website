import React, { useEffect, useRef } from "react";
import MyPhoto from "./images/Mugesh.png";
import { gsap, Power4 } from "gsap";
import { TextPlugin } from "gsap/all";
import MyPicture from "./MyPicture";
import Menu from "./Menu";

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
    <div className="flex flex-col justify-center items-center h-3/5 mt-10">
      <Menu />
      <MyPicture image={MyPhoto} class="w-full h-5/6" imgClass="" />
      <div className="w-full h-1/6">
        <div className="">
          <span className="font-VT323 text-2xl">I'm a </span>
          <span
            className="font-VT323 text-2xl"
            ref={(item) => {
              texts = item;
            }}
          ></span>
          <span
            className="inline-block text-2xl"
            ref={(item) => {
              marker = item;
            }}
          >
            _
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
