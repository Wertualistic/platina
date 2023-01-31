import React from "react";
import air from "../assets/air.png";
import small from "../assets/small.png";
import ads1 from "../assets/ads1.png";
import img from '../assets/img.png';
import img1 from '../assets/img1.png';
import { Link } from "react-router-dom";

function Main() {
  const id = Math.random(Number)
  return (
    <div className="w-[100%] flex items-center justify-center bg-[#F8F8FF] pb-[30px]">
      <main className="w-[85%] items-start justify-center flex gap-[20px] mt-8">
        <div className="flex flex-col rounded-md p-[20px] bg-white">
          <Link to={`/card/${id}`} className="card flex flex-col w-[820px] cursor-pointer border-b pb-5">
            <img src={air} alt="" />
            <h1 className="text-[#1D3068] text-4xl font-bold py-[20px]">
              Тошкентдан Олмаотага учган самолёт бўйича қўшимча маълумот берилди
            </h1>
            <p className="text-[#485680]">
              2023 йил 2 январь куни Тошкент – Олмаота йўналиши бўйича КC128
              рейсини амалга ошириш чоғида «Air Astana» авиакомпаниясининг
              самолёти Чимкент парвозларни бошқариш маркази ҳудудида 350 (10600
              м) баландликда кучли турбулентликка учради. Самолёт...
            </p>
            <div className="flex gap-8 pt-5">
              <p className="text-[#FF7D25]">Жамият</p>
              <p className="text-[#A9AABC]">2 кун олдин</p>
            </div>
          </Link>
          <div className="flex pt-5 justify-between">
            <Link to={`/card/${id}`} className="card flex flex-col w-[400px]">
                <img src={img} alt="" />
                <p className="font-bold text-[17px] text-[#1D3068]">Францияда 700 га яқин машина ёқиб юборилди</p>
                <div className="flex gap-3 pt-5">
                <p className="text-[#003096]">Жаҳон</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </Link>
            <Link to={`/card/${id}`} className="card flex flex-col w-[400px]">
                <img src={img1} alt="" />
                <p className="font-bold text-[17px] text-[#1D3068]">Францияда 700 га яқин машина ёқиб юборилди</p>
                <div className="flex gap-3 pt-5">
                <p className="text-[#FF7D25]">Жамият</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col rounded-md p-[20px] bg-white w-[420px]">
          <div className="top flex items-center text-2xl text-[#1D3068] border-b pb-5">
            <i class="ri-settings-6-fill"></i>
            <h1 className="pl-5">Сўнгги янгиликлар</h1>
            <Link to='/latestNews'><i class="ri-arrow-right-line pl-[80px]"></i></Link>
          </div>
          <Link to={`/card/${id}`} className="card flex w-[380px] gap-4 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[17px] text-[#1D3068]">Туркияда кўплаб авиарейслар туман сабаб бекор қилинди</p>
              <div className="flex gap-3">
                <p className="text-[#003096]">Жаҳон</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={small} alt="" />
          </Link>
          <Link to={`/card/${id}`} className="card flex w-[380px] gap-4 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[17px] text-[#1D3068]">Туркияда кўплаб авиарейслар туман сабаб бекор қилинди</p>
              <div className="flex gap-3">
                <p className="text-[#003096]">Жаҳон</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={small} alt="" />
          </Link>
          <Link to={`/card/${id}`} className="card flex w-[380px] gap-4 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[17px] text-[#1D3068]">Туркияда кўплаб авиарейслар туман сабаб бекор қилинди</p>
              <div className="flex gap-3">
                <p className="text-[#003096]">Жаҳон</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={small} alt="" />
          </Link>
          <Link to={`/card/${id}`} className="card flex w-[380px] gap-4 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[17px] text-[#1D3068]">Туркияда кўплаб авиарейслар туман сабаб бекор қилинди</p>
              <div className="flex gap-3">
                <p className="text-[#003096]">Жаҳон</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={small} alt="" />
          </Link>
          <Link to={`/card/${id}`} className="card flex w-[380px] gap-4 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[17px] text-[#1D3068]">Туркияда кўплаб авиарейслар туман сабаб бекор қилинди</p>
              <div className="flex gap-3">
                <p className="text-[#003096]">Жаҳон</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={small} alt="" />
          </Link>
          <img src={ads1} alt="" className="pt-[20px]"/>
        </div>
      </main>
    </div>
  );
}

export default Main;
