import React from "react";
import logo from "../assets/logo.svg";
import usd from "../assets/USD.svg";
import img from "../assets/ads.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-col">
      <div className="w-[100%] flex justify-center items-center">
        <img src={img} alt="" />
      </div>
      <nav className="flex pt-[30px] justify-center gap-6 items-center">
        <Link to='/' className="nav_logo">
          <img src={logo} alt="" />
        </Link>
        <div className="search_ba flex items-center">
          <i class="ri-search-line text-[18px] relative left-[35px] text-[#1D3068]"></i>
          <input
            type="text"
            placeholder="Сайт бўйлаб қидирув..."
            className="w-[760px] outline-0 bg-[#F8F8FF] px-[20px] pl-[40px] py-[12px] rounded-md"
          />
        </div>
        <a
          href="https://t.me/platinauzb"
          className="flex items-center rounded-md bg-[#34AADF] text-white px-[20px] py-[12px]"
        >
          <i class="ri-telegram-fill"></i>
          <p>@platinauzb</p>
        </a>
        <select className="px-[25px] py-[12px] outline-0 bg-[#F8F8FF] rounded-md cursor-pointer">
          <option value="Ўзбекча">Ўзбекча</option>
          <option value="Ўзбекча">Ўзбекча</option>
          <option value="Ўзбекча">Ўзбекча</option>
        </select>
      </nav>
      <div className="flex justify-center items-center pt-[30px] pb-[15px]">
        <div className="flex justify-center gap-[480px] items-center w-[85%]">
          <div className="flex gap-10">
            <Link to='uzb'>Ўзбекистон</Link>
            <Link to='jahon'>Жаҳон</Link>
            <Link to='jamiyat'>Жамият</Link>
            <Link to='tahlil'>Таҳлил</Link>
            <Link to='sport'>Спорт</Link>
            <Link to='media'>Медиа</Link>
          </div>
          <div className="flex gap-10">
            <div className="flex items-center gap-3">
              <i class="ri-sun-line text-yellow-400"></i>
              <p>+9°C</p>
            </div>
            <div className="flex gap-3">
              <img src={usd} alt="" />
              <p className="text-[#1D3068]">
                USD <span className="text-[#E50029]">11318.74</span>
              </p>
              <i class="ri-arrow-right-down-line text-[#E50029]"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
