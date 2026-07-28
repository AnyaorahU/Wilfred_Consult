import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

// The initial theme is set before paint by the inline script in index.html
// (reads localStorage, otherwise the OS preference). This toggle flips it and
// remembers the user's explicit choice.
export function ThemeToggle({ className = "" }) {
  const [dark, setDark] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((d) => !d)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={`grid place-items-center h-9 w-9 rounded-full text-white/90 hover:text-[#F15A22] hover:bg-white/10 ${className}`}
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

export default ThemeToggle;
