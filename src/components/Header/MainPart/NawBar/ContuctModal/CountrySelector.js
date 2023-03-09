import React from "react";
import Flag from "react-flagkit";
import css from "./CountrySelector.module.scss";
import file from "../../../../../utils/data/countries.json";
import { useTranslation } from "react-i18next";

function CountrySelector({ setcodeState, codestate, setshowCountryCodeModal }) {
  const { t, i18n } = useTranslation();

  const filteredCountries = codestate.dial_code
    ? file.filter((c) => c.dial_code.includes(codestate.dial_code))
    : file;

  function handleChangeFunc(el) {
    setcodeState({ dial_code: el.dial_code, code: el.code, name:el.name });
    setshowCountryCodeModal(false);
  }
  return (
    <div className={css.modal}>
      {filteredCountries.map((el) => {
        return (
          <div
            key={el.code}
            className={css.countries}
            onClick={() => handleChangeFunc(el)}
          >
            <Flag country={el.code} className={css.flag} />
            <span>{el.dial_code}</span>
          </div>
        );
      })}
      {filteredCountries.length === 0 && (
        <p className={css.Error}>{t("form.Error")}</p>
      )}
    </div>
  );
}
export default CountrySelector;

