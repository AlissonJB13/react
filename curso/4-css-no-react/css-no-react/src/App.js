import "./App.css";
import MyComponent from "./components/MyComponent";
import { useState } from "react";
import Title from "./components/Title";

function App() {
  const n = 15;
  const [name] = useState("Alisson");
  const redTitle = false;

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Este paragráfo é do app.js</p>
      {/* inline css */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        este elemento foi estilizado de forma inline
      </p>
      {/* inline inline dinamico */}
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2
        style={
          name === "Alisson"
            ? { color: "green", backgroundColor: "#000" }
            : null
        }
      >
        Teste nome
      </h2>
      {/* Classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter classe dinâmica
      </h2>
      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
