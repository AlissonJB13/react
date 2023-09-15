// arrow function geralmente é utilizaca em vez da propria function

import MyComponent from "./MyComponent";

const FirstComponent = () => {
  return (
    <div>
      <h1>Meu primeiro componente</h1>
      <p className="teste">meu texto</p>
      <MyComponent />
    </div>
  );
};

export default FirstComponent;
