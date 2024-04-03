import React, { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

const About = () => {
  // o useContext possibilita a utilização de mesmo "valores" entre diferentes componentes
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <h2>About</h2>
      <p>Valor do context {contextValue}</p>
    </div>
  );
};

export default About;
