import React, { useState, useEffect, useRef } from "react";
import css from "./ContuctModal.module.scss";
import { useTranslation } from "react-i18next";
import { contactData } from "../../../../../utils/data/data";
import CountrySelector from "./CountrySelector";
import classNames from "classnames";
import { toast } from "react-toastify";
import IconInput from "../../../../../assets/icons/headerIcons/chdown.svg";
import Flag from "react-flagkit";
import DialogueStatus from "../../../../DialogueStatus/DialogueStatus";

const ContuctModal = () => {
  const { t, i18n } = useTranslation();
  const [showCountryCodeModal, setshowCountryCodeModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, seterrorModal] = useState(false);
  const [codestate, setcodeState] = useState({
    dial_code: "",
    code: "",
    name: "",
  });

  const countryCodeInputRef = useRef(null);

  const [form, setForm] = useState({
    fio: "",
    phone: "",
    email: "",
  });

  const onInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
      form.fio.length > 1 &&
      form.phone.length > 6 &&
      form.email.length > 4 &&
      validateEmail(form.email)
    )
      return true;
    return false;
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        countryCodeInputRef.current &&
        !countryCodeInputRef.current.contains(event.target)
      ) {
        setshowCountryCodeModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [countryCodeInputRef]);

  function handleChange(e) {
    setcodeState({ dial_code: e.target.value });
    setForm((form) => ({ ...form, code: e.target.value }));
    setshowCountryCodeModal(true);
  }
  const config = {
    Username: "dolonsystems@gmail.com",
    Password: "A9335968659627466661A4D9EFE3E639310D",
    Port: "2525",
    Host: "smtp.elasticemail.com",
    To: "info@dolon.tech",
    From: "ermekov.x@gmail.com",
    Subject: "страница Контакты",
    Body: `
        ФИО: ${form.fio},
        Phone: ${form.phone},
        Email: ${form.email},
        Country: ${codestate.name},
        Code: ${codestate.dial_code},
    `,
  };
  let messageSuccess = {
    first: t("messageSuccess.first"),
    second: t("messageSuccess.second"),
    third: t("messageSuccess.third"),
    icon: "ok",
  };
  let messageError = {
    first: t("messageError.first"),
    second: t("messageError.second"),
    third: t("messageError.third"),
    icon: "error",
  };

  function submitHandler(e) {
    e.preventDefault();
    if (window.Email) {
      window.Email.send(config)
        .then((res) => {
          if (res === "OK") {
            setSuccessModal(true);
          } else {
            seterrorModal(true);
          }
        })
        .then(() => {})
        .catch((err) => {
          console.log(err);
          seterrorModal(true);
        })
        .finally(() => {
          setTimeout(() => {
            setSuccessModal(false);
            seterrorModal(false);
          }, 5000);
        });
    }
  }
  return (
    <div className={css.menuModal}>
      {successModal && <DialogueStatus message={messageSuccess} />}
      {errorModal && <DialogueStatus message={messageError} />}
      <div className={css.box}>
        <form onSubmit={submitHandler} className={css.form}>
          <div className={css.fio}>
            <label htmlFor="fio">{t("form.nameSurname")}</label>
            <input
              autoComplete="off"
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
              <div className={css.countryCodeBox} ref={countryCodeInputRef}>
                <input
                  autoComplete="off"
                  type="text"
                  placeholder={t("form.countryCode")}
                  className={css.countryCode}
                  name="contryCodeName"
                  value={codestate.dial_code}
                  onChange={handleChange}
                  onClick={() => setshowCountryCodeModal(true)}
                />
                <div
                  onClick={() =>
                    setshowCountryCodeModal(
                      (showCountryCodeModal) => !showCountryCodeModal
                    )
                  }
                  className={css.iconInputBox}
                >
                  {codestate.code && <Flag country={codestate.code} />}
                  {/* <div className={css.flagBox}>
                  </div> */}
                  <img
                    src={IconInput}
                    className={css.iconInput}
                    alt="not found"
                    style={{
                      transform: `rotateX(${
                        showCountryCodeModal ? "180deg" : "0"
                      })`,
                    }}
                  />
                </div>

                {showCountryCodeModal && (
                  <CountrySelector
                    setcodeState={setcodeState}
                    codestate={codestate}
                    setshowCountryCodeModal={setshowCountryCodeModal}
                  />
                )}
              </div>

              <input
                autoComplete="off"
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
              autoComplete="off"
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
