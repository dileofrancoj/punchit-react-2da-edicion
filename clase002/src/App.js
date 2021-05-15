import "./App.css";
import Counter from "./Counter/Counter";
import Header from "./Header/Header";
import Work from "./Works/Work";

function App() {
  return (
    <div className="App">
      <Header title="Header" />
      <Counter />
      <Work />
      {/* Cambia el estado del componente */}
    </div>
  );
}

export default App;
