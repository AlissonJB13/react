import MyComponent from "./MyComponent";

const TemplateExpressions = () => {
  const name = "Alisson";
  const data = {
    age: 29,
    job: "Operador",
  };

  return (
    <div>
      <MyComponent />
      <h1>Ola {name}, tudo bem?</h1>
      <p>Você atua como {data.job}</p>
      <p>{4 + 4}</p>
    </div>
  );
};

export default TemplateExpressions;
