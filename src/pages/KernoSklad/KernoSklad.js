import React from "react";
import css from "./KernoSklad.module.scss";
import ReModule from "../../components/ReModules/ReModule";
import banner from "../../assets/img/kernosklad/KernoBanner.png";

const KernoSklad = () => {
  let title = "КЕРНОСКЛАД";
  return (
    <ReModule module={"KernoSklad"} banner={banner} title={title}>
      <div className="container">
        <div className={css.module}>
          <div className={css.box1}>
            <p>
              Представляем модуль «Керносклад», совершенный инструмент для
              отслеживания и организации образцов в вашем хранилище керна. Наш
              модуль разработан для оптимизации процессов управления образцами,
              чтобы вы могли сосредоточиться на исследованиях и аналитике.
            </p>
            <p>
              Представляем модуль «Керносклад», совершенный инструмент для
              отслеживания и организации образцов в вашем хранилище керна. Наш
              модуль разработан для оптимизации процессов управления образцами,
              чтобы вы могли сосредоточиться на исследованиях и аналитике.
            </p>
          </div>
          <div className={css.box2}>
            <p>
              Модуль также включает формы учета местоположения образцов в
              керноскладе. Это поможет вам отслеживать, где находится каждый
              образец, чтобы вы могли легко найти и получить доступ к нему в
              случае необходимости.
            </p>
            <p>
              Аналитические формы для вывода информации о пробах в определенных
              локациях керносклада, позволяет быстро и легко увидеть, какие
              образцы имеются в каждом ряду, стеллаже или коробке, что облегчает
              планирование исследований и анализов
            </p>
          </div>
        </div>
      </div>
    </ReModule>
  );
};

export default KernoSklad;