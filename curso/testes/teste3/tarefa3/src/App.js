import UserDetais from "./components/UserDetais";

//import logo from "./logo.svg";
import "./App.css";

function App() {
  const users = [
    { id: 1, name: "Alisson", age: 29, job: "Operador" },
    { id: 2, name: "Allana", age: 13, job: "Estudante" },
    { id: 3, name: "Valéria", age: 23, job: "Técnica" },
  ];

  return (
    <div className="App">
      <h1>Seção 3 - Avançando com React!</h1>
      {users.map((user) => (
        <UserDetais
          key={user.id}
          name={user.name}
          age={user.age}
          job={user.job}
        />
      ))}
    </div>
  );
}

export default App;
