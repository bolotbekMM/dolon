import React from "react";
import css from "./Marksheideriya.module.scss";
import ReModule from "../../components/ReModules/ReModule";
import banner from "../../assets/img/marksheider/markImage.png";
import image from "../../assets/img/marksheider/markImg.png";
import { useTranslation } from "react-i18next";

const Marksheideriya = () => {
  const { t, i18n } = useTranslation();
  return (
    <ReModule
      module={"Marksheideria"}
      banner={banner}
      title={t("Modules.marksheideria")}
    >
      <div className="container">
        <div className={css.module}>
          <div className={css.box1}>
            <p>
              Обратите внимание на модуль «Маркшейдерия», предлагаемый нашей
              системой. Это мощный набор инструментов и функций для расчета и
              анализа данных, включая расчет объема каркаса, булевые операции и
              сверку проектных и фактических объемов. Эти инструменты могут
              помочь пользователям точно оценить размер и форму ресурсов, а
              также влияние различных сценариев на эти ресурсы.
            </p>
            <img src={image} alt="not found" />
          </div>
          <div className={css.box2}>
            <ul>
              <li>● Набор функции по работе с полилиниями</li>
              <li>● Булевые операции над каркасами</li>
              <li>● Валидация и исправления каркасов</li>
              <li>● Инструменты редактирования каркасов</li>
              <li>● Инструменты разрезов</li>
              <li>● Размерные стили</li>
              <li>● Инструменты привязки к объектам</li>
              <li>● Инструменты по работе с облаком точек</li>
              <li>● Построение проектной выработки по сечению</li>
              <li>● Установка атрибутов на геологические объекты</li>
              <li>● Установка фильтров и легенд</li>
            </ul>
          </div>
        </div>
      </div>
    </ReModule>
  );
};

export default Marksheideriya;
