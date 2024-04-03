import { useEffect, useState } from "react";

const HookUseEffect = () => {
  /* alterações e requisições http e é possível controlar quantas vezes algo pode acontecer
composta por função e array de dependencia
*/

  // - useEffect sem dependencia

  useEffect(() => {
    console.log("estou sendo executado");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 2 - o useEffect com o array de depencia vazio renderiza o componente apenas uma vez
  useEffect(() => {
    console.log("serei executado apenas uma vez");
  }, []);

  // 3 - useEffect com array de dependecia
  // proporcia quando a função deve ser executada ou não
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executado apenas quando o anotherNumber muda");
    }
  }, [anotherNumber]);

  // 4 - limpeza do useEffect. sem a limpeza pode gerar erros ou comportamentos indesejados
  /*useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Hello World");
    }, 2000);

    return () => clearTimeout(timer);
  }, [anotherNumber]);*/

  return (
    <div>
      <h2>useEffect</h2>
      <p>Número: {number}</p>
      <button onClick={changeSomething}>Executar</button>
      <p>anotherNumber: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar anotherNumber
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
