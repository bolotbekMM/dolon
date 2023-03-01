import React, { useState, useEffect } from "react";
import Select from "react-select";
import Flag from "react-flagkit";
import css from "./ContuctModal.module.scss";
import file from "../../../../../utils/data/countries.json";
import { useTranslation } from "react-i18next";

function CountrySelector({ onChange }) {
  const { t, i18n } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(null);

  function handleChange(option) {
    setSelectedOption(option);
    if (onChange) {
      onChange(option);
    }
  }

  return (
    <Select
      className={css.flagSelect}
      value={selectedOption}
      onChange={handleChange}
      options={file}
      getOptionLabel={(option) => (
        <div className={css.flagBox}>
          <Flag country={option.code} className={css.flag} /> {option.dial_code}
        </div>
      )}
      getOptionValue={(option) => option.dial_code}
      placeholder={t("form.countryCode")}
    />
  );
}
export default CountrySelector;
