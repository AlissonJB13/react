//componentes
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Events from "./components/Events";
import MyComponent from "./components/MyComponent";
import Challenge from "./components/Challenge";

//styles
//import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      {/*Comentário se faz dessa forma no react*/}
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
