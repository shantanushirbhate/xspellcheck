import { useState } from "react";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  function handleChange(e) {
    const value = e.target.value;

    setText(value);

    // convert sentence into array of words
    const words = value.toLowerCase().split(" ");

    let foundSuggestion = "";

    // check first wrong spelling only
    for (let word of words) {
      if (customDictionary[word]) {
        foundSuggestion = `Did you mean: ${customDictionary[word]}?`;
        break;
      }
    }

    setSuggestion(foundSuggestion);
  }

  return (
    <div className="app">
      <h1>XSpellCheck</h1>

      <textarea
        rows="6"
        cols="50"
        placeholder="Enter text here..."
        value={text}
        onChange={handleChange}
      ></textarea>

      {suggestion && <p>{suggestion}</p>}
    </div>
  );
}

export default App;