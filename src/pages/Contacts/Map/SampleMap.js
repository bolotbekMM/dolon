import React from "react";
import { Map, YMaps, Placemark } from "react-yandex-maps";
import css from "./SampleMap.module.scss";

export const SampleMap = ({ city }) => {
  const defaultProps = {
    center: city,
    zoom: 13,
  };
  const apiKey = "a7031374-99ea-465c-a189-62507eb3f61a";
  const mapOptions = {
    suppressMapOpenBlock: true,
    lang: "en_US",
  };

  return (
    <div className={css.mapBox}>
      <YMaps query={{ apikey: apiKey }}>
        <Map
          defaultState={defaultProps}
          options={mapOptions}
          width="100%"
          height="100%"
        >
          <Placemark geometry={city} />
        </Map>
      </YMaps>
    </div>
  );
};
