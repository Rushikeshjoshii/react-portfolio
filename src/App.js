import React, { useState,useEffect } from "react";
import "./App.css";
import {
  RouterProvider,
  BrowserRouter,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/home/homescreen";
import HeroSection from "./pages/home/HeroSection";
import RootLayout from "./pages/home/Root";
import AboutMe from "./pages/home/AboutMe";
import { ThemeContext } from "./store/theme-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/heroSection", element: <HeroSection /> },
      { path: "/about", element: <AboutMe /> },
    ],
  },
]);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  const theme = isDarkMode ? "dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDarkMode]);
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeContext.Provider>
  );
}

export default App;
