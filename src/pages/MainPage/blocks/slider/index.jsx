import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../../../assets/img/mainPage/slider1.jpg";
import slider2 from "../../../../assets/img/mainPage/slider2.jpg";
import slider3 from "../../../../assets/img/mainPage/slider3.jpg";
import slider4 from "../../../../assets/img/mainPage/slider4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.scss";

// import required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useTranslation } from "react-i18next";

export default function Slider() {
  const { t, i18n } = useTranslation();
  const [count, setCount] = useState(0);
  let sliderData = [
    {
      title: t("SliderBlocks.1"),
      Descriptions1: t("SlideBlockWebOrientDesc.1"),
      Descriptions2: t("SlideBlockWebOrientDesc.2"),
      Descriptions3: t("SlideBlockWebOrientDesc.3"),
      Descriptions4: t("SlideBlockWebOrientDesc.4"),
      img: slider1,
    },
    {
      title: t("SliderBlocks.2"),
      Descriptions1: t("SlideBlockFlexDesc.1"),
      Descriptions2: t("SlideBlockFlexDesc.2"),
      Descriptions3: t("SlideBlockFlexDesc.3"),
      Descriptions4: t("SlideBlockFlexDesc.4"),
      img: slider2,
    },
    {
      title: t("SliderBlocks.3"),
      Descriptions1: t("SlideBlockSingleDesc.1"),
      Descriptions2: t("SlideBlockSingleDesc.2"),
      Descriptions3: t("SlideBlockSingleDesc.3"),
      Descriptions4: t("SlideBlockSingleDesc.4"),
      img: slider3,
    },
    {
      title: t("SliderBlocks.4"),
      Descriptions1: t("SlideBlockNoHidenDesc.1"),
      Descriptions2: t("SlideBlockNoHidenDesc.2"),
      Descriptions3: t("SlideBlockNoHidenDesc.3"),
      Descriptions4: t("SlideBlockNoHidenDesc.4"),
      img: slider4,
    },
  ];
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      console.log(className);
      return (
        '<span class="' +
        className +
        " pagItem" +
        '">' +
        sliderData[index].title +
        "</span>"
      );
    },
  };

  useEffect(() => {
    console.log("test");
    setCount(count + 1);
  }, [t]);
  return (
    <div className="slider">
      <Swiper
        pagination={pagination}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        bulletActiveClass="activePagItem"
        className="mySwiper"
        allowTouchMove={true}
      >
        {sliderData.map((elem) => {
          return (
            <SwiperSlide key={elem.title}>
              <div className="sliderItem">
                <div className="sliderContent">
                  <p className="sliderTitle">{elem.title}</p>
                  <div className="text">
                    <p className="paragraph">{elem.Descriptions1}</p>
                    <p className="paragraph">{elem.Descriptions2}</p>
                    <p className="paragraph">{elem.Descriptions3}</p>
                    <p className="paragraph">{elem.Descriptions4}</p>
                  </div>
                </div>
                <img src={elem.img} alt="" className="sliderImg" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
