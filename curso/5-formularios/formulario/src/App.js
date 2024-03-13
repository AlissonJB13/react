import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm
        user={{
          name: "Valéria",
          email: "valeriacardoso0810@gmail.com",
          bio: "técnica",
          role: "admin",
        }}
      />
    </div>
  );
}

export default App;
