import React from "react";
import { Link } from "react-router-dom";
import footballer from "../assets/footballer.png";
import messi from "../assets/messi.png";

function Sport() {
  const id = Math.random(Number)
  return (
    <div className="flex bg-[#F8F8FF] justify-center items-center pt-5">
      <div className="flex flex-col justify-center items-center bg-white rounded-md w-[85%] p-5">
        <div className="top flex justify-between items-center border-b pb-5 w-full">
          <div className="flex items-center text-2xl font-bold text-[#1D3068]">
            <i class="ri-settings-6-fill"></i>
            <h1 className="pl-5">#Sport</h1>
          </div>
          <div className="flex items-center text-xl text-[#1D3068] gap-3">
            <Link to='/sport'>Барчаси</Link>
            <i class="ri-arrow-right-line"></i>
          </div>
        </div>
        <div className="flex pt-5 justify-between items-start w-full">
          <Link to={`/card/${id}`} className="big flex flex-col">
            <img src={footballer} alt="" />
            <h1 className="font-bold text-[32px] text-[#1D3068] pb-3">
              Модрич Саудия клубининг таклифини рад қилди
            </h1>
            <div className="flex gap-5 pt-5">
              <p className="text-[#E50029]">Спорт</p>
              <p className="text-[#A9AABC]">2 кун олдин</p>
            </div>
          </Link>
          <div className="small flex flex-col">
          <Link to={`/card/${id}`} className="card flex w-[380px] gap-4 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[17px] text-[#1D3068]">Саудия клуби Месси исми туширилган либосларни сотувга чиқарди</p>
              <div className="flex gap-3 pt-3">
                <p className="text-[#E50029]">Спорт</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={messi} alt="" className="h-[86px]"/>
          </Link>
          <Link to={`/card/${id}`} className="card flex w-[380px] gap-4 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[17px] text-[#1D3068]">Саудия клуби Месси исми туширилган либосларни сотувга чиқарди</p>
              <div className="flex gap-3 pt-3">
                <p className="text-[#E50029]">Спорт</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={messi} alt="" className="h-[86px]"/>
          </Link>
          <Link to={`/card/${id}`} className="card flex w-[380px] gap-4 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[17px] text-[#1D3068]">Саудия клуби Месси исми туширилган либосларни сотувга чиқарди</p>
              <div className="flex gap-3 pt-3">
                <p className="text-[#E50029]">Спорт</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={messi} alt="" className="h-[86px]"/>
          </Link>
          <Link to={`/card/${id}`} className="card flex w-[380px] gap-4 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[17px] text-[#1D3068]">Саудия клуби Месси исми туширилган либосларни сотувга чиқарди</p>
              <div className="flex gap-3 pt-3">
                <p className="text-[#E50029]">Спорт</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={messi} alt="" className="h-[86px]"/>
          </Link>
          <Link to={`/card/${id}`} className="card flex w-[380px] gap-4 pt-[20px] pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[17px] text-[#1D3068]">Саудия клуби Месси исми туширилган либосларни сотувга чиқарди</p>
              <div className="flex gap-3 pt-3">
                <p className="text-[#E50029]">Спорт</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={messi} alt="" className="h-[86px]"/>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sport;
