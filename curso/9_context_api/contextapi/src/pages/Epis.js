import { useCounterContext } from "../hooks/useCounterContext";

const Epis = () => {
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Epis</h1>
      <p>Quantidade de EPI's disponíveis: {counter}</p>
    </div>
  );
};

export default Epis;
