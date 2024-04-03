// o useLayoultEffect carrega antes de renderizar o componente, bloqueando o carregamento da pagina até o sucesso da sua funcionalidade
import { useLayoutEffect, useEffect, useState } from "react";

const HookUseLayoultEffect = () => {
  const [name, setName] = useState("Algum nome");

  useEffect(() => {
    console.log("2");
    setName("Mudou de novo");
  }, []);

  useLayoutEffect(() => {
    console.log("1");
    setName("Outro nome");
  }, []);

  console.log(name);

  return (
    <div>
      <h2>useLayoultEffect</h2>
      <p>Nome: {name}</p>
      <hr />
    </div>
  );
};

export default HookUseLayoultEffect;
