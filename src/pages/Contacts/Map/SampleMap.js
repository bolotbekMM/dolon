import React from "react";

import css from "./SampleMap.module.scss";

// import { ReactComponent as Map } from "../../../assets/icons/pin.svg";

export const SampleMap = () => {
  const defaultProps = {
    center: {
      lat: 42.8889619,
      lng: 74.6048946,
    },
    zoom: 13,
    borderRadius: "8px",
  };

  return (
    <div id="map" className={css.map}>
      {/* <YMaps>
        <div>
          <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
        </div>
      </YMaps> */}
    </div>
  );
};

{
  /* <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAsllPfRxCggGPIm-SYbAZPoZKTxH6XHV8" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {coordinates.map((el, idx) => (
          <MapIcon key={idx} lat={el[0]} lng={el[1]} />
        ))}
      </GoogleMapReact> */
}
