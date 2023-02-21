import BottomFooter from "./BottomFooter/BottomFooter";
import FooterMenu from "./FooterMenu/FooterMenu";
import css from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <FooterMenu />
      <BottomFooter />
    </footer>
  );
};

export default Footer;
