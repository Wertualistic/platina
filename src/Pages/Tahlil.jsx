import React from "react";
import img1 from '../assets/img1.png';
import ads1 from '../assets/ads1.png';
import small from '../assets/small.png';
import { Link } from "react-router-dom";

function Tahlil() {
  const id = Math.random(Number)
  return (
    <div className="flex bg-[#F8F8FF] justify-center items-center pt-5 pb-5">
      <div className="flex justify-between items-start w-[85%]">
        <div className="w-[860px] flex flex-col justify-start items-start bg-white p-5 rounded-md">
          <div className="top flex justify-between items-center border-b pb-5 w-full">
            <div className="flex items-center text-2xl font-bold text-[#1D3068]">
              <i class="ri-settings-6-fill"></i>
              <h1 className="pl-5">Таҳлил</h1>
            </div>
          </div>
          <div className="cards flex flex-col">
          <Link to={`/card/${id}`} className="card flex w-[820px] gap-5 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[24px] text-[#1D3068]">Таҳлилда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди</p>
              <div className="flex gap-3 pt-3">
                <p className="text-[#00AEAD]">Таҳлил</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={img1} alt="" className="h-[86px]"/>
          </Link>
          <Link to={`/card/${id}`} className="card flex w-[820px] gap-5 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[24px] text-[#1D3068]">Таҳлилда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди</p>
              <div className="flex gap-3 pt-3">
                <p className="text-[#00AEAD]">Таҳлил</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={img1} alt="" className="h-[86px]"/>
          </Link>
          <Link to={`/card/${id}`} className="card flex w-[820px] gap-5 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[24px] text-[#1D3068]">Таҳлилда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди</p>
              <div className="flex gap-3 pt-3">
                <p className="text-[#00AEAD]">Таҳлил</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={img1} alt="" className="h-[86px]"/>
          </Link>
          <Link to={`/card/${id}`} className="card flex w-[820px] gap-5 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[24px] text-[#1D3068]">Таҳлилда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди</p>
              <div className="flex gap-3 pt-3">
                <p className="text-[#00AEAD]">Таҳлил</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={img1} alt="" className="h-[86px]"/>
          </Link>
          <Link to={`/card/${id}`} className="card flex w-[820px] gap-5 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[24px] text-[#1D3068]">Таҳлилда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди</p>
              <div className="flex gap-3 pt-3">
                <p className="text-[#00AEAD]">Таҳлил</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={img1} alt="" className="h-[86px]"/>
          </Link>
          <Link to={`/card/${id}`} className="card flex w-[820px] gap-5 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[24px] text-[#1D3068]">Таҳлилда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди</p>
              <div className="flex gap-3 pt-3">
                <p className="text-[#00AEAD]">Таҳлил</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={img1} alt="" className="h-[86px]"/>
          </Link>
          <Link to={`/card/${id}`} className="card flex w-[820px] gap-5 pt-[20px] border-b pb-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[24px] text-[#1D3068]">Таҳлилда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди</p>
              <div className="flex gap-3 pt-3">
                <p className="text-[#00AEAD]">Таҳлил</p>
                <p className="text-[#A9AABC]">2 кун олдин</p>
              </div>
            </div>
            <img src={img1} alt="" className="h-[86px]"/>
          </Link>
          <a href="/#" className="w-full py-[14px] flex items-center justify-center rounded-md bg-[#F8F8FF]">Яна юклаш</a>
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
      </div>
    </div>
  );
}

export default Tahlil;