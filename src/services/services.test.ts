import { getPokemonById, getPokemons } from "./services";
import * as Request from "../utils/http-request/http-request";
import { LIST_POKEMON } from "../utils/test/mock-data";

describe("Services test", () => {
  it("return Pokemons when getPokemons is executed and http-request should be executed", async () => {
    const mockHttpReques = jest
      .spyOn(Request, "httpRequest")
      .mockResolvedValue(LIST_POKEMON);

    const pokemons = await getPokemons();

    expect(pokemons).toEqual(LIST_POKEMON);
    expect(mockHttpReques).toBeCalled();
  });

  it("return a Pokemon when getPokemonById is executed and http-request should be executed", async () => {
    const mockHttpReques = jest
      .spyOn(Request, "httpRequest")
      .mockResolvedValue(LIST_POKEMON[0]);

    const pokemons = await getPokemonById("35");

    expect(pokemons).toEqual(LIST_POKEMON[0]);
    expect(mockHttpReques).toBeCalledWith("35");
  });
});
