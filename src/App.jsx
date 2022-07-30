import React from "react";
import "./index.css";
import SlotM from "./SlotMach";
const App = () => {
  return (
    <>
      <h1 className="heading_style">
        🎰 Welcome to{" "}
        <span style={{ fontWeight: "Bold" }}>Slot machine game</span> 🎰
      </h1>
      <div className="slotmachine">
        <SlotM x="😄" y="😄" z="😄" />
        <SlotM x="😄" y="😅" z="😄" />
        <SlotM x="🍎" y="🍌" z="🍎" />
        <SlotM x="😆" y="😄" z="😄" />
      </div>
    </>
  );
};

export default App;
