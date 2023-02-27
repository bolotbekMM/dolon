import React from "react";
import css from "./SearchingRoutes.module.scss";
import ReModule from "../../components/ReModules/ReModule";
import banner from "../../assets/img/searchingRoutes/SearchingRoutes.png";
import { useTranslation } from "react-i18next";

const SearchingRoutes = () => {
  const { t, i18n } = useTranslation();
  return (
    <ReModule
      module={"SearchingRoutes"}
      banner={banner}
      title={t("Modules.searchRoutes")}
    >
      <div className="container">
        <div className={css.module}>
          <div className={css.box1}>
            <p>
              Во время организации работы геологов по поисковым маршрутам важно
              иметь правильные инструменты для обеспечения их безопасности и
              успеха в полевых условиях. Для этих целей Dolon предлагает
              воспользоваться эффективным модулем «Поисковые маршруты»,
              предоставляющий все необходимое:
            </p>
            <div className={css.line}></div>
            <ul>
              <li>
                Формы ввода данных по маршрутам, описания обнажений и отбора
                проб
              </li>
              <li>
                Возможность добавления фото, видео и аудио записей, с указанием
                геолокации
              </li>
              <li>
                Возможность автоматического построения пройденного маршрута и
                наложение его на карту
              </li>
            </ul>
          </div>
          <div className={css.box2}>
            <p>
              Модуль «Поисковые маршруты» предназначен не только для
              документирования, но также для обеспечения безопасности в полевых
              условиях. Он позволяет геологам передавать данные геолокации по
              таймеру или через определенное расстояние, чтобы вы всегда знали,
              где они находятся. Кроме того, функция автоматического построения
              маршрутов позволяет легко отслеживать их продвижение на карте.
            </p>
            <p>
              Поэтому, если вы хотите дать своим геологам инструменты,
              необходимые для успешной работы, и обеспечить их безопасность в
              полевых условиях, мы рекомендуем попробовать вам модуль «Поисковые
              маршруты».
            </p>
          </div>
        </div>
      </div>
    </ReModule>
  );
};

export default SearchingRoutes;
