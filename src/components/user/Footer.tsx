import { type FC } from "react";
import classes from "./Footer.module.css";
const Footer: FC = () => {
  return (
    <footer className={classes.container}>
      <img src="/src/assets/icons/facebook.svg" width={35} height={35}></img>
      <div className={classes.innerContainer}>
        <img src="/src/assets/icons/phone.svg" width={35} height={35}></img>
        <p>07+789987543</p>
      </div>
    </footer>
  );
};

export default Footer;
