import { act, renderHook } from "@testing-library/react-hooks";
import { PokemonContextProvider } from "../../../../context/PokemonContext";
import * as SERVICES from "../../../../services/services";
import { LIST_POKEMON } from "../../../../shared/utils/test/mock-data";
import useFormSection from "./useFormSection";

describe("useFormSection tests", () => {
  const renderCustomHook = () => {
    return renderHook(() => useFormSection(), {
      wrapper: ({ children }: { children: JSX.Element }) => (
        <PokemonContextProvider>{children}</PokemonContextProvider>
      ),
    });
  };

  it("should set to current states when pokemonToEdit exist", () => {
    const { result } = renderCustomHook();
    act(() => {
      result.current.actions.handlePokemonToEdit(LIST_POKEMON[0]);
    });

    expect(result.current.name).toBe(LIST_POKEMON[0].name);
    expect(result.current.image).toBe(LIST_POKEMON[0].image);
    expect(result.current.attack).toBe(LIST_POKEMON[0].attack);
    expect(result.current.defense).toBe(LIST_POKEMON[0].defense);
    expect(result.current.type).toBe(LIST_POKEMON[0].type);
    expect(result.current.hp).toBe(LIST_POKEMON[0].hp);
  });

  it("should set to initial states when pokemonToEdit do not exist", () => {
    const { result } = renderCustomHook();
    act(() => {
      result.current.actions.handlePokemonToEdit();
    });

    expect(result.current.name).toBe("");
    expect(result.current.image).toBe("");
    expect(result.current.attack).toBe(0);
    expect(result.current.defense).toBe(0);
    expect(result.current.type).toBe("");
    expect(result.current.hp).toBe(0);
  });

  it("should set states when the methods are executed", () => {
    const { result } = renderCustomHook();

    act(() => {
      result.current.actions.handleChangeName("name");
    });
    expect(result.current.name).toBe("name");

    act(() => {
      result.current.actions.handleChangeImage("image");
    });
    expect(result.current.image).toBe("image");

    act(() => {
      result.current.actions.handleChangeAttack(6);
    });
    expect(result.current.attack).toBe(6);

    act(() => {
      result.current.actions.handleChangeDefense(5);
    });
    expect(result.current.defense).toBe(5);

    act(() => {
      result.current.actions.handleChangeType("type");
    });
    expect(result.current.type).toBe("type");

    act(() => {
      result.current.actions.handleChangeHp(8);
    });
    expect(result.current.hp).toBe(8);
  });

  it("OpenForm should be false and isUpdate should be false when handleCancel is executed", () => {
    const { result } = renderCustomHook();
    act(() => {
      result.current.actions.handleCancel();
    });

    expect(result.current.openPokemonForm).toBeFalsy();
    expect(result.current.isUpdate).toBeFalsy();
  });

  it("Erros and disableButton should be true when the states are empty. If are not empty, disabledButton should be false", async () => {
    const { result } = renderCustomHook();

    act(() => {
      result.current.actions.handleChangeName("a");
    });

    act(() => {
      result.current.actions.handleChangeImage("a");
    });

    act(() => {
      result.current.actions.handleChangeType("a");
    });

    expect(result.current.disableButton).toBeFalsy();

    act(() => {
      result.current.actions.handleChangeName("");
    });

    act(() => {
      result.current.actions.handleChangeImage("");
    });

    act(() => {
      result.current.actions.handleChangeType("");
    });

    expect(result.current.errors.errorImage).toBeTruthy();
    expect(result.current.errors.errorName).toBeTruthy();
    expect(result.current.errors.errorType).toBeTruthy();

    expect(result.current.disableButton).toBeTruthy();
  });

  it("Should create a Pokemon when handleSave is executed and pokemonToEdit are not exist", async () => {
    const mockCreatePokemon = jest
      .spyOn(SERVICES, "createPokemon")
      .mockResolvedValue(LIST_POKEMON[0]);

    const { result } = renderCustomHook();

    await act(async () => {
      await result.current.actions.handleSave();
    });

    expect(result.current.pokemons).toEqual([LIST_POKEMON[0]]);
    expect(result.current.openPokemonForm).toBeFalsy();
    expect(result.current.isUpdate).toBeFalsy();
    expect(mockCreatePokemon).toBeCalled();
  });

  it("Should execute an alert when create service failed", async () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation();

    jest.spyOn(SERVICES, "createPokemon").mockRejectedValue(new Error());

    const { result } = renderCustomHook();

    await act(async () => {
      await result.current.actions.handleSave();
    });

    expect(alertMock).toBeCalledWith("No se pudo crear el Pokemon");
  });

  it("Should update a Pokemon when handleSave is executed and pokemonToEdit exist", async () => {
    const mockUpdatePokemon = jest
      .spyOn(SERVICES, "updatePokemon")
      .mockResolvedValue(LIST_POKEMON[0]);

    const { result } = renderCustomHook();

    act(() => {
      result.current.actions.setPokemonsList(LIST_POKEMON);
    });

    act(() => {
      result.current.actions.handlePokemonToEdit(LIST_POKEMON[0]);
    });

    await act(async () => {
      await result.current.actions.handleSave();
    });

    expect(mockUpdatePokemon).toBeCalled();
  });

  it("Should execute an alert when update service failed", async () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation();

    jest.spyOn(SERVICES, "updatePokemon").mockRejectedValue(new Error());

    const { result } = renderCustomHook();

    act(() => {
      result.current.actions.handlePokemonToEdit(LIST_POKEMON[0]);
    });

    await act(async () => {
      await result.current.actions.handleSave();
    });

    expect(alertMock).toBeCalledWith("No se pudo actualizar el Pokemon");
  });
});
