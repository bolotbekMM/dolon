import classNames from "classnames";
import SingleCard from "./../../../../components/card/index";
import classes from "./unigue.module.scss";
import img1 from "../../../../assets/img/mainPage/unigue2.svg";
import img2 from "../../../../assets/img/mainPage/unigue1.svg";
import img3 from "../../../../assets/img/mainPage/unigue3.svg";
import img4 from "../../../../assets/img/mainPage/unigue4.svg";
import img5 from "../../../../assets/img/mainPage/unigue5.svg";
import img6 from "../../../../assets/img/mainPage/unigue6.svg";
import img7 from "../../../../assets/img/mainPage/unigue7.svg";
import img8 from "../../../../assets/img/mainPage/unigue8.svg";
import { useTranslation } from "react-i18next";

function Unigue() {
  const { t, i18n } = useTranslation();
  let cards = [
    {
      img: img1,
      title: t("Uniques.1"),
      content: t("UniquesDescription.1"),
    },
    {
      img: img2,
      title: t("Uniques.2"),
      content: t("UniquesDescription.2"),
    },
    {
      img: img3,
      title: t("Uniques.3"),
      content: t("UniquesDescription.3"),
    },
    {
      img: img4,
      title: t("Uniques.4"),
      content: t("UniquesDescription.4"),
    },
    {
      img: img5,
      title: t("Uniques.5"),
      content: t("UniquesDescription.5"),
    },
    {
      img: img6,
      title: t("Uniques.6"),
      content: t("UniquesDescription.6"),
    },
    {
      img: img7,
      title: t("Uniques.7"),
      content: t("UniquesDescription.7"),
    },
    {
      img: img8,
      title: t("Uniques.8"),
      content: t("UniquesDescription.8"),
    },
  ];

  return (
    <>
      <div className={classNames(classes.unigue)}>
        <div className={classNames(classes.unigueContainer)}>
          <p className={classNames(classes.unigueTitle)}>{t("UniqueBlock")}</p>
          <div className={classNames(classes.unigueCards)}>
            {cards.map((item) => {
              return (
                <SingleCard
                  key={item.title}
                  img={item.img}
                  title={item.title}
                  content={item.content}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Unigue;
