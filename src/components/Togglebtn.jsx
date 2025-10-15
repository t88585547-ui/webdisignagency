import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Togglebtn() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="ml-3 p-2 rounded-full bg-blue-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 transition duration-300 hover:scale-110"
    >
      {darkMode ? (
        <SunIcon className="w-6 h-6 shadow-2xl shadow-yellow-400" />
      ) : (
        <MoonIcon className="w-6 h-6" />
      )}
    </button>
  );
}
