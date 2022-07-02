import { createContext, FC, ReactNode, useContext, useState } from "react";
import { Pokemon } from "../interfaces/Pokemon";

export const INITIAL_STATE = {
  pokemons: [] as Pokemon[],
  pokemonToEdit: undefined as Pokemon | undefined,
  openPokemonForm: false,
  actions: {
    setPokemonsList: (newPokemonsList: Pokemon[]) => {},
    handlePokemonToEdit: (pokemon?: Pokemon) => {},
    handleOpenForm: (open: boolean) => {},
  },
  
};

const PokemonContext = createContext<typeof INITIAL_STATE>(INITIAL_STATE);

export const usePokemonContext = () => useContext(PokemonContext);

export const PokemonContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>(INITIAL_STATE.pokemons);
  const [openPokemonForm, setOpenPokemonForm] = useState<boolean>(false);
  const [pokemonToEdit, setPokemonToEdit] = useState<Pokemon | undefined>();

  const setPokemonsList = (newPokemonsList: Pokemon[]) => {
    setPokemons(newPokemonsList);
  };

  const handleOpenForm = (open: boolean) => {
    setOpenPokemonForm(open)
  }

  const handlePokemonToEdit = (pokemon?: Pokemon) => {
    setPokemonToEdit(pokemon)
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        openPokemonForm,
        pokemonToEdit,
        actions: {
          setPokemonsList,
          handleOpenForm,
          handlePokemonToEdit
        },
        
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
