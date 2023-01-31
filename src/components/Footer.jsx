import React from "react";
import logo from "../assets/logo.svg";
import redmedia from "../assets/redmedia.svg";

function Footer() {
  return (
    <div className="flex justify-center items-center pt-5">
      <div className="flex justify-start items-center w-[1300px]">
        <div className="flex flex-col justify-start p-5">
          <div className="flex items-center justify-start gap-[55px]">
            <img src={logo} alt="" />
            <a href="/#" className="text-[#1D3068]">
              Сайт ҳақида
            </a>
            <a href="/#" className="text-[#1D3068]">
              Реклама
            </a>
            <a href="/#" className="text-[#1D3068]">
              Маҳфийлик сиёсати
            </a>
          </div>
          <div className="flex pt-6 gap-[40px] border-b pb-[15px]">
            <p className="text-[#737C98] w-[406px] text-[14px]">
              © 2023 Platina.uz. Барча ҳуқуқлар ҳимояланган. «Platina.uz»
              сайтида жойланган маълумотлар муаллифнинг шахсий фикри. Сайтда
              жойланган ҳар қандай материалларни ёзма рухсатсиз фойдаланиш
              таъқиқланади.
            </p>
            <p className="text-[#737C98] w-[406px] text-[14px]">
              Ўзбекистон Республикаси Президенти Администрацияси ҳузуридаги
              Ахборот ва оммавий коммуникациялар агентлиги томонидан 02.12.2022
              санасида №051412 сонли гувоҳнома билан ОАВ сифатида рўйхатга
              олинган
            </p>
            <p className="text-[#737C98] w-[406px] text-[14px]">
              Агарда хатолик топсангиз матннинг бир қисмини белгилаб Ctrl+Enter
              тугмаларини босинг
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[23px] pt-[20px] hover:text-[#1D3068] cursor-pointer">
              <i class="ri-telegram-line text-[#737C98] text-[22px] hover:text-[#1D3068] cursor-pointer"></i>
              <i class="ri-instagram-line text-[#737C98] text-[22px] hover:text-[#1D3068] cursor-pointer"></i>
              <i class="ri-facebook-fill text-[#737C98] text-[22px] hover:text-[#1D3068] cursor-pointer"></i>
              <i class="ri-youtube-fill text-[#737C98] text-[22px] hover:text-[#1D3068] cursor-pointer"></i>
              <i class="ri-twitter-fill text-[#737C98] text-[22px] hover:text-[#1D3068] cursor-pointer"></i>
              <i class="fa-brands fa-tiktok text-[#737C98] text-[20px] hover:text-[#1D3068] cursor-pointer"></i>
            </div>
            <div className="flex gap-3">
                <img src={redmedia} alt="" />
                <p className="text-[#737C98] text-[14px]">IT-компанияси томонидан ишлаб чиқилди</p>
            </div>
                <p className="text-[#737C98] text-[12px] py-[11px] px-[7px] bg-[#F8F8FF] rounded-md">18+</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
