import { render, screen } from "@testing-library/react";
import { PokemonContextProvider } from "../../../context/PokemonContext";
import { Pokemon } from "../../../interfaces/Pokemon";
import { LIST_POKEMON } from "../../../shared/utils/test/mock-data";
import FormSection from "./FormSection";

describe("HeaderSection tests", () => {
  const renderComponent = (initialValue?: Pokemon) => {
    return render(
      <PokemonContextProvider
        initialState={{
          pokemonToEdit: initialValue,
        }}
      >
        <FormSection />
      </PokemonContextProvider>
    );
  };

  it("should render a title, 6 inputs and 2 buttons", () => {
    renderComponent();

    screen.getByText("Nuevo Pokemon");
    screen.getByLabelText("Nombre:");
    screen.getByLabelText("Imagen:");
    screen.getByLabelText("Tipo:");
    screen.getByLabelText("Ataque:");
    screen.getByLabelText("Defensa:");
    screen.getByLabelText("Golpe:");

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
  });

  it("should render a update title", () => {
    renderComponent(LIST_POKEMON[0]);

    screen.getByText("Actualizar Pokemon");
  });
});
