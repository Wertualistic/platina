import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from "swiper/core";
import "swiper/swiper-bundle.css";
import "./css.css";
import biznes from "../assets/biznes.png";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);
const id = Math.random(2 * 4)
export default function Slider() {
  const slides = [];

  slides.push(
    <>
      <SwiperSlide>
        <Link to={`/card/${id}`} className="slide w-[400px] pt-[20px] flex flex-col">
          <img src={biznes} alt="" />
          <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
          Янги Меҳнат кодексига кўра, қатор ходимлар ишга қабул қилинганда дастлабки синов белгиланмайди
          </p>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to={`/card/${id}`} className="slide w-[400px] pt-[20px] flex flex-col">
          <img src={biznes} alt="" />
          <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
          Янги Меҳнат кодексига кўра, қатор ходимлар ишга қабул қилинганда дастлабки синов белгиланмайди
          </p>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to={`/card/${id}`} className="slide w-[400px] pt-[20px] flex flex-col">
          <img src={biznes} alt="" />
          <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
          Янги Меҳнат кодексига кўра, қатор ходимлар ишга қабул қилинганда дастлабки синов белгиланмайди
          </p>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to={`/card/${id}`} className="slide w-[400px] pt-[20px] flex flex-col">
          <img src={biznes} alt="" />
          <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
          Янги Меҳнат кодексига кўра, қатор ходимлар ишга қабул қилинганда дастлабки синов белгиланмайди
          </p>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to={`/card/${id}`} className="slide w-[400px] pt-[20px] flex flex-col">
          <img src={biznes} alt="" />
          <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
          Янги Меҳнат кодексига кўра, қатор ходимлар ишга қабул қилинганда дастлабки синов белгиланмайди
          </p>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to={`/card/${id}`} className="slide w-[400px] pt-[20px] flex flex-col">
          <img src={biznes} alt="" />
          <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
          Янги Меҳнат кодексига кўра, қатор ходимлар ишга қабул қилинганда дастлабки синов белгиланмайди
          </p>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to={`/card/${id}`} className="slide w-[400px] pt-[20px] flex flex-col">
          <img src={biznes} alt="" />
          <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
          Янги Меҳнат кодексига кўра, қатор ходимлар ишга қабул қилинганда дастлабки синов белгиланмайди
          </p>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to={`/card/${id}`} className="slide w-[400px] pt-[20px] flex flex-col">
          <img src={biznes} alt="" />
          <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
          Янги Меҳнат кодексига кўра, қатор ходимлар ишга қабул қилинганда дастлабки синов белгиланмайди
          </p>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to={`/card/${id}`} className="slide w-[400px] pt-[20px] flex flex-col">
          <img src={biznes} alt="" />
          <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
          Янги Меҳнат кодексига кўра, қатор ходимлар ишга қабул қилинганда дастлабки синов белгиланмайди
          </p>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to={`/card/${id}`} className="slide w-[400px] pt-[20px] flex flex-col">
          <img src={biznes} alt="" />
          <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
          Янги Меҳнат кодексига кўра, қатор ходимлар ишга қабул қилинганда дастлабки синов белгиланмайди
          </p>
        </Link>
      </SwiperSlide>
    </>
  );

  return (
    <div className="flex w-full bg-[#F8F8FF] justify-center static pb-5">
      <div className="slider w-[1300px] justify-center items-center bg-white p-6 rounded-md z-10">
        <div className="top flex justify-between items-center text-2xl text-[#1D3068] border-b pb-5">
          <div className="flex items-center">
            <i class="ri-settings-6-fill"></i>
            <h1 className="pl-5">Бизнес</h1>
          </div>
        </div>
        <Swiper
          id="swiper"
          slidesPerView={3}
          // slidesPerColumn={2}
          // slidesPerColumnFill="row"
          spaceBetween={30}
          // slidesPerGroup={2}
          autoplay
          loop
          onReachEnd={() => {
            console.log("reach end");
            const tmp = slides.unshift;
            slides.push(tmp);
          }}
          navigation
        >
          {slides}
        </Swiper>
      </div>
    </div>
  );
}
