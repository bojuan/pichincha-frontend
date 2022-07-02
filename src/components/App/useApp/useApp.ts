import { useEffect } from "react";
import { usePokemonContext } from "../../../context/PokemonContext";
import { getPokemons } from "../../../services/services";

export type UseApp = () => {
  openPokemonForm: boolean;
};

const useApp: UseApp = () => {
  const {
    openPokemonForm,
    actions: { setPokemonsList },
  } = usePokemonContext();

  useEffect(() => {
    getPokemons().then((pokemons) => setPokemonsList(pokemons));
  }, []);

  return {
    openPokemonForm,
  };
};

export default useApp;
