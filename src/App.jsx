import { useState } from "react";
import viteLogo from "/vite.svg";
import Header from "./Header";
import "./App.css";
import MainContent from "./MainContent";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = (e) => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <Header IsdarkMode={darkMode} toggleTheme={toggleTheme} />
      <MainContent IsdarkMode={darkMode} />
    </>
  );
}

export default App;
