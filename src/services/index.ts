import { Pokemon } from "../interfaces/Pokemon";
import { httpRequest } from "../utils/http-request";

export const getPokemons = (): Promise<Pokemon[]> => {
  const url = "?idAuthor=1";

  return httpRequest<Pokemon[]>(url);
};
