import React, { useState, useEffect } from "react";
import css from "./SecondBlok.module.scss";

const SecondBlok = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setOffset(window.pageYOffset);
  };
  return (
    // <div className={css.secondBlok}>
    //     <div className={css.parallaxContainer}>
    //       <div className={css.parallaxText}>
    //         <h2>
    //           Экосистема, основанная на облачных технологиях (Industry 4.0.)
    //         </h2>
    //       </div>
    //       <div
    //         className={css.parallaxBg}
    //         style={{ transform: `translateY(${offset * 0.5}px)` }}
    //       />
    //     </div>
    //   </div>

    <div className={css.secondBlok}>
      <div className="container">
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
