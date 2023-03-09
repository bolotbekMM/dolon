import React from "react";
import { useTranslation } from "react-i18next";
import { contactData } from "../../utils/data/data";
import css from "./Contucts.module.scss";
import { SampleMap } from "./Map/SampleMap";

const Contucts = () => {
  const { t, i18n } = useTranslation();
  const bishkek = [42.843686, 74.590648];
  const almaty = [43.216977, 76.905598];
  return (
    <div className={css.contucts}>
      <div className="container">
        <div className={css.box}>
          <h3 className={css.title}>{t("Glob.Contacts")}</h3>
          <ul className={css.contactsUl}>
            {contactData.map((item, index) => {
              return (
                <li key={index}>
                  <p>{t(item.country)}</p>
                  <p>{t(item.adress)}</p>
                  <a className={css.phone} href={`tel:${item.phone}`}>
                    {item.phone}
                  </a>
                  <a className={css.email} href={`mailto:${item.email}`}>
                    {item.email}
                  </a>
                  <SampleMap city={item.coordinates} />
                </li>
              );
            })}
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
