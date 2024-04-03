/* o useCallback memoriza uma função fazendo ela NAO ser reconstruida a cada renderização, prezando a performance
e o react indica que determinada função deve ser contida em useCallback para evitar problemas de performance
*/
import { useCallback, useState } from "react";

import List from "./List";

const HookUseCallback = () => {
  const [counter, setCounter] = useState(0);

  const getItemsFromDatabase = useCallback(() => {
    return ["a", "b", "c"];
  }, []);

  return (
    <div>
      <h2>useCallback</h2>
      <List getItems={getItemsFromDatabase} />
      <button onClick={() => setCounter(counter + 1)}>Alterar</button>
      <p>{counter}</p>
      <hr />
    </div>
  );
};

export default HookUseCallback;
