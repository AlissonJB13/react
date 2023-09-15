const Challenge = () => {
  const valor1 = 1;
  const valor2 = 23;

  const handleSoma = () => {
    const soma = valor1 + valor2;
    return console.log("o valor da soma é:", soma);
  };

  return (
    <div>
      <p>valor 1: {valor1}</p>
      <p>valor 2: {valor2}</p>
      <button onClick={handleSoma}>Realize a soma</button>
    </div>
  );
};

export default Challenge;
