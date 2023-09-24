import React from "react";
import { SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";

function WorksContent() {
  return (
    <div>
      <SwiperSlide>
        <ProjectCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectCard />
      </SwiperSlide>
    </div>
  );
}

export default WorksContent;
