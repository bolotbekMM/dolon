import React, { useEffect, useRef } from "react";
import css from "./SecondBlok.module.scss";

const SecondBlok = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const parallaxHandler = () => {
      if (parallaxRef.current) {
        const { top } = parallaxRef.current.getBoundingClientRect();
        console.log(top / 100);
        const move = top / 5;
        parallaxRef.current.style.backgroundPositionY = `calc(50% + ${move}px)`;
      }
    };

    window.addEventListener("scroll", parallaxHandler);
    return () => window.removeEventListener("scroll", parallaxHandler);
  }, []);

  return (
    <div className={css.secondBlok} ref={parallaxRef}>
      <div className={css.container}>
        <div className={css.box}>
          <h2>
            Экосистема, основанная на облачных <br />
            технологиях (Industry 4.0.)
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SecondBlok;
