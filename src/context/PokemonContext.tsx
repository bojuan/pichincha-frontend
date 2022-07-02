import { createContext, FC, ReactNode, useContext, useState } from "react";
import { Pokemon } from "../interfaces/Pokemon";

export const INITIAL_STATE = {
  pokemons: [] as Pokemon[],
  actions: {
    setPokemonsList: (newPokemonsList: Pokemon[]) => {},
  },
};

const PokemonContext = createContext<typeof INITIAL_STATE>(INITIAL_STATE);

export const usePokemonContext = () => useContext(PokemonContext);

export const PokemonContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>(INITIAL_STATE.pokemons);

  const setPokemonsList = (newPokemonsList: Pokemon[]) => {
    setPokemons(newPokemonsList);
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        actions: {
          setPokemonsList,
        },
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
