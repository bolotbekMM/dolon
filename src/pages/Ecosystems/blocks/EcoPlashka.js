import React from "react";
import css from "./EcoPlashka.module.scss";

const ecoPlashkaText = {
  text: `Благодаря уникальным возможностям, Dolon упрощает работу с информационными потоками для геологоразведочных и горнодобывающих компаний во всем мире, предоставляя пользователям свободу, гибкость и возможность командного взаимодействия`,
};

const EcoPlashka = () => {
  return (
    <div className={css.ecoPlashka}>
      <div className="container">
        <div className={css.box}>
          <p>{ecoPlashkaText.text}</p>
        </div>
      </div>
    </div>
  );
};

export default EcoPlashka;
