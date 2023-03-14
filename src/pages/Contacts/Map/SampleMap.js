import React from "react";
import { Map, YMaps, Placemark } from "react-yandex-maps";
import css from "./SampleMap.module.scss";

export const SampleMap = ({ city }) => {
  const defaultProps = {
    center: city,
    zoom: 13,
    lang: "en-RU",
    options: {
      mapTypeControl: {
        showInLangSelector: true,
      },
      lang: "en-RU",
      language: "en",
    },
  };

  const markerCoords = city;

  return (
    <div className={css.mapBox}>
      <YMaps>
        <Map state={defaultProps} width="100%" height="100%">
          <Placemark geometry={markerCoords} />
        </Map>
      </YMaps>
    </div>
  );
};
