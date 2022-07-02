import { Pokemon } from "../interfaces/Pokemon";
import { httpRequest } from "../utils/http-request/http-request";

export const getPokemons = (): Promise<Pokemon[]> => {
  const url = "?idAuthor=1";

  return httpRequest<Pokemon[]>(url);
};

export const getPokemonById = (id: string): Promise<Pokemon> => {
  return httpRequest<Pokemon>(id);
};
