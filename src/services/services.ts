import { Pokemon } from "../interfaces/Pokemon";
import { httpRequest } from "../shared/utils/http-request/http-request";

export const getPokemons = (): Promise<Pokemon[]> => {
  const url = "?idAuthor=1";

  return httpRequest<Pokemon[]>(url);
};

export const getPokemonById = (id: string): Promise<Pokemon> => {
  return httpRequest<Pokemon>(id);
};

export const createPokemon = (data: {
  attack: number;
  defense: number;
  hp: number;
  idAuthor: number;
  image: string;
  name: string;
  type: string;
}): Promise<Pokemon> => {
  const url = "?idAuthor=1";
  return httpRequest<Pokemon>(url, {
    method: "POST",
    body: data,
  });
};

export const updatePokemon = (
  id: string,
  data: {
    attack: number;
    defense: number;
    hp: number;
    idAuthor: number;
    image: string;
    name: string;
    type: string;
  }
): Promise<Pokemon> => {
  return httpRequest<Pokemon>(id, {
    method: "PUT",
    body: data,
  });
};

export const deletePokemon = (id: string): Promise<boolean> => {
  return httpRequest<{
    success: boolean;
    type: string;
    data: Pokemon[];
  }>(id, {
    method: "DELETE",
  }).then((resp) => resp.success);
};
