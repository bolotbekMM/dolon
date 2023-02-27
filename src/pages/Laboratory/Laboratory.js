import React from "react";
import css from "./Laboratory.module.scss";
import ReModule from "../../components/ReModules/ReModule";
import banner from "../../assets/img/laboratory/laboratoryBanner.png";
import image from "../../assets/img/laboratory/labImg.png";
import { useTranslation } from "react-i18next";

const Laboratory = () => {
  const { t, i18n } = useTranslation();
  return (
    <ReModule
      module={"Drilling"}
      banner={banner}
      title={t("Modules.laboratory")}
    >
      <div className="container">
        <div className={css.module}>
          <div className={css.box1}>
            <p>
              Если вы занимаетесь управлением буровыми работами, вы знаете, как
              важно отслеживать все детали. Именно тут на помощь приходит модуль
              «Бурение»- продвинутый инструмент, который помогает вам быть в
              курсе происходящего и предлагает следующие инструменты:
            </p>
            <div className={css.line}></div>
            <ul>
              <li>Данные о буровых рейсах;</li>
              <li>Затраченное время на основную работу и простои;</li>
              <li>Учет по ДВС и генераторам;</li>
              <li>Учет по расходу топлива;</li>
              <li>Заявки на запчасти;</li>
              <li>Фотодокументация</li>
            </ul>
          </div>
          <div className={css.box2}>
            <p>
              Вместе с модулем «Бурение» так же эффективно можно использовать
              возможности Dashboard и отчетные формы Dolon. В связке эти два
              модуля позволят постоянно быть в курсе событий и принимать
              своевременные решения, где бы вы ни находились
            </p>
            <img src={image} alt="image" />
          </div>
        </div>
      </div>
    </ReModule>
  );
};

export default Laboratory;
