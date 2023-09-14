import React, { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
const SwitchTheme = () => {
  //we store the theme in localStorage to preserve the state on next visit with an initial theme of dark.
  const [theme, setTheme] = useLocalStorage("theme", "light");

  //modify data-theme attribute on document.body when theme changes
  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <select
      className="select text-base-content w-full max-w-xs"
      onChange={(e) => {
        console.log(e.target.value);
      }}
    >
      <option value="Homer">Homer</option>
      <option value="Marge">Marge</option>
      <option value="Bart">Bart</option>
      <option value="Lisa">Lisa</option>
      <option value="Maggie">Maggie</option>
    </select>
  );
};

export default SwitchTheme;
