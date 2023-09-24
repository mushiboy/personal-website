import React from "react";

function ProjectCard(props) {
  return (
    <div>
      <div className="max-w-80 h-96 flex flex-col justify-start items-center rounded-r-lg border-white border-4 border-dashed text-white p-4 relative">
        <h1 className="w-5/6 font-Pixel text-3xl font-bold text-center uppercase top-5">
          {props.title}
        </h1>
        <h2 className="w-5/6 font-Pixel text-xl font-semibold text-center mb-2">
          {props.date}
        </h2>
        <p className="w-5/6 font-Pixel text-lg text-center mb-2">
          {props.description}
        </p>
        <p className="w-5/6 font-Pixel text-lg text-center mb-2">
          Link: {props.link}
        </p>
        <div className="font-Pixel text-lg text-center mb-2">
          Tech Stacks:{" "}
          <div className="flex space-x-2 flex-wrap">
            {props.techstacks.map((stack, index) => (
              <div
                key={index}
                className="bg-white rounded-lg px-3 py-1 text-sm text-black"
              >
                {stack}
              </div>
            ))}
          </div>
        </div>

        <h2 className="font-Pixel text-xl font-semibold text-center bg-white px-4 text-black">
          {props.type}
        </h2>
      </div>
    </div>
  );
}

export default ProjectCard;
