import "./App.css";
import Car from "./components/Car";

function App() {
  const MyCars = [
    { name: "Fusca", km: 100000, color: "Branca" },
    { name: "Polo", km: 32000, color: "Cinza" },
    { name: "Onix", km: 0, color: "Preto" },
  ];

  return (
    <div className="App">
      <h1>Showroom de Carros</h1>
      <div className="car-container">
        {MyCars.map((car) => (
          <Car car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
