import React from "react";
import PixelBG from "./PixelBG";

import "./index.css";

function Header() {
  return (
    <div className="h-2/5 relative mt-[-4%]">
      <PixelBG />
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-5xl font-RubikIso text-white mt-[-9%]">MUGESH</h1>
      </div>
    </div>
  );
}

export default Header;
