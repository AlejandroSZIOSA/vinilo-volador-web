import { type FC } from "react";
import classes from "./Footer.module.css";
const Footer: FC = () => {
  return (
    <footer className={classes.footerContainer}>
      <div>
        <img src="/src/assets/icons/facebook.svg" width={35} height={35}></img>
      </div>
    </footer>
  );
};

export default Footer;
