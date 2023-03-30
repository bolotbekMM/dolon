import { useEffect } from "react";
import ymaps from "ymaps";
import css from "./SampleMap.module.scss";

const MapKz = () => {
  useEffect(() => {
    ymaps
      .load("https://api-maps.yandex.ru/2.1/?lang=en_US")
      .then((maps) => {
        const map = new maps.Map("your-map-container", {
          center: [43.216977, 76.905598],
          zoom: 13,
        });
        const marker = new maps.Placemark([43.216977, 76.905598], {
          hintContent: "Маркер",
        });

        map.geoObjects.add(marker);
      })
      .catch((error) => console.log("Failed to load Yandex Maps", error));
  }, []);

  return (
    <div className={css.mapBox}>
      <div id="your-map-container" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default MapKz;
