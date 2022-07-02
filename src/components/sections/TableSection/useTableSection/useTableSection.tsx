import { useEffect, useState } from "react";
import { usePokemonContext } from "../../../../context/PokemonContext";
import { TablePokemonsData } from "../../../common/TablePokemons/TablePokemons.interfaces";

type UseTableSection = () => {
  dataSource: TablePokemonsData[];
  actions: {
    editPokemon: (item: TablePokemonsData) => void;
    deletePokemon: (item: TablePokemonsData) => void;
  };
};

export const useTableSection: UseTableSection = () => {
  const [dataSource, setDataSource] = useState<TablePokemonsData[]>([]);

  const {
    pokemons,
    pokemonToEdit,
    actions: { handleOpenForm, handlePokemonToEdit, setPokemonsList },
  } = usePokemonContext();

  useEffect(() => {
    const newListDataSource: TablePokemonsData[] = pokemons.map((item) => ({
      attack: item.attack,
      defense: item.defense,
      image: item.image,
      key: item.id.toString(),
      name: item.name,
      data: item,
    }));

    setDataSource(newListDataSource);
  }, [pokemons]);

  const editPokemon = (item: TablePokemonsData) => {
    handlePokemonToEdit(item.data);
    handleOpenForm(true);
  };

  const deletePokemon = (item: TablePokemonsData) => {
    if (item.data.id === pokemonToEdit?.id) {
      handlePokemonToEdit();
      handleOpenForm(false);
    }

    const newListPokemons = pokemons.filter(
      (element) => element.id !== item.data.id
    );

    setPokemonsList(newListPokemons);
  };

  return {
    dataSource,
    actions: {
      editPokemon,
      deletePokemon,
    },
  };
};
