import React from "react";
import { Link } from "react-router-dom";
import img2 from "../assets/img2.png";

function Articles() {
  const id = Math.random(Number)
  return (
    <div className="flex bg-[#F8F8FF] justify-center items-center pt-5">
      <div className="flex flex-col justify-center items-center bg-white rounded-md w-[85%] p-5">
        <div className="top flex justify-between items-center border-b pb-5 w-full">
          <div className="flex items-center text-2xl font-bold text-[#1D3068]">
            <i class="ri-settings-6-fill"></i>
            <h1 className="pl-5">Мақолалар</h1>
          </div>
          <Link to='/uzb' className="flex items-center text-xl text-[#1D3068] gap-3">
            <p>Барчаси</p>
            <i class="ri-arrow-right-line"></i>
          </Link>
        </div>
        <div className="flex flex-wrap justify-start items-start gap-5">
          <Link to={`/card/${id}`} className="card pt-[20px] flex flex-col w-[400px]">
            <img src={img2} alt="" />
            <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
              Оиладаги зўравонлик, аёллар ўлими, етим қолган болалар…
            </p>
            <div className="flex gap-5 pt-3">
              <p className="text-[#2DA85B]">Ўзбекистон</p>
              <p className="text-[#A9AABC]">2 кун олдин</p>
            </div>
          </Link>
          <Link to={`/card/${id}`} className="card pt-[20px] flex flex-col w-[400px]">
            <img src={img2} alt="" />
            <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
              Оиладаги зўравонлик, аёллар ўлими, етим қолган болалар…
            </p>
            <div className="flex gap-5 pt-3">
              <p className="text-[#2DA85B]">Ўзбекистон</p>
              <p className="text-[#A9AABC]">2 кун олдин</p>
            </div>
          </Link>
          <Link to={`/card/${id}`} className="card pt-[20px] flex flex-col w-[400px]">
            <img src={img2} alt="" />
            <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
              Оиладаги зўравонлик, аёллар ўлими, етим қолган болалар…
            </p>
            <div className="flex gap-5 pt-3">
              <p className="text-[#2DA85B]">Ўзбекистон</p>
              <p className="text-[#A9AABC]">2 кун олдин</p>
            </div>
          </Link>
          <Link to={`/card/${id}`} className="card pt-[20px] flex flex-col w-[400px]">
            <img src={img2} alt="" />
            <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
              Оиладаги зўравонлик, аёллар ўлими, етим қолган болалар…
            </p>
            <div className="flex gap-5 pt-3">
              <p className="text-[#2DA85B]">Ўзбекистон</p>
              <p className="text-[#A9AABC]">2 кун олдин</p>
            </div>
          </Link>
          <Link to={`/card/${id}`} className="card pt-[20px] flex flex-col w-[400px]">
            <img src={img2} alt="" />
            <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
              Оиладаги зўравонлик, аёллар ўлими, етим қолган болалар…
            </p>
            <div className="flex gap-5 pt-3">
              <p className="text-[#2DA85B]">Ўзбекистон</p>
              <p className="text-[#A9AABC]">2 кун олдин</p>
            </div>
          </Link>
          <Link to={`/card/${id}`} className="card pt-[20px] flex flex-col w-[400px]">
            <img src={img2} alt="" />
            <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
              Оиладаги зўравонлик, аёллар ўлими, етим қолган болалар…
            </p>
            <div className="flex gap-5 pt-3">
              <p className="text-[#2DA85B]">Ўзбекистон</p>
              <p className="text-[#A9AABC]">2 кун олдин</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Articles;
