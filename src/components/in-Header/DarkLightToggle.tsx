import { type FC } from "react";
import classes from "./DarkLightToggle.module.css";

import { useUi_Ctx } from "../../store/ui-Context";
const DarkLightToggle: FC = () => {
  const { theme_, toggleTheme_Fn } = useUi_Ctx();
  return (
    <button
      onClick={toggleTheme_Fn}
      className={classes.darkLightToggleContainer}
    >
      {theme_ === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default DarkLightToggle;
