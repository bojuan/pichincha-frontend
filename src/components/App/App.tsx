import "./App.css";
import HeaderSection from "../sections/HeaderSection/HeaderSection";
import TableSection from "../sections/TableSection/TableSection";
import useApp from "./useApp/useApp";
import FormSection from "../sections/FormSection/FormSection";

function App() {
  const { openPokemonForm } = useApp();

  return (
    <div className="App">
      <HeaderSection />
      <TableSection />
      <FormSection />
      {openPokemonForm && <div> FORM</div>}
    </div>
  );
}

export default App;
