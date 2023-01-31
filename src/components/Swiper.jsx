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
import dori from "../assets/dori.png";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);
const id = Math.random(Number)
export default function Slider() {
  const slides = [];

  slides.push(
    <>
      <SwiperSlide>
        <Link to={`/card/${id}`} className="slide w-[300px] pt-[20px] flex flex-col">
          <img src={dori} alt="" />
          <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
            “Амбронол” сиропи ҳам сотувдан олинмоқда
          </p>
          <div className="flex gap-5 pt-3">
            <p className="text-[#2DA85B]">Ўзбекистон</p>
            <p className="text-[#A9AABC]">2 кун олдин</p>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to={`/card/${id}`} className="slide w-[300px] pt-[20px] flex flex-col">
          <img src={dori} alt="" />
          <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
            “Амбронол” сиропи ҳам сотувдан олинмоқда
          </p>
          <div className="flex gap-5 pt-3">
            <p className="text-[#2DA85B]">Ўзбекистон</p>
            <p className="text-[#A9AABC]">2 кун олдин</p>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to={`/card/${id}`} className="slide w-[300px] pt-[20px] flex flex-col">
          <img src={dori} alt="" />
          <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
            “Амбронол” сиропи ҳам сотувдан олинмоқда
          </p>
          <div className="flex gap-5 pt-3">
            <p className="text-[#2DA85B]">Ўзбекистон</p>
            <p className="text-[#A9AABC]">2 кун олдин</p>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to={`/card/${id}`} className="slide w-[300px] pt-[20px] flex flex-col">
          <img src={dori} alt="" />
          <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
            “Амбронол” сиропи ҳам сотувдан олинмоқда
          </p>
          <div className="flex gap-5 pt-3">
            <p className="text-[#2DA85B]">Ўзбекистон</p>
            <p className="text-[#A9AABC]">2 кун олдин</p>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to={`/card/${id}`} className="slide w-[300px] pt-[20px] flex flex-col">
          <img src={dori} alt="" />
          <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
            “Амбронол” сиропи ҳам сотувдан олинмоқда
          </p>
          <div className="flex gap-5 pt-3">
            <p className="text-[#2DA85B]">Ўзбекистон</p>
            <p className="text-[#A9AABC]">2 кун олдин</p>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to={`/card/${id}`} className="slide w-[300px] pt-[20px] flex flex-col">
          <img src={dori} alt="" />
          <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
            “Амбронол” сиропи ҳам сотувдан олинмоқда
          </p>
          <div className="flex gap-5 pt-3">
            <p className="text-[#2DA85B]">Ўзбекистон</p>
            <p className="text-[#A9AABC]">2 кун олдин</p>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to={`/card/${id}`} className="slide w-[300px] pt-[20px] flex flex-col">
          <img src={dori} alt="" />
          <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
            “Амбронол” сиропи ҳам сотувдан олинмоқда
          </p>
          <div className="flex gap-5 pt-3">
            <p className="text-[#2DA85B]">Ўзбекистон</p>
            <p className="text-[#A9AABC]">2 кун олдин</p>
          </div>
        </Link>
      </SwiperSlide>
    </>
  );

  return (
    <div className="flex w-full bg-[#F8F8FF] justify-center static">
      <div className="slider w-[1300px] justify-center items-center bg-white p-6 rounded-md z-10">
        <div className="top flex justify-between items-center text-2xl text-[#1D3068] border-b pb-5">
          <div className="flex items-center">
            <i class="ri-settings-6-fill"></i>
            <h1 className="pl-5">Муҳаррир танлови</h1>
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
