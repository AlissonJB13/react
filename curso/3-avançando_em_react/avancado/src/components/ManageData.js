import { useState } from "react";

const ManageData = () => {
  let someData = 10;

  console.log(someData);

  const [number, setNumber] = useState(15);
  return (
    <div>
      <p>Valor: {someData}</p>
      <button onClick={() => (someData = 15)}>Mude o valor</button>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(25)}>Mude o outro valor</button>
      </div>
    </div>
  );
};

export default ManageData;
