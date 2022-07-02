import { useEffect } from "react";
import "./App.css";
import EditIcon from "./assets/icons/EditIcon";
import PlusIcon from "./assets/icons/PlusIcon";
import SaveIcon from "./assets/icons/SaveIcon";
import TrashIcon from "./assets/icons/TrashIcon";
import Button from "./components/Button/Button";
import InputSearch from "./components/InputSearch/InputSearch";
import { getPokemons } from "./services";

function App() {
  useEffect(() => {
    getPokemons().then((pokemons) => {
      console.log({ pokemons });
    });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Listado de Pokemon</h1>
        <div>
          <InputSearch onSearch={(value) => console.log(value)} />
          <Button icon={<PlusIcon />}>Nuevo</Button>
          <Button icon={<TrashIcon />} type="text" />
          <Button icon={<EditIcon />} type="text" />
          <Button icon={<SaveIcon />} disabled>
            Guardar
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
