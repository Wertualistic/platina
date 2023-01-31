import React from "react";
import { Link } from "react-router-dom";
import classroom from "../assets/class.png";
import matbuot from "../assets/matbuot.png";
import img2 from "../assets/img2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from "swiper/core";
import "swiper/swiper-bundle.css";
import "../components/css.css";
import biznes from "../assets/biznes.png";

function Card() {
  const id = Math.random(Number);
  SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);
  const slides = [];

  slides.push(
    <>
      <SwiperSlide>
        <Link
          to={`/card/${id}`}
          className="slide w-[300px] pt-[20px] flex flex-col"
        >
          <img src={biznes} alt="" />
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
        <Link
          to={`/card/${id}`}
          className="slide w-[300px] pt-[20px] flex flex-col"
        >
          <img src={biznes} alt="" />
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
        <Link
          to={`/card/${id}`}
          className="slide w-[300px] pt-[20px] flex flex-col"
        >
          <img src={biznes} alt="" />
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
        <Link
          to={`/card/${id}`}
          className="slide w-[300px] pt-[20px] flex flex-col"
        >
          <img src={biznes} alt="" />
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
        <Link
          to={`/card/${id}`}
          className="slide w-[300px] pt-[20px] flex flex-col"
        >
          <img src={biznes} alt="" />
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
        <Link
          to={`/card/${id}`}
          className="slide w-[300px] pt-[20px] flex flex-col"
        >
          <img src={biznes} alt="" />
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
        <Link
          to={`/card/${id}`}
          className="slide w-[300px] pt-[20px] flex flex-col"
        >
          <img src={biznes} alt="" />
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
    <div className="flex w-[100%] justify-center items-center bg-[#F8F8FF] pt-5 pb-5">
      <div className="flex justify-start items-start gap-5">
        <div className="flex flex-col w-[860px] items-center justify-center">
          <div className="flex flex-col bg-white rounded-md p-5">
            <h1 className="font-bold text-[32px] text-[#1D3068]">
              Кечадан ўқиш бошланган мактабларда иссиқлик талабга жавоб
              берадими?
            </h1>
            <p className="text-[#1D3068] pt-3 pb-3">
              Маҳаллий ҳокимликлар чиқарган қарорга кўра, кеча, яъни 11 январдан
              кўпгина мактабларда ўқиш жараёни бошланди. Ташқаридаги ҳаво
              ҳарорати эса сўнгги йиллардаги айни шу мавсум кўрсаткичидан анча
              юқори.{" "}
            </p>
            <div className="flex w-full justify-between items-center pb-5">
              <div className="flex items-center gap-5">
                <p className="text-[#FF7D25]">Жамият</p>
                <p className="text-[#A9AABC]">2 январь, 11:12</p>
              </div>
              <div className="flex items-center gap-5">
                <p className="flex items-center text-[#A9AABC] gap-3">
                  <i class="ri-eye-line"></i> 15879
                </p>
                <p className="flex items-center text-[#A9AABC] gap-3">
                  <i class="ri-share-line"></i> Улашиш
                </p>
              </div>
            </div>
            <img src={classroom} alt="" />
            <div className="flex flex-col text-[17px] pt-6 leading-[26px] text-[#1D3068]">
              <p>
                Маҳаллий ҳокимликлар чиқарган қарорга кўра, кеча, яъни 11
                январдан кўпгина мактабларда ўқиш жараёни бошланди. Ташқаридаги
                ҳаво ҳарорати эса сўнгги йиллардаги айни шу мавсум кўрсаткичидан
                анча юқори. Яъни “Ўзгидромет”нинг тақдим этган маълумотига кўра,
                12-15 январда республика бўйича аномал совуқ об-ҳаво бўлиши
                кутилмоқда. Хўш, бундай совуқ ҳароратда 11 январдан ўқиш
                жараёнлари бошланган мактабларда иссиқлик талаблари қандай
                бўлиши керак? Санитария-эпидемиология хизмати ана шу талабларни
                эслатиб ўтди: <br />
                <br />
                &#x2022; Таълим муассасаларининг ўқув хоналарида ҳаво ҳарорати
                16º С дан паст бўлмаслиги керак <br />
                &#x2022; Таълим муассасаларининг ўқув хоналарида машғулотлар
                ўтказишда меҳнатни муҳофаза қилиш талабларига мувофиқ ўқув
                хоналарида ҳаво ҳарорати енгил жисмоний ишда 21º С, ўртача оғир
                ишда 17º С ва оғир ишда 16º С дан паст бўлмаслиги керак. <br />
                &#x2022; Физика ўқув лаборатория хонасида мунтазам равишда
                ҳарорат 18º С – 21º С, ҳавонинг намлиги 40 – 60 фоиз бўлиши
                керак. <br />
                &#x2022; Таълим муассасаси ҳудудидаги ҳожатхоналар иссиқ сув ва
                канализация тизимига уланган бўлиши лозим. <br />
                &#x2022; Таълим муассасасида канализация тизими йўқ бўлганда
                давлат санитария назорати органлари билан келишилган ҳолда
                таълим муассасасида ер қатламини ифлослантирмаган ҳолда
                душхоналардан ва юз-қўл ювгичлардан сув оқмайдиган қурилмали
                ахлат ўраларининг мавжуд бўлишига рухсат этилади. <br />
                &#x2022; Информатика ўқув хонасини ертўлаларда жойлаштириш
                тақиқланади. <br />
                &#x2022; Ўқув устахоналаридаги иш ўрни ҳар қандай бахтсиз
                ҳодисанинг олдини олишга қаратилган ҳолда ташкил қилинган бўлиши
                керак. <br />
                &#x2022; Хўш, кечадан дарс ўтилаётган мактаблардаги иссиқлик шу
                талабларга жавоб берадими? <br />
              </p>
              <div className="flex justify-between w-full pt-6">
                <div className="flex gap-3 items-center">
                  <p className="bg-[#F8F8FF] py-[7px] text-[#1D3068] rounded-md px-[10px]">
                    # Мактаб
                  </p>
                  <p className="bg-[#F8F8FF] py-[7px] text-[#1D3068] rounded-md px-[10px]">
                    # Иссиқлик
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <p className="flex items-center text-[#A9AABC] gap-3">
                    <i class="ri-eye-line"></i> 15879
                  </p>
                  <p className="flex items-center text-[#A9AABC] gap-3">
                    <i class="ri-share-line"></i> Улашиш
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-full pt-5">
            <div className="flex justify-start items-center w-[420px] bg-white rounded-md p-5">
              <div className="flex flex-col">
                <p className="text-[#1D3068] font-bold text-[17px]">
                  Президент бошқарув тузилмасида ўзгариш бўлди: янги тайинловлар
                  ва...
                </p>
                <a
                  href="/#"
                  className="flex gap-3 w-[178px] mt-3 rounded-md font-bold px-[14px] bg-[#F8F8FF] text-[#1D3068] text-[14px] py-[7px]"
                >
                  <i class="ri-arrow-left-line"></i>
                  Аввалги янгилик
                </a>
              </div>
              <img src={matbuot} alt="" />
            </div>
            <div className="flex justify-start items-center w-[420px] bg-white rounded-md p-5">
              <div className="flex flex-col">
                <p className="text-[#1D3068] font-bold text-[17px]">
                  Президент бошқарув тузилмасида ўзгариш бўлди: янги тайинловлар
                  ва...
                </p>
                <a
                  href="/#"
                  className="flex gap-3 w-[178px] mt-3 rounded-md font-bold px-[14px] bg-[#F8F8FF] text-[#1D3068] text-[14px] py-[7px]"
                >
                  Аввалги янгилик
                  <i class="ri-arrow-right-line"></i>
                </a>
              </div>
              <img src={matbuot} alt="" />
            </div>
          </div>
          <div className="flex justify-start w-full items-center">
            <div className="flex flex-col justify-center mt-5 items-end bg-white rounded-md w-[1300px] p-5">
              <div className="top flex justify-between items-center border-b pb-5 w-full">
                <div className="flex items-center text-2xl font-bold text-[#1D3068]">
                  <i class="ri-settings-6-fill"></i>
                  <h1 className="pl-5">Мақолалар</h1>
                </div>
                <Link
                  to="/uzb"
                  className="flex items-center text-xl text-[#1D3068] gap-3"
                >
                  <p>Барчаси</p>
                  <i class="ri-arrow-right-line"></i>
                </Link>
              </div>
              <div className="flex justify-start items-start gap-5">
                <Link
                  to={`/card/${id}`}
                  className="card pt-[20px] flex flex-col w-[400px]"
                >
                  <img src={img2} alt="" />
                  <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
                    Оиладаги зўравонлик, аёллар ўлими, етим қолган болалар…
                  </p>
                  <div className="flex gap-5 pt-3">
                    <p className="text-[#2DA85B]">Ўзбекистон</p>
                    <p className="text-[#A9AABC]">2 кун олдин</p>
                  </div>
                </Link>
                <Link
                  to={`/card/${id}`}
                  className="card pt-[20px] flex flex-col w-[400px]"
                >
                  <img src={img2} alt="" />
                  <p className="text-[#1D3068] font-bold text-[17px] pt-[15px]">
                    Оиладаги зўравонлик, аёллар ўлими, етим қолган болалар…
                  </p>
                  <div className="flex gap-5 pt-3">
                    <p className="text-[#2DA85B]">Ўзбекистон</p>
                    <p className="text-[#A9AABC]">2 кун олдин</p>
                  </div>
                </Link>
                <Link
                  to={`/card/${id}`}
                  className="card pt-[20px] flex flex-col w-[400px]"
                >
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
          <div className="flex w-full bg-[#F8F8FF] justify-start mt-5">
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
        </div>
        <div className="flex w-[420px] h-[754px] bg-white p-5 rounded-md">
          <div className="bg-[#D9D9D9] w-[380px] h-[714px] rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
