import React, { useState } from "react";

export default function TextForm(props) {
  const uppercasevalue = () => {
    // console.log("Here I am"+ text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const lowercasevalue = () => {
    // console.log("Here I am"+ text);
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const FindtheInverseValue = () => {
    // console.log("Here I am"+ text);
    let newtext = text.split("");
    let newtexto = newtext.reverse();
    let reversed = newtexto.join("");
    // let newtexto = newtext.reverse();
    setText(reversed);
  };

  const removeExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  };

  const ClearIt = () => {
    let newtext = "";
    setText(newtext);
  };

  const uppercasehandler = (event) => {
    // console.log("generated");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter your words");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="container my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={uppercasehandler}
            style={{
              backgroundColor: props.mode === "light" ? "grey" : "white",
            }}
            id="My Box"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={uppercasevalue}>
          Covert to Upper Case
        </button>
        <button className="btn btn-primary mx-2" onClick={lowercasevalue}>
          Covert to Lower Case
        </button>
        <button className="btn btn-primary mx-2" onClick={FindtheInverseValue}>
          Find the Inverse Value
        </button>
        <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={ClearIt}>
          Clear It
        </button>
      </div>
      <div
        className="container my-3 mx-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>What you write is:</h1>
        <p>{text}</p>
        <h3>Your text summary:</h3>
        <p>
          {text.length} character and {text.split(" ").length} words
        </p>
        <p>
          {0.008 * text.split(" ").length} minutes required to read your text
        </p>
      </div>
    </>
  );
}
