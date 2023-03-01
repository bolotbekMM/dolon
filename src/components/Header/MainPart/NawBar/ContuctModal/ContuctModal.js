import React, { useState } from "react";
import css from "./ContuctModal.module.scss";
import { useTranslation } from "react-i18next";
import { contactData } from "../../../../../utils/data/data";
import CountrySelector from "./CountrySelector";
import classNames from "classnames";
import { toast } from "react-toastify";

const ContuctModal = ({ handleMouseLeave }) => {
  const { t, i18n } = useTranslation();
  const [countryCode, setCountryCode] = useState({ code: "", country: "" });

  const [form, setForm] = useState({
    fio: "",
    phone: "",
    email: "",
  });

  const config = {
    Username: "dolonsystems@gmail.com",
    Password: "A9335968659627466661A4D9EFE3E639310D",
    Port: "2525",
    Host: "smtp.elasticemail.com",
    To: "info@dolon.tech",
    From: form.email,
    Subject: "Контакты Модалка",
    Body: `
        ФИО: ${form.fio},
        Phone: ${form.phone},
        Email: ${form.email},
        Country: ${form.country},
        Code: ${form.code},
    `,
  };

  const onInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onChangeCode = (option) => {
    setForm({ ...form, code: option.dial_code, country: option.name });
  };

  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const validateEmail = (value) => {
    if (value && value.match(isValidEmail)) {
      return true;
    } else {
      return false;
    }
  };
  const correctForm = () => {
    if (
      form.fio.length > 3 &&
      form.phone.length > 7 &&
      form.email.length > 7 &&
      validateEmail(form.email)
    )
      return true;
    return false;
  };

  function submitHandler(e) {
    e.preventDefault();
    if (window.Email) {
      console.log(window.Email);
      window.Email.send(config)
        .then((mess) => {
          console.log(mess);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally((data) => {
          console.log(data);
          toast.success("Мы свяжемся с вами в ближайшее время", "Спасибо!");
        });
    }
  }
  return (
    <div className={css.menuModal}>
      <div className={css.box} onMouseLeave={handleMouseLeave}>
        <form onSubmit={submitHandler} className={css.form}>
          <div className={css.fio}>
            <label htmlFor="fio">{t("form.nameSurname")}</label>
            <input
             autocomplete="off"
              type="text"
              name="fio"
              onInput={onInput}
              value={form.fio}
              id="fio"
              placeholder={`${t("form.enter")} ${t("form.nameSurname")}*`}
            />
          </div>
          <div className={css.tel}>
            <label htmlFor="phone">{t("form.phone")}</label>

            <div className={css.telBox}>
              <CountrySelector onChange={onChangeCode} />
              <input
              autocomplete="off"
                type="number"
                name="phone"
                onInput={onInput}
                value={form.phone}
                className={css.phoneNum}
                placeholder={t("form.phone")}
              />
            </div>
          </div>
          <div className={css.email}>
            <label htmlFor="email">{t("form.email")}</label>
            <input
              autocomplete="off"
              type="email"
              name="email"
              onInput={onInput}
              value={form.email}
              placeholder={`${t("form.enter")} E-mail*`}
            />
          </div>
          <div className={css.formBtn}>
            <button
              type="submit"
              disabled={!correctForm()}
              className={classNames(
                css.feedmodalBtn,
                correctForm() ? css.feedmodalBtnActive : ""
              )}
            >
              {t("form.accept")}
            </button>
          </div>
        </form>
        <div className={css.contactBlock}>
          <ul className={css.phoneNumbers}>
            {contactData.map((item, index) => {
              return (
                <li key={index}>
                  <a className={css.phone} href={`tel:${item.phone}`}>
                    {item.phone}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className={css.line}></div>
          <ul className={css.contacts}>
            {contactData.map((item, index) => {
              return (
                <li key={index}>
                  <p>{t(item.country)}</p>
                  <p>{t(item.adress)}</p>
                  <p className={css.phone}>{item.phone}</p>
                  <p className={css.email}>{item.email}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContuctModal;
