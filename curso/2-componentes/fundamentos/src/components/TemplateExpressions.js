const TemplateExpressions = () => {
  const name = "Alisson";
  const data = {
    age: 29,
    job: "Técnico Operacional",
  };

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atua como: {data.job}</p>
      <p>Sua idade: {data.age}</p>
      <p>{4 + 4}</p>
      <p>{console.log("JSX React")}</p>
    </div>
  );
};

export default TemplateExpressions;
