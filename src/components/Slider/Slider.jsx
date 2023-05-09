import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
//
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

import { SliderProducts } from "../../data/products";

const Silder = () => {
  return (
    <div className="relative s-container">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        modules={[Pagination, Navigation]}
        className="w-[70%] h-[12rem] static "
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide className="bg-white flex rounded-[10px] p-[1rem] box-border overflow-hidden relative">
            <div className="left-s flex flex-col justify-between">
              <div className="name flex flex-col">
                <span>{slide.name}</span>
                <span className="">{slide.detail}</span>
              </div>
              <span>{slide.price}$</span>
              <div>Shop Now</div>
            </div>

            <img
              src={slide.img}
              alt="product"
              className="img-p w-[40%] h-[100%] bottom-[-20%]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Silder;
