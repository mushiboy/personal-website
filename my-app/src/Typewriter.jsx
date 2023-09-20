import React, { useEffect, useRef } from "react";
import { CSSPlugin, gsap, Power4 } from "gsap";
import { TextPlugin } from "gsap/all";
import { motion } from "framer-motion"; // Import motion from 'framer-motion'

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(CSSPlugin);

function Typewriter(props) {
  let markerRef = useRef(null);
  let textsRef = useRef(null);

  useEffect(() => {
    gsap.to(markerRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: props.ease,
    });

    const words = props.words;

    let tlMaster = gsap.timeline({ repeat: props.tlRepeat });
    words.forEach((word) => {
      let tlText = gsap.timeline({
        repeat: props.textRepeat,
        yoyo: props.yoyo,
      });
      tlText.to(textsRef.current, {
        duration: props.duration,
        text: word,
      });

      tlMaster.add(tlText);
    });
    if (props.load) {
      tlMaster.eventCallback("onComplete", () => {
        let tlText = gsap.timeline();
        tlText.to(textsRef.current, {
          duration: 1,
          className: "font-PWar text-7xl text-white inline",
          ease: Power4.easeOut,
        });
        tlText.to(textsRef.current, {
          duration: 3,
          delay: 0,
          text: "MUGESH",
        });
        gsap.set(markerRef.current, {
          visibility: "hidden",
        });
      });
    }
  }, [
    props.duration,
    props.ease,
    props.repeat,
    props.textReapeat,
    props.textRepeat,
    props.tlRepeat,
    props.words,
    props.yoyo,
    textsRef,
    markerRef,
    props.load,
  ]);

  return (
    <div className={props.class}>
      {props.load ? (
        <motion.span
          className={props.textClass}
          ref={textsRef}
          layoutID="Name"
        ></motion.span>
      ) : (
        <span className={props.textClass} ref={textsRef}></span>
      )}
      <span className={props.markerClass} ref={markerRef}>
        _
      </span>
    </div>
  );
}

export default Typewriter;
