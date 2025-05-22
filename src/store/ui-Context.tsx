import {
  createContext,
  useState,
  useContext,
  type ReactNode,
  useEffect,
} from "react";

interface UiContextType {
  theme_: "light" | "dark";
  toggleTheme_Fn: () => void;
}

const UiContext = createContext<UiContextType | null>(null);

export const UiProvider_Ctx = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const ctx: UiContextType = {
    theme_: theme,
    toggleTheme_Fn: toggleTheme,
  };

  return <UiContext.Provider value={ctx}>{children}</UiContext.Provider>;
};
export const useUi_Ctx = () => {
  const context = useContext(UiContext);
  if (!context) throw new Error("useUi_Ctx must be used within an UiProvider");
  return context;
};
