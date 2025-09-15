import { type FC } from "react";
import classes from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <footer>
      {/* change the the logo image to responsive desktop */}
      <picture>
        <source
          srcSet="/src/assets/icons/facebook_d.png"
          media="(min-width: 1024px)"
        />
        <img
          src="/src/assets/icons/facebook.svg"
          className={classes.contactLogo}
          alt="Facebook Icon"
        ></img>
      </picture>
    </footer>
  );
};

export default Footer;
