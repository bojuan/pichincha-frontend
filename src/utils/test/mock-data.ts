import {
  TablePokemonsColumn,
  TablePokemonsData,
} from "../../components/common/TablePokemons/TablePokemons.interfaces";
import { Pokemon } from "../../interfaces/Pokemon";

export const LIST_POKEMON: Pokemon[] = [
  {
    id: 35,
    name: "Alakazam",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png",
    attack: 79,
    defense: 61,
    hp: 55,
    type: "Eléctrico",
    id_author: 1,
  },
  {
    id: 41,
    name: "Bulbasaur",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    attack: 75,
    defense: 43,
    hp: 62,
    type: "Planta",
    id_author: 1,
  },
  {
    id: 42,
    name: "Charmeleon",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    attack: 84,
    defense: 36,
    hp: 29,
    type: "Fuego",
    id_author: 1,
  },
  {
    id: 43,
    name: "Wartortle",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
    attack: 29,
    defense: 76,
    hp: 100,
    type: "heroku",
    id_author: 1,
  },
  {
    id: 113,
    name: "Pikachu",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    attack: 65,
    defense: 26,
    hp: 100,
    type: "Test type",
    id_author: 1,
  },
];

export const DATA_SOURCE: TablePokemonsData[] = [
  {
    name: "Alakazam",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png",
    attack: 79,
    defense: 61,
    key: "35",
    data: {
      id: 35,
      name: "Alakazam",
      image:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png",
      attack: 79,
      defense: 61,
      hp: 55,
      type: "Eléctrico",
      id_author: 1,
    },
  },
];

export const COLUMNS_TABLE_POKEMONS: TablePokemonsColumn[] = [
  {
    title: "Nombre",
    key: "name",
  },
  {
    title: "Imagen",
    key: "image",
  },
  {
    title: "Ataque",
    key: "attack",
  },
  {
    title: "Defensa",
    key: "defense",
  },
];
