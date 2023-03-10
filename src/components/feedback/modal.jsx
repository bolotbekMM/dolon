import classes from "./feedback.module.scss";
import { useRef, useState } from "react";
import classNames from "classnames";
import IconInput from "../../assets/icons/headerIcons/chdown.svg";
import Flag from "react-flagkit";
import { toast } from "react-toastify";
import UISelect from "./../UISelect/index";
import { useTranslation } from "react-i18next";
import CountrySelector from "./../Header/MainPart/NawBar/ContuctModal/CountrySelector";

function FeedbackModal({ close, subject = "Monitoring", question }) {
  const { t, i18n } = useTranslation();
  const countryCodeInputRef = useRef(null);
  const [showCountryCodeModal, setshowCountryCodeModal] = useState(false);
  const [codestate, setcodeState] = useState({
    dial_code: "",
    code: "",
    name: "",
  });

  const [form, setForm] = useState({
    fio: "",
    phoneCode: "",
    phone: "",
    email: "",
    country: "",
    company: "",
    post: "",
    note: "",
  });

  const config = {
    Username: "dolonsystems@gmail.com",
    Password: "A9335968659627466661A4D9EFE3E639310D",
    Port: "2525",
    Host: "smtp.elasticemail.com",
    To: "info@dolon.tech",
    From: "ermekov.x@gmail.com",
    Subject: question ? "Поступил вопрос на сайте Dolon " : subject,
    Body: `
            ФИО: ${form.fio},
            Phone: (${form.phoneCode}) ${form.phone},
            Email: ${form.email},
            Страна: ${form.country},
            Компания: ${form.company},
            Должность: ${form.post},
            Примечание: ${form.note}
        `,
  };

  const config1 = {
    Username: "dolonsystems@gmail.com",
    Password: "A9335968659627466661A4D9EFE3E639310D",
    Port: "2525",
    Host: "smtp.elasticemail.com",
    To: "satar.t@dolon.tech",
    From: "ermekov.x@gmail.com",
    Subject: question ? "Поступил вопрос на сайте Dolon " : subject,
    Body: `
            ФИО: ${form.fio},
            Phone: (${form.phoneCode}) ${form.phone},
            Email: ${form.email},
            Страна: ${form.country},
            Компания: ${form.company},
            Должность: ${form.post},
            Примечание: ${form.note}
        `,
  };

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
      form.fio.length > 3 &&
      form.phone.length > 7 &&
      form.email.length > 7 &&
      validateEmail(form.email) &&
      form.country.length > 3
    )
      return true;
    return false;
  };

  function handleChange(e) {
    setcodeState({ dial_code: e.target.value });
    setForm((form) => ({ ...form, phoneCode: e.target.value }));
    setshowCountryCodeModal(true);
  }

  return (
    <>
      <div
        className={classes.feedmodal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={classes.feedmodalContainer}>
          <div className={classes.feedmodalTitle}>
            <p className={classes.feedmodalTitleText}>{t("form.fillForm")}</p>
          </div>
          <div className={classes.feedmodalForm}>
            <div className={classes.formgroup}>
              <label htmlFor="fio" className={classes.formgroupLabel}>
                {t("form.nameSurname")}
              </label>
              <input
                type="text"
                name="fio"
                onInput={onInput}
                value={form.fio}
                id="fio"
                placeholder={`${t("form.enter")} ${t("form.nameSurname")}*`}
                className={classes.formgroupInput}
              />
            </div>
            <div
              className={classNames(classes.formgroup, classes.formgroupPhone)}
            >
              <label htmlFor="phone" className={classes.formgroupLabel}>
                {t("form.phone")}
              </label>
              {/* <UISelect /> */}
              <div className={classes.tel}>
                <div className={classes.telBox}>
                  <div
                    className={classes.countryCodeBox}
                    ref={countryCodeInputRef}
                  >
                    <input
                      autoComplete="off"
                      type="text"
                      placeholder={t("form.countryCode")}
                      className={classes.countryCode}
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
                      className={classes.iconInputBox}
                    >
                      {codestate.code && <Flag country={codestate.code} />}
                      {/* <div className={classes.flagBox}>
                  </div> */}
                      <img
                        src={IconInput}
                        className={classes.iconInput}
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
                    className={classes.phoneNum}
                    placeholder={t("form.phone")}
                  />
                </div>
              </div>
            </div>
            <div className={classes.formgroup}>
              <label htmlFor="email" className={classes.formgroupLabel}>
                {t("form.email")}
              </label>
              <input
                type="text"
                name="email"
                onInput={onInput}
                value={form.email}
                placeholder={`${t("form.enter")} E-mail*`}
                id="email"
                className={classes.formgroupInput}
              />
            </div>
            <div className={classes.formgroup}>
              <label htmlFor="country" className={classes.formgroupLabel}>
                {t("form.country")}
              </label>
              <input
                type="text"
                name="country"
                onInput={onInput}
                value={form.country}
                id="country"
                placeholder={t("form.enterCountry")}
                className={classes.formgroupInput}
              />
            </div>
            <div className={classes.formgroup}>
              <label htmlFor="company" className={classes.formgroupLabel}>
                {t("form.company")}
              </label>
              <input
                type="text"
                name="company"
                onInput={onInput}
                value={form.company}
                id="company"
                placeholder={t("form.enterCompany")}
                className={classes.formgroupInput}
              />
            </div>
            <div className={classes.formgroup}>
              <label htmlFor="post" className={classes.formgroupLabel}>
                {t("form.position")}
              </label>
              <input
                type="text"
                name="post"
                onInput={onInput}
                value={form.post}
                placeholder={t("form.enterPosition")}
                id="post"
                className={classes.formgroupInput}
              />
            </div>
            <div className={classes.formgroup}>
              <label htmlFor="note" className={classes.formgroupLabel}>
                {question ? t("form.enterQuestion") : t("form.note")}
              </label>
              <textarea
                type="text"
                name="note"
                onChange={onInput}
                value={form.note}
                placeholder={
                  question ? t("form.enterQuestion") : t("form.note")
                }
                rows={3}
                id="note"
                className={classes.formgroupTextarea}
              />
            </div>
            <button
              disabled={!correctForm()}
              className={classNames(
                classes.feedmodalBtn,
                correctForm() ? classes.feedmodalBtnActive : ""
              )}
              onClick={async () => {
                if (window.Email) {
                  await window.Email.send(config)
                    .then((mess) => {})
                    .catch((err) => {})
                    .finally((data) => {
                      close(false);
                    });
                  window.Email.send(config1)
                    .then((mess) => {})
                    .catch((err) => {})
                    .finally((data) => {
                      close(false);
                      toast.success(t("form.success"), t("form.thanks"));
                    });
                }
              }}
            >
              {t("form.send")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedbackModal;
