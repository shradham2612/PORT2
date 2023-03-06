import React from "react";
import Procard from "./Procard";
import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "../constants";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/swiper.min.css";

const Projects = () => {
  return (
    <section id="Pro" className="bg-neutral-50 cursor-pointer">
      <h2 className="flex justify-center text-blue-900 text-4xl pt-24 bg-neutral-50">
        PROJECTS
      </h2>

      <div className=" flex justify-center pro">
        <Swiper
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
        >
          {projects.map((card) => (
            <SwiperSlide>
              <Procard key={card.id} {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
