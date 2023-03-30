import { useEffect } from "react";
import ymaps from "ymaps";
import css from "./SampleMap.module.scss";

const MapKg = () => {
  useEffect(() => {
    ymaps
      .load("https://api-maps.yandex.ru/2.1/?lang=en_US")
      .then((maps) => {
        const map = new maps.Map("your-map-containerr", {
          center: [42.843686, 74.590648],
          zoom: 13,
        });
        const marker = new maps.Placemark([42.843686, 74.590648], {
          hintContent: "Маркер",
        });

        map.geoObjects.add(marker);
      })
      .catch((error) => console.log("Failed to load Yandex Maps", error));
  }, []);

  return (
    <div className={css.mapBox}>
      <div id="your-map-containerr" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default MapKg;
