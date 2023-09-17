import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import CSSPlugin from "gsap/CSSPlugin";
import { Power4 } from "gsap";

gsap.registerPlugin(CSSPlugin);

function MyPicture(props) {
  let container = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    let tl = gsap.timeline({ repeat: 0 });
    tl.to(".displacement", {
      attr: {
        r: 1000,
      },
      duration: 5,
      ease: Power4.easeIn,
    });

    setContainerWidth(container.clientWidth);
    setContainerHeight(container.clientHeight);
  });

  return (
    <div
      className={props.class}
      ref={(item) => {
        container = item;
      }}
    >
      <svg
        viewBox={`0 0 ${containerWidth} ${containerHeight}`}
        width={"100%"}
        height={"100%"}
        fill="none"
        preserveAspectRatio="xMidYMin slice"
        style={{ zIndex: -1 }}
      >
        <defs>
          <filter id="filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.5"
              numOctaves="10000000"
              result="noise"
            />
            <feMorphology
              in="noise"
              operator="dilate"
              radius="10"
              result="pixelated"
            />

            <feDisplacementMap
              in="SourceGraphic"
              in2="pixelated"
              scale="50"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <mask id="circleMask">
            <circle
              cx="50%"
              cy="50%"
              r="100"
              fill="white"
              className="displacement"
              style={{ filter: "url(#filter)" }}
            />
          </mask>
        </defs>

        <image
          xlinkHref={props.image}
          alt="Mugesh"
          id="my_photo"
          className={props.imgClass}
          width="100%"
          height="100%"
          mask="url(#circleMask)"
        />
      </svg>
    </div>
  );
}

export default MyPicture;
