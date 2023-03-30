import React from "react";
import { useTranslation } from "react-i18next";
import css from "./Contucts.module.scss";
import MapKg from "./Map/MapKg";
import MapKz from "./Map/MapKz";

const Contucts = () => {
  const { t } = useTranslation();

  let kz = {
    country: "ContactsKazahstan.country",
    adress: "ContactsKazahstan.adress",
    phone: "+7 771 225 98 34",
    email: "alexandr.m@dolon.tech",
    coordinates: [43.216977, 76.905598],
  };
  let kg = {
    country: "ContactsKyrgyzstan.country",
    adress: "ContactsKyrgyzstan.adress",
    phone: "+996 700 173 295",
    email: "satar.t@dolon.tech",
    coordinates: [42.843686, 74.590648],
  };

  return (
    <div className={css.contucts}>
      <div className="container">
        <div className={css.box}>
          <h3 className={css.title}>{t("Glob.Contacts")}</h3>
          <ul className={css.contactsUl}>
            <li>
              <p>{t(kz.country)}</p>
              <p>{t(kz.adress)}</p>
              <a className={css.phone} href={`tel:${kz.phone}`}>
                {kz.phone}
              </a>
              <a className={css.email} href={`mailto:${kz.email}`}>
                {kz.email}
              </a>
              <MapKz />
            </li>
            <li>
              <p>{t(kg.country)}</p>
              <p>{t(kg.adress)}</p>
              <a className={css.phone} href={`tel:${kg.phone}`}>
                {kg.phone}
              </a>
              <a className={css.email} href={`mailto:${kg.email}`}>
                {kg.email}
              </a>
              <MapKg />
            </li>
          </ul>
        </div>
        <div className={css.locations}></div>

        <div className={css.shadowEllipsBox}>
          <div className={css.shadowEllips}></div>
        </div>
      </div>
    </div>
  );
};

export default Contucts;

// import { Map, YMaps, Placemark } from "react-yandex-maps";
// import { SampleMap } from "./Map/SampleMap";

// const defaultPropsKz = {
//   center: [43.216977, 76.905598],
//   zoom: 13,
// };
// const defaultPropsKg = {
//   center: [42.843686, 74.590648],
//   zoom: 13,
// };
// const apiKey = "a7031374-99ea-465c-a189-62507eb3f61a";
// const mapOptions = {
//   suppressMapOpenBlock: true,
//   lang: "en_US",
// };

{
  /* <div className={css.mapBox}>
                <YMaps query={{ apikey: apiKey }}>
                  <Map
                    defaultState={defaultPropsKz}
                    options={mapOptions}
                    width="100%"
                    height="100%"
                  >
                    <Placemark geometry={[43.216977, 76.905598]} />
                  </Map>
                </YMaps>
              </div> */
}
{
  /* <SampleMap city={kz.coordinates} /> */
}

{
  /* <div className={css.mapBox}>
                <YMaps query={{ apikey: apiKey }}>
                  <Map
                    defaultState={defaultPropsKg}
                    options={mapOptions}
                    width="100%"
                    height="100%"
                  >
                    <Placemark geometry={[42.843686, 74.590648]} />
                  </Map>
                </YMaps>
              </div> */
}
{
  /* <SampleMap city={kg.coordinates} /> */
}
