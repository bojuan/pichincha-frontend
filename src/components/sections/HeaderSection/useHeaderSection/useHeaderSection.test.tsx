import { act, renderHook } from "@testing-library/react-hooks";
import { PokemonContextProvider } from "../../../../context/PokemonContext";
import useHeaderSection from "./useHeaderSection";
import * as SERVICES from "../../../../services/services";
import { LIST_POKEMON } from "../../../../utils/test/mock-data";

describe("useHeaderSection tests", () => {
  const renderCustomHook = () => {
    return renderHook(() => useHeaderSection(), {
      wrapper: ({ children }: { children: JSX.Element }) => (
        <PokemonContextProvider>{children}</PokemonContextProvider>
      ),
    });
  };

  it("should open modal when handleOpenPokemonForm is executed", () => {
    const { result } = renderCustomHook();
    act(() => {
      result.current.actions.handleOpenPokemonForm();
    });

    expect(result.current.isOpenForm).toBeTruthy();
  });

  it("should call to getPokemons when value is empty", async () => {
    const mockGetPokemons = jest
      .spyOn(SERVICES, "getPokemons")
      .mockResolvedValue([]);

    const { result } = renderCustomHook();
    await act(async () => {
      await result.current.actions.handleSearch("");
    });

    expect(mockGetPokemons).toBeCalled();
  });

  it("should call to getPokemonById when value is correct", async () => {
    const mockGetPokemonById = jest
      .spyOn(SERVICES, "getPokemonById")
      .mockResolvedValue(LIST_POKEMON[0]);

    const { result } = renderCustomHook();
    await act(async () => {
      await result.current.actions.handleSearch("25");
    });

    expect(mockGetPokemonById).toBeCalledWith("25");
  });

  it("should call to alert when there are problems", async () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation();

    jest.spyOn(SERVICES, "getPokemonById").mockRejectedValue(new Error());

    const { result } = renderCustomHook();

    await act(async () => {
      await result.current.actions.handleSearch("25");
    });

    expect(alertMock).toBeCalledWith("No se econtró el pokemon");
  });
});
