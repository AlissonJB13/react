import { useState } from "react";

const HookUseState = () => {
  // useState é utilizado para gerenciar valores de variáveis
  // 1 -useState

  let userName = "João";

  const [name, setName] = useState("Alisson");

  const changeNames = () => {
    userName = "João Santos";

    setName("Alisson Barrabarra");

    console.log(userName);
    console.log(name);
  };

  //2 - useState e input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    // envio dos dados a uma api
    console.log(age);
  };

  return (
    <div>
      {/*1- useState  */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      {/* visivelmente somente o a variavel "name" é alterada com useState */}
      <button onClick={changeNames}>Mudar Nomes</button>
      {/* 2 - useState e input */}
      <p>Informe sua idade:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} anos de idade</p>
      <hr />
    </div>
  );
};

export default HookUseState;
