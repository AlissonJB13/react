/*o useMemo pode ser utilizado para garantir referencia de um objeto, fazendo com que algo possa ser
atrelado a uma referencia e nao a um valor*/
import { useEffect, useState, useMemo } from "react";

const HookUseMemo = () => {
  const [number, setNumber] = useState(0);

  // const premiumNumbers = ["0", "100", "200"];

  const premiumNumbers = useMemo(() => {
    return ["0", "100", "200"];
  }, []);

  useEffect(() => {
    console.log("Premium number foi alterado");
  }, [premiumNumbers]);

  return (
    <div>
      <h2>useMemo</h2>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      {premiumNumbers.includes(number) ? <p>Acertoou o número</p> : ""}
      <hr />
    </div>
  );
};

export default HookUseMemo;
