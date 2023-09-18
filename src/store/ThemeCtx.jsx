import React, { createContext, useEffect, useState } from "react";

export const ThemeCtx = createContext({});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("day");

  let body = document.body;
  useEffect(() => {
    if (theme === "day") {
      body.style.backgroundColor = "white";
      body.style.color = "black";
    }

    if (theme === "night") {
      body.style.backgroundColor = "black";
      body.style.color = "white";
    }
  });

  const themeMode = () => {
    if (theme === "day") {
      setTheme("night");
    } else {
      setTheme("day");
    }
  };

  return (
    <ThemeCtx.Provider value={{ theme, themeMode }}>
      {children}
    </ThemeCtx.Provider>
  );
};
export default ThemeProvider;