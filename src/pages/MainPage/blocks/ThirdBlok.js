import React from "react";
import css from "./ThirdBlok.module.scss";

const ThirdBlok = () => {
  return (
    <section className={css.thirdBlok}>
      <div className="container">
        <div className={css.box}>
          <p>
            Облачная экосистема Dolon – это комплексное решение для специалистов
            горнорудной и геологической отрасли по работе с массивом данных.
          </p>
          <p>
            Система является web-ориентированной и кроссплатформенной, что
            позволяет работать через браузер любого устройства, без
            необходимости установки сложного ПО.
          </p>
          <p>
            Работа с потоками данных производятся из любого места и участка
            работ компании, не требуя привязанности к определенному рабочему
            месту. Это позволяет получать информацию и отчеты в реальном времени
            и дает возможность всем отделам компании работать согласованно, с
            актуальной информацией и единой базой данных.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThirdBlok;
