import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setmode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#2e4a6a";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      {/* <Navbar title="Textutils" titleone="About Textutils" /> */}
      <Navbar title="Textutils" mode={mode} togglemode={togglemode} />
      <div className="container my-3">
        <TextForm heading="You can write anything you want" mode={mode} />
     </div>
    </>
  );
}

export default App;
