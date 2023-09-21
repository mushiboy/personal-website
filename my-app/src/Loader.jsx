import React from "react";
import Typewriter from "./Typewriter";
import { Power3 } from "gsap";

function Loader() {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <Typewriter
        class="w-2/3 h-1/2 text-center "
        words={
          [
            // "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
          ]
        }
        tlRepeat={0}
        textRepeat={1}
        textClass="font-Pixel text-7xl text-white inline"
        markerClass="inline-block text-4xl text-white"
        duration={5}
        yoyo={true}
        ease={Power3.easeInOut}
        load={true}
      />
    </div>
  );
}
export default Loader;
