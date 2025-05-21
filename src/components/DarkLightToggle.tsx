import { type FC } from "react";

import { useUi_Ctx } from "../store/ui-Context";
const DarkLightToggle: FC = () => {
  const { theme_, toggleTheme_Fn } = useUi_Ctx();
  return (
    <button
      onClick={toggleTheme_Fn}
      style={{ padding: "10px", fontSize: "16px" }}
    >
      {theme_ === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default DarkLightToggle;
