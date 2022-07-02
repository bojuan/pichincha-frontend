import PlusIcon from "../../../assets/icons/PlusIcon";
import Button from "../../common/Button/Button";
import InputSearch from "../../common/InputSearch/InputSearch";
import useHeaderSection from "./useHeaderSection/useHeaderSection";
import "./HeaderSection.styles.css";

function HeaderSection() {
  const {
    actions: { handleSearch, handleOpenPokemonForm },
  } = useHeaderSection();

  return (
    <header className="header">
      <h1 className="header__title">Listado de Pokemon</h1>
      <div className="header__container">
        <InputSearch onSearch={handleSearch} />
        <Button icon={<PlusIcon />} onClick={handleOpenPokemonForm}>
          Nuevo
        </Button>
      </div>
    </header>
  );
}

export default HeaderSection;
