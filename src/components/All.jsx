import React from "react";
import { Link } from "react-router-dom";
import book from '../assets/book.png';

function All() {
  const id = Math.random(12);
  return (
    <div className="flex bg-[#F8F8FF] justify-center items-center pt-5 pb-5">
      <div className="flex justify-between items-start w-[85%]">
        <div className="w-[860px] flex flex-col justify-start items-start bg-white p-5 rounded-md">
          <div className="top flex justify-between items-center border-b pb-5 w-full">
            <div className="flex items-center text-2xl font-bold text-[#1D3068]">
              <i class="ri-settings-6-fill"></i>
              <h1 className="pl-5">Барча янгиликлар</h1>
            </div>
            <Link to='/jamiyat' className="flex items-center text-xl text-[#1D3068] gap-3">
              <p>Барчаси</p>
              <i class="ri-arrow-right-line"></i>
            </Link>
          </div>
          <div className="cards flex flex-col">
          <Link to={`/card/${id}`} className="card flex w-[820px] gap-5 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[24px] text-[#1D3068]">Ўзбекистонда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди</p>
              <div className="flex gap-3 pt-3">
                <p className="text-[#FF7D25]">Жамият</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={book} alt="" className="h-[86px]"/>
          </Link>
          <Link to={`/card/${id}`} className="card flex w-[820px] gap-5 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[24px] text-[#1D3068]">Ўзбекистонда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди</p>
              <div className="flex gap-3 pt-3">
                <p className="text-[#FF7D25]">Жамият</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={book} alt="" className="h-[86px]"/>
          </Link>
          <Link to={`/card/${id}`} className="card flex w-[820px] gap-5 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[24px] text-[#1D3068]">Ўзбекистонда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди</p>
              <div className="flex gap-3 pt-3">
                <p className="text-[#FF7D25]">Жамият</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={book} alt="" className="h-[86px]"/>
          </Link>
          <Link to={`/card/${id}`} className="card flex w-[820px] gap-5 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[24px] text-[#1D3068]">Ўзбекистонда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди</p>
              <div className="flex gap-3 pt-3">
                <p className="text-[#FF7D25]">Жамият</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={book} alt="" className="h-[86px]"/>
          </Link>
          <Link to={`/card/${id}`} className="card flex w-[820px] gap-5 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[24px] text-[#1D3068]">Ўзбекистонда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди</p>
              <div className="flex gap-3 pt-3">
                <p className="text-[#FF7D25]">Жамият</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={book} alt="" className="h-[86px]"/>
          </Link>
          <Link to={`/card/${id}`} className="card flex w-[820px] gap-5 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[24px] text-[#1D3068]">Ўзбекистонда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди</p>
              <div className="flex gap-3 pt-3">
                <p className="text-[#FF7D25]">Жамият</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={book} alt="" className="h-[86px]"/>
          </Link>
          <Link to={`/card/${id}`} className="card flex w-[820px] gap-5 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[24px] text-[#1D3068]">Ўзбекистонда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди</p>
              <div className="flex gap-3 pt-3">
                <p className="text-[#FF7D25]">Жамият</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={book} alt="" className="h-[86px]"/>
          </Link>
          <Link to={`/card/${id}`} className="card flex w-[820px] gap-5 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[24px] text-[#1D3068]">Ўзбекистонда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди</p>
              <div className="flex gap-3 pt-3">
                <p className="text-[#FF7D25]">Жамият</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={book} alt="" className="h-[86px]"/>
          </Link>
          <Link to={`/card/${id}`} className="card flex w-[820px] gap-5 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[24px] text-[#1D3068]">Ўзбекистонда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди</p>
              <div className="flex gap-3 pt-3">
                <p className="text-[#FF7D25]">Жамият</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={book} alt="" className="h-[86px]"/>
          </Link>
          <Link to={`/card/${id}`} className="card flex w-[820px] gap-5 pt-[20px] pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[24px] text-[#1D3068]">Ўзбекистонда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди</p>
              <div className="flex gap-3 pt-3">
                <p className="text-[#FF7D25]">Жамият</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={book} alt="" className="h-[86px]"/>
          </Link>
          <a href="/#" className="w-full py-[14px] flex items-center justify-center rounded-md bg-[#F8F8FF]">Яна юклаш</a>
          </div>
        </div>
        <div className="flex w-[420px] h-[754px] bg-white p-5 rounded-md">
            <div className="bg-[#D9D9D9] w-[380px] h-[714px] rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export default All;
