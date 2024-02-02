import React from "react";

export default function MainContent(props) {
  const styles = {
    backgroundColor: props.IsdarkMode ? "white" : "#212121",
    color: props.IsdarkMode ? "black " : "white",
  };
  return (
    <div style={styles}>
      <main>
        <h1>fun facts about react</h1>
      </main>
    </div>
  );
}
