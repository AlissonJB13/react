//import logo from "./logo.svg";
import city from "./assets/city.jpg";
import ManageData from "./components/ManageData";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Limpeza realizada</h1>
      {/*Imagem em public */}
      <div>
        <img src="img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagens em asset, através da importação da imagem dentro do assets conforme na linha 4 */}
      <img src={city} alt="Cidade" />
      <ManageData />
    </div>
  );
}

export default App;
