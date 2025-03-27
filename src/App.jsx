import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div style={{ 
      textAlign: "center", 
      padding: "20px", 
      border: "2px solid #333", 
      borderRadius: "12px", 
      width: "320px", 
      margin: "auto", 
      backgroundColor: "#2c3e50", 
      color: "white", 
      boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)" 
    }}>
      <input
        type="text"
        value={input}
        readOnly
        style={{ 
          width: "90%", 
          padding: "15px", 
          fontSize: "24px", 
          textAlign: "right", 
          marginBottom: "15px", 
          borderRadius: "8px", 
          border: "none", 
          backgroundColor: "#34495e", 
          color: "white" 
        }}
      />
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(4, 1fr)", 
        gap: "10px" 
      }}>
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
          <button
            key={char}
            onClick={() => (char === "=" ? calculateResult() : handleClick(char))}
            style={{ 
              padding: "15px", 
              fontSize: "20px", 
              border: "none", 
              borderRadius: "8px", 
              cursor: "pointer", 
              backgroundColor: "#16a085", 
              color: "white", 
              fontWeight: "bold" 
            }}
          >
            {char}
          </button>
        ))}
        <button
          onClick={clearInput}
          style={{ 
            gridColumn: "span 4", 
            padding: "15px", 
            fontSize: "20px", 
            border: "none", 
            borderRadius: "8px", 
            cursor: "pointer", 
            backgroundColor: "#e74c3c", 
            color: "white", 
            fontWeight: "bold" 
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
