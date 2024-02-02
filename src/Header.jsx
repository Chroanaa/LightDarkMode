import React from "react";
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
import reactLogo from "./assets/react.svg";

export default function Header(props) {
  const styles = {
    backgroundColor: props.IsdarkMode ? "white" : "#212121",
    color: props.IsdarkMode ? "black " : "white",
  };
  return (
    <header style={styles}>
      <img src={reactLogo} alt="React Logo" />
      <h1>REACT FACTS</h1>
      <div className="ToggleButton">
        <span>Light</span>
        {props.IsdarkMode ? (
          <BsToggleOff
            onClick={() => {
              props.toggleTheme();
            }}
            className="BsToggleOff"
          />
        ) : (
          <BsToggleOn
            onClick={() => {
              props.toggleTheme();
            }}
            className="BsToggleOn"
          />
        )}
        <span>dark</span>
      </div>
    </header>
  );
}
