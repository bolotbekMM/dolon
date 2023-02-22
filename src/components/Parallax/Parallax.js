import React, { useEffect, useRef } from "react";
import css from "./Parallax.module.scss";

const Parallax = ({ content, img }) => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const parallaxHandler = () => {
      if (parallaxRef.current) {
        const { top } = parallaxRef.current.getBoundingClientRect();
        const move = top / 3;
        parallaxRef.current.style.backgroundPositionY = `calc(50% + ${move}px)`;
      }
    };

    window.addEventListener("scroll", parallaxHandler);
    return () => window.removeEventListener("scroll", parallaxHandler);
  }, []);
  return (
    <div
      className={css.parallaxBlok}
      ref={parallaxRef}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="container">
        <div className={css.box}>
          <h2>{content}</h2>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
