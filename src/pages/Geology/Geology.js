import React from "react";
import css from "./Geology.module.scss";
import ReModule from "../../components/ReModules/ReModule";
import banner from "../../assets/img/geology/geologyImage.svg";
import image from "../../assets/img/geology/geologyImg.png";
import { useTranslation } from "react-i18next";

const Geology = () => {
  const { t, i18n } = useTranslation();
  return (
    <ReModule module={"Geology"} banner={banner} title={t("Modules.geology")}>
      <div className="container">
        <div className={css.module}>
          <div className={css.box1}>
            <p>
              Не упустите возможность поднять мониторинг скважин на новый
              уровень!
            </p>
            <img src={image} alt="image123" />
          </div>
          <div className={css.box2}>
            <h3>Компонент: QA/QC</h3>
            <p>
              Обеспечение качества имеет решающее значение для любого проекта, и
              для этого QA/QC являются важнейшими инструментами достижения
              успеха. Придерживаясь международных стандартов и регулярно
              проверяя качество своей работы, вы можете значительно повысить
              надежность и точность своих данных. Это особенно важно, когда речь
              идет об оценке ресурсов, запасов и принятии финансовых решений,
              поскольку даже небольшие ошибки могут оказать огромное влияние на
              успех вашего проекта.
            </p>
            <p>
              Но QA/QC — это не только выявление ошибок, но и экономия времени и
              денег. Выявляя и исправляя ошибки на ранних стадиях, вы можете
              избежать дорогостоящих задержек и переделок в дальнейшем. Одним
              словом, инвестиции в QA/QC — это разумный шаг, который окупается в
              долгосрочной перспективе. Поэтому не стоит недооценивать значение
              этих процессов - обязательно включайте QA/QC в каждый этап ваших
              программ разведки для достижения максимального успеха.
            </p>
          </div>
        </div>
      </div>
    </ReModule>
  );
};

export default Geology;
