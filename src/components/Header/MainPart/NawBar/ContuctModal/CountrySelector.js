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

// // CountrySelector.js
// import React, { useState } from "react";
// import css from "./CountrySelector.module.scss";
// import countries from "../../../../../utils/data/countries.json";

// const CountrySelector = ({ setcodeState, onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const onCountrySelect = (option) => {
//     setcodeState(option);
//   };

//   const filteredCountries = onSearch
//     ? countries.filter((c) =>
//         c.name.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : countries;

//   return (
//     <div className={css.countrySelector}>
//       <input
//         type="text"
//         value={searchTerm}
//         placeholder="Search by dial code"
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <ul>
//         {filteredCountries.map((country, index) => (
//           <li key={index} onClick={() => onCountrySelect(country)}>
//             <span className={css.country}>
//               <img src={country.flag} alt={country.name} />
//               {country.name}
//             </span>
//             <span className={css.dialCode}>{country.dial_code}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CountrySelector;
