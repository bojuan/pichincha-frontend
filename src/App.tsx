import "./App.css";
import InputSearch from "./components/InputSearch/InputSearch";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Listado de Pokemon</h1>
        <InputSearch onSearch={(value) => console.log(value)} />
      </header>
    </div>
  );
}

export default App;
