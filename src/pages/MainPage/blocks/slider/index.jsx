import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../../../assets/img/mainPage/slider1.jpg"
import slider2 from "../../../../assets/img/mainPage/slider2.jpg"
import slider3 from "../../../../assets/img/mainPage/slider3.jpg"
import slider4 from "../../../../assets/img/mainPage/slider4.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.scss";

// import required modules
import { Pagination } from "swiper";

export default function Slider() {

    let sliderData = [
        {
            title: "web-ориентированность и кроссплатформенность ",
            img: slider1
        },
        {
            title: "гибкость",
            img: slider2
        },
        {
            title: "Единая база данных ",
            img: slider3
        },
        {
            title: "Отсутствие скрытых затрат",
            img: slider4
        }
    ]
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
        console.log(className);
      return '<span class="' + className + " pagItem" + '">' + sliderData[index].title + "</span>";
    },
  };

  return (
    <div className="slider container">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        bulletActiveClass="activePagItem"
        className="mySwiper"
        
        
      >
        {
            sliderData.map((elem) => {
                return  <SwiperSlide key={elem.title}>
                            <div className="sliderItem">
                                <div className="sliderContent">
                                    <p className="sliderTitle">
                                        {
                                            elem.title
                                        }
                                    </p>
                                    <div className="text">
                                        <p className="paragraph">
                                        Dolon — это кроссплатформенное решение на основе 
                                        веб-технологий, которое обладает рядом ключевых 
                                        преимуществ по сравнению 
                                        с традиционными десктопными приложениями.
                                        </p>
                                        <p className="paragraph">
                                        С Dolon вы можете получить доступ к системе из любого места, 
                                        где есть подключение к Интернету, без необходимости 
                                        устанавливать приложение на ваше устройство. Это делает 
                                        его быстрым и удобным в использовании, а также 
                                        безопасным для вашего устройства.
                                        </p>
                                        <p className="paragraph">
                                        Кроме того, Dolon можно использовать на 
                                        различных устройствах, включая персональные 
                                        компьютеры и мобильные устройства, 
                                        такие как планшеты и смартфоны, 
                                        независимо от операционной системы.
                                        </p>
                                        <p className="paragraph">
                                        Эти особенности делают Dolon идеальным 
                                        выбором для предприятий, стремящихся 
                                        оптимизировать свою деятельность и 
                                        повысить производительность.
                                        </p>
                                    </div>
                                </div>
                                <img src={elem.img} alt="" className="sliderImg" />
                            </div>
                        </SwiperSlide>
            })
        }
        
        
      </Swiper>
    </div>
  );
}