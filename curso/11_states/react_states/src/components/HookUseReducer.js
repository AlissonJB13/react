import { useReducer, useState } from "react";

const HookUseReducer = () => {
  /* useReducer tem mesma função do useState, entreranto ele possibilita executar uma função na hora de alterar o valor */
  // geralmente utilizado em switch com actions
  // 1 - começando com o useReducer
  const [number, dispatch] = useReducer((state, action) => {
    // state equivale ao number do array da linha acima
    return Math.random(state);
  });

  // 2 - avançando
  const initialTasks = [
    { id: 1, text: "fazer alguma coisa" },
    { id: 2, text: "fazer outra coisa" },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };

        setTaskText("");

        //aqui retorna as tarefas que ja existem e inclui a nova tarefa
        return [...state, newTask];
      case "DELETE":
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };

  // adicionando novas tarefas
  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTasks({ type: "ADD" });
  };

  const removeTasks = (id) => {
    dispatchTasks({ type: "DELETE", id });
  };

  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      {/* dispatch equivale a ação de uma função que altera o valor do state do useReducer */}
      <button onClick={dispatch}>Alterar número</button>
      <h3>Tarefas</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="Enviar" />
      </form>
      {tasks.map((task) => (
        <li key={task.id} onDoubleClick={() => removeTasks(task.id)}>
          {task.text}
        </li>
      ))}
      <hr />
    </div>
  );
};

export default HookUseReducer;
