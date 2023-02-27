import React from "react";
import css from "./Manitoring.module.scss";
import ReModule from "../../components/ReModules/ReModule";
import banner from "../../assets/img/manitoring/manitoringBanner.png";
import monitoringImg from "../../assets/img/manitoring/manitoringImage.svg";
import { useTranslation } from "react-i18next";

const Manitoring = () => {
  const { t, i18n } = useTranslation();
  return (
    <ReModule
      module={"Manitoring"}
      banner={banner}
      title={t("Modules.monitoring")}
    >
      <div className="container">
        <div className={css.module}>
          <div className={css.box1}>
            <p>
              Модуль «Мониторинг» предоставляет мощные информационные панели и
              отчеты, которые будут помогать вам контролировать выполнение
              работы и отслеживать ситуацию на всех рабочих участках.
            </p>
            <p>
              С помощью модуля «Мониторинг» вы получаете обзорные панели
              (dashboards) в виде карт, отчетов или общих значений для
              мониторинга нескольких объектов.
            </p>
            <p>
              Карты отображают устья скважин, буровые скважины, маршруты и
              растровые карты в режиме реального времени, давая вам полное
              представление о ваших операциях.
            </p>
            <p>
              В отчетах представлены подробные таблицы и графики, что дает
              возможность получить ценные сведения. А обзорные доски с общими
              значениями обеспечивают высокоуровневый обзор ваших операций,
              позволяя вам отслеживать ключевые показатели и принимать
              обоснованные решения.
            </p>
          </div>
          <div className={css.box2}>
            <img src={monitoringImg} />
          </div>
        </div>
      </div>
    </ReModule>
  );
};

export default Manitoring;
