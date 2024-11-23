import React, { useState, useEffect } from "react";
import styles from "./Keyboard.module.css";
import backspaceIcon from "/backspace.svg";

const KeyboardModel = () => {
  const [input, setInput] = useState("");

  const layout = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "BACKSPACE"],
    ["Z", "X", "C", "V", "B", "N", "M", "ENTER"],
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      event.preventDefault();

      const key = event.key.toUpperCase();

      if (/^[A-Z]$/.test(key)) {
        setInput((prev) => prev + key);
      } else if (event.key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      } else if (event.key === "Enter") {
        handleEnter();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyPress = (key) => {
    if (key === "BACKSPACE") {
      handleBackspace();
    } else if (key === "ENTER") {
      handleEnter();
    } else {
      setInput((prev) => prev + key);
    }
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleEnter = () => {
    console.log("Enter pressionado:", input);
  };

  return (
    <div className={styles.keyboardContainer}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value.toUpperCase())}
        className={styles.input}
        placeholder="Digite algo..."
      />

      <div className={styles.keyboard}>
        {layout.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((key) => (
              <button
                key={key}
                onClick={() => handleKeyPress(key)}
                className={`${styles.key} ${
                  key === "BACKSPACE"
                    ? styles.backspaceKey
                    : key === "ENTER"
                    ? styles.enterKey
                    : ""
                }`}
              >
                {key === "BACKSPACE" ? (
                  <img
                    src={backspaceIcon}
                    alt="backspace"
                    className={styles.icon}
                  />
                ) : (
                  key
                )}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyboardModel;
