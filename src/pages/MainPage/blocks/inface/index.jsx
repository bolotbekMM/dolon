import { useTranslation } from "react-i18next";
import interfaceImg from "../../../../assets/img/mainPage/interface.jpg";
import interfaceImgEng from "../../../../assets/img/mainPage/interfaceEng.jpg";
import classes from "./inface.module.scss";

function Inface() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className={classes.inface}>
        <h2 className={classes.infaceTitle}>{t("ConvenientInterface")}</h2>
        <p className={classes.infaceContentt}>
          {t("ConvenientInterfaceDesc")}
        </p>
        <div className={classes.infaceImgWrap}>
          <img
            src={ t('news.title') == "News" ? interfaceImgEng : interfaceImg}
            alt="Not found"
            className={classes.infaceImg}
          />
        </div>
      </div>
    </>
  );
}

export default Inface;
