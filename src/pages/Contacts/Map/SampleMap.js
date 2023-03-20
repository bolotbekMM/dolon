import React from "react";
import { Map, YMaps, Placemark } from "react-yandex-maps";
import css from "./SampleMap.module.scss";

export const SampleMap = ({ city }) => {
  const defaultProps = {
    center: city,
    zoom: 13,
    options: {
      mapTypeControl: {
        showInLangSelector: true,
      },
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
