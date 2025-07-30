import { useEffect, useState } from "react";

const DarkModeManual = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Actually toggle .dark class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <div className="mt-14 h-screen size-full bg-zinc-300 dark:bg-zinc-800 flex flex-col justify-center items-center transition-colors duration-500 ease-in-out">
      <h1 className="text-3xl text-center text-zinc-900 dark:text-zinc-300">
        Dark Mode By Button
      </h1>
      <button
        className="p-3 bg-blue-950 rounded-2xl text-blue-200 text-2xl mt-3 cursor-pointer"
        onClick={toggleTheme}
      >
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default DarkModeManual;
