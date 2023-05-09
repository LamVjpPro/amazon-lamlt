import React from "react";
import Hero from "../../assets/testimonialHero.png";
import "./Testimonials.css";
import { TestimonialsData } from "../../data/testimonials";

import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  return (
    <div className="flex flex-col justify-center items-center px-[2rem] py-[4rem]">
      <div className="wrapper">
        <div className="container">
          <span>Top Rated</span>
          <span>
            SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN
            REJOICED.
          </span>
        </div>

        <img src={Hero} alt="" className="w-[25rem] justify-self-center" />

        <div className="container">
          <span>100k</span>
          <span>HAPPY CUSTOMERS WITH US</span>
        </div>
      </div>

      <div className="text-[2rem] font-bold uppercase">Reviews</div>

      <div className="w-[100%]">
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className="tCarousel"
          breakpoints={{
            856: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {TestimonialsData.map((testimonials, i) => (
            <SwiperSlide>
              <div className="testimonials">
                <img src={testimonials.image} alt="" />
                <span>{testimonials.comment}</span>
                <hr className="bg-[#c6c6c6] border-none h-[1px] w-[80%]" />
                <span>{testimonials.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
