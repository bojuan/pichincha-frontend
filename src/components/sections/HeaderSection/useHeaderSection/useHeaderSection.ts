import { usePokemonContext } from "../../../../context/PokemonContext";
import { getPokemonById, getPokemons } from "../../../../services/services";

export type UseHeaderSection = () => {
  isOpenForm: boolean;
  actions: {
    handleSearch: (value: string) => Promise<void>;
    handleOpenPokemonForm: () => void;
  };
};

export const useHeaderSection: UseHeaderSection = () => {
  const {
    pokemons,
    openPokemonForm,
    actions: { setPokemonsList, handleOpenForm, handlePokemonToEdit },
  } = usePokemonContext();

  const handleSearch = async (value: string) => {
    try {
      let newList = [...pokemons];

      if (value === "" || !value) {
        newList = await getPokemons();
      } else {
        const pokemonFound = await getPokemonById(value);
        newList = [pokemonFound];
      }

      setPokemonsList(newList);
    } catch (error) {
      alert("No se econtró el pokemon");
    }
  };

  const handleOpenPokemonForm = () => {
    handlePokemonToEdit();
    handleOpenForm(true);
  };

  return {
    isOpenForm: openPokemonForm,
    actions: {
      handleSearch,
      handleOpenPokemonForm,
    },
  };
};

export default useHeaderSection;
