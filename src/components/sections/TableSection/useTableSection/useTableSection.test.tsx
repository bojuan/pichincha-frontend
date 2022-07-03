import { act, renderHook } from "@testing-library/react-hooks";
import { PokemonContextProvider } from "../../../../context/PokemonContext";
import * as SERVICES from "../../../../services/services";
import { DATA_SOURCE } from "../../../../shared/utils/test/mock-data";
import { useTableSection } from "./useTableSection";

describe("useTableSection tests", () => {
  const renderCustomHook = () => {
    return renderHook(() => useTableSection(), {
      wrapper: ({ children }: { children: JSX.Element }) => (
        <PokemonContextProvider>{children}</PokemonContextProvider>
      ),
    });
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("When editPokemon is executed, openPokemonForm should be true and pokemonToEdit should have data ", async () => {
    const { result } = renderCustomHook();

    act(() => {
      result.current.actions.editPokemon(DATA_SOURCE[0])();
    });

    expect(result.current.pokemonToEdit).toEqual(DATA_SOURCE[0].data);
    expect(result.current.openPokemonForm).toBeTruthy();
  });

  it("When deleteItemPokemon is executed, openPokemonForm should be false, pokemonToEdit should be undefined and should execute delete service", async () => {
    const mockDeletePokemon = jest
      .spyOn(SERVICES, "deletePokemon")
      .mockResolvedValue(true);

    const { result } = renderCustomHook();

    await act(async () => {
      await result.current.actions.deletePokemon(DATA_SOURCE[0])();
    });

    expect(result.current.pokemonToEdit).toBeUndefined();
    expect(result.current.openPokemonForm).toBeFalsy();
    expect(mockDeletePokemon).toBeCalledWith(DATA_SOURCE[0].key);
  });

  it("When deleteItemPokemon is executed and pokemonToEdit exist, openPokemonForm should be false, pokemonToEdit should be undefined and should execute delete service", async () => {
    const mockDeletePokemon = jest
      .spyOn(SERVICES, "deletePokemon")
      .mockResolvedValue(true);

    const { result } = renderCustomHook();

    act(() => {
      result.current.actions.editPokemon(DATA_SOURCE[0])();
    });

    await act(async () => {
      await result.current.actions.deletePokemon(DATA_SOURCE[0])();
    });

    expect(result.current.pokemonToEdit).toBeUndefined();
    expect(result.current.openPokemonForm).toBeFalsy();
    expect(mockDeletePokemon).toBeCalledWith(DATA_SOURCE[0].key);
  });

  it("When deleteItemPokemon failed should execute an alert", async () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    jest.spyOn(SERVICES, "deletePokemon").mockRejectedValue({});

    const { result } = renderCustomHook();

    await act(async () => {
      await result.current.actions.deletePokemon(DATA_SOURCE[0])();
    });

    expect(alertMock).toBeCalledWith("No se pudo eliminar el Pokemon.");
  });
});
