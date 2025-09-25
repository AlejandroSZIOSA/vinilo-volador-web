import { type FC } from "react";
import FacebookIcon from "../../assets/icons/facebook-icon.svg";
import FacebookLogoIcon from "../../assets/icons/facebook-logo.png";
import classes from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <footer>
      {/* This changes the the logo image to responsive desktop */}
      <picture>
        <source srcSet={FacebookLogoIcon} media="(min-width: 1024px)" />
        <img
          src={FacebookIcon}
          className={classes.contactLogo}
          alt="Facebook Icon"
        ></img>
      </picture>
    </footer>
  );
};

export default Footer;
