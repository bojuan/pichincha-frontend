import {
  createPokemon,
  deletePokemon,
  getPokemonById,
  getPokemons,
  updatePokemon,
} from "./services";
import * as Request from "../shared/utils/http-request/http-request";
import { LIST_POKEMON } from "../shared/utils/test/mock-data";
import { ID_AUTHOR } from "../shared/constants/pichincha-constants";

describe("Services test", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should return Pokemons when getPokemons is executed and http-request should be executed", async () => {
    const mockHttpRequest = jest
      .spyOn(Request, "httpRequest")
      .mockResolvedValue(LIST_POKEMON);

    const pokemons = await getPokemons();

    expect(pokemons).toEqual(LIST_POKEMON);
    expect(mockHttpRequest).toBeCalled();
  });

  it("should return a Pokemon when getPokemonById is executed and http-request should be executed", async () => {
    const mockHttpRequest = jest
      .spyOn(Request, "httpRequest")
      .mockResolvedValue(LIST_POKEMON[0]);

    const pokemons = await getPokemonById("35");

    expect(pokemons).toEqual(LIST_POKEMON[0]);
    expect(mockHttpRequest).toBeCalledWith("35");
  });

  it("should call method PUT when updatePokemon is executed", async () => {
    const mockHttpRequest = jest
      .spyOn(Request, "httpRequest")
      .mockResolvedValue(LIST_POKEMON[0]);

    await updatePokemon("35", {
      attack: 1,
      defense: 1,
      image: "some",
      name: "some",
      hp: 5,
      idAuthor: ID_AUTHOR,
      type: "some",
    });

    expect(mockHttpRequest.mock.calls[0][1]?.method).toEqual("PUT");
  });

  it("should call method DELETE when deletePokemon is executed", async () => {
    const mockHttpRequest = jest
      .spyOn(Request, "httpRequest")
      .mockResolvedValue(true);

    await deletePokemon("35");

    expect(mockHttpRequest.mock.calls[0][1]?.method).toEqual("DELETE");
  });

  it("should call method POST when createPokemon is executed", async () => {
    const mockHttpRequest = jest
      .spyOn(Request, "httpRequest")
      .mockResolvedValue(LIST_POKEMON[0]);

    await createPokemon({
      attack: 1,
      defense: 1,
      image: "some",
      name: "some",
      hp: 5,
      idAuthor: ID_AUTHOR,
      type: "some",
    });

    expect(mockHttpRequest.mock.calls[0][1]?.method).toEqual("POST");
  });
});
