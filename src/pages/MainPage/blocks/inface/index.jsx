import { useTranslation } from "react-i18next";
import interfaceImg from "../../../../assets/img/mainPage/interface.jpg";
import classes from "./inface.module.scss";

function Inface() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className={classes.inface}>
        <h2 className={classes.infaceTitle}>{t("ConvenientInterface")}</h2>
        <div className={classes.infaceImgWrap}>
          <img
            src={interfaceImg}
            alt="Not found"
            className={classes.infaceImg}
          />
        </div>
      </div>
    </>
  );
}

export default Inface;
