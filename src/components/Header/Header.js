import React, { useState, useEffect } from "react";
import css from "./Header.module.scss";
import MainPart from "./MainPart/MainPart";
import TopPanel from "./TopPanel/TopPanel";

const Header = () => {
  const [isTop, setIsTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isTop ? css.toUp : css.header}`}>
      <div className={css.mainPart}>
        <TopPanel />
        <MainPart />
      </div>
    </header>
  );
};

export default Header;
