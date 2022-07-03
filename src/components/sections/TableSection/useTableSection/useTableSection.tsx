import { useEffect, useState } from "react";
import { usePokemonContext } from "../../../../context/PokemonContext";
import { Pokemon } from "../../../../interfaces/Pokemon";
import { deletePokemon } from "../../../../services/services";
import { TablePokemonsData } from "../../../common/TablePokemons/TablePokemons.interfaces";

type UseTableSection = () => {
  dataSource: TablePokemonsData[];
  openPokemonForm: boolean;
  pokemonToEdit: Pokemon | undefined;
  actions: {
    editPokemon: (item: TablePokemonsData) => () => void;
    deletePokemon: (item: TablePokemonsData) => () => Promise<void>;
    setPokemonsList: (newPokemonsList: Pokemon[]) => void;
  };
};

export const useTableSection: UseTableSection = () => {
  const [dataSource, setDataSource] = useState<TablePokemonsData[]>([]);

  const {
    pokemons,
    pokemonToEdit,
    openPokemonForm,
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

  const editPokemon = (item: TablePokemonsData) => () => {
    handlePokemonToEdit(item.data);
    handleOpenForm(true);
  };

  const deleteItemPokemon = (item: TablePokemonsData) => async () => {
    try {
      if (item.data.id === pokemonToEdit?.id) {
        handlePokemonToEdit();
        handleOpenForm(false);
      }

      const wasRemoved = await deletePokemon(item.data.id.toString());

      if (!wasRemoved) throw new Error();

      const newListPokemons = pokemons.filter(
        (element) => element.id !== item.data.id
      );

      setPokemonsList(newListPokemons);
    } catch (error) {
      alert("No se pudo eliminar el Pokemon.");
    }
  };

  return {
    dataSource,
    openPokemonForm,
    pokemonToEdit,
    actions: {
      editPokemon,
      deletePokemon: deleteItemPokemon,
      setPokemonsList,
    },
  };
};
