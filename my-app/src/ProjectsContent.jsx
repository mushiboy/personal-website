import React from "react";
import ProjectCard from "./ProjectCard";
import WorksAndProjects from "./WorksAndProjects";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function ProjectsContent(props) {
  const type =
    props.type === "Work" ? WorksAndProjects.works : WorksAndProjects.projects;

  const isMobile = window.innerWidth <= 768; // Define the breakpoint for mobile screens

  const swiperContainerWidth = "700px";
  const swiperContainerHeight = isMobile ? "1000px" : "auto";
  return (
    <div className="flex justify-center items-center">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={"auto"}
        centerInsufficientSlides={false}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-b-next",
          prevEl: ".swiper-b-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className=""
        style={{ width: swiperContainerWidth, height: swiperContainerHeight }}
      >
        {type.map((item, index) => (
          <SwiperSlide key={index}>
            <ProjectCard
              title={item.title}
              date={item.date}
              description={item.description}
              link={item.link}
              techstacks={item.techStacks}
              type={item.type}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectsContent;
