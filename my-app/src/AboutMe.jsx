import React from "react";
import MyPhoto from "./images/Mugesh.png";

function AboutMe() {
  return (
    <div>
      <div className="">
        <div className="about-me w-2/3 flex">
          <img src={MyPhoto} alt="Mugesh" id="my_photo" className="w-1/3" />
          <h1>I'm a</h1>
          <h1>Developer & Graphic Designer</h1>
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
