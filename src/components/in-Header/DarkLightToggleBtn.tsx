import { type FC } from "react";
import { useUi_Ctx } from "../../store/ui-Context";
import classes from "./DarkLightToggleBtn.module.css";

const DarkLightToggleBtn: FC = () => {
  const { theme_, toggleTheme_Fn } = useUi_Ctx();
  return (
    <button
      onClick={toggleTheme_Fn}
      className={
        theme_ === "light"
          ? `${classes.darkLightToggleContainer} ${classes.toDarkStyle}`
          : `${classes.darkLightToggleContainer} ${classes.toLightStyle}`
      }
    >
      {theme_ === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default DarkLightToggleBtn;
