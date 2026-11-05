"use client"; //Remove this to generate the error
import { useTheme } from "./context/ThemeContext";
import "../styles/globals.css";

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();
  return (
    <main
      className={`min-vh-100 ${theme == "light" ? "bg-light text-dark" : "bg-dark text-light"}`}
    >
      <div className="container has-text-centered">
        <h1 className="title is-1">Welcome to the NM Tafe Next.js App</h1>
        <p className="subtitle">
          Building modern applications with Next.js and Bootstrap.
        </p>
        <button className="btn btn-primary" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    </main>
  );
}
