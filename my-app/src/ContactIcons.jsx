import React from "react";

function ContactIcons(props) {
  return (
    <div className="flex items-center mb-6">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img src={props.image} alt={props.alt} className="w-16 h-16 mr-4" />
      </a>
      <div>
        <h2 className="text-2xl font-semibold font-Pixel">{props.alt}</h2>
        <h4 className="text-lg font-semibold font-Pixel italic -mt-2">
          {props.alt === "WhatsApp" ? "+91 9597719478" : props.link}
        </h4>
      </div>
    </div>
  );
}

export default ContactIcons;
