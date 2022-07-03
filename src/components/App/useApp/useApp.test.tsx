import { renderHook } from "@testing-library/react-hooks";
import { PokemonContextProvider } from "../../../context/PokemonContext";
import * as SERVICES from "../../../services/services";
import { LIST_POKEMON } from "../../../shared/utils/test/mock-data";
import useApp from "./useApp";

describe("useFormSection tests", () => {
  const renderCustomHook = () => {
    return renderHook(() => useApp(), {
      wrapper: ({ children }: { children: JSX.Element }) => (
        <PokemonContextProvider>{children}</PokemonContextProvider>
      ),
    });
  };

  it("should execute getPokemons", () => {
    const mockGetPokemons = jest
      .spyOn(SERVICES, "getPokemons")
      .mockResolvedValue(LIST_POKEMON);

    renderCustomHook();

    expect(mockGetPokemons).toBeCalled();
  });
});
