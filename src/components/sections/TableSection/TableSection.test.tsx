import { render, screen } from "@testing-library/react";
import { PokemonContextProvider } from "../../../context/PokemonContext";
import { Pokemon } from "../../../interfaces/Pokemon";
import { LIST_POKEMON } from "../../../shared/utils/test/mock-data";
import TableSection from "./TableSection";

describe("TableSection tests", () => {
  const renderComponent = (list?: Pokemon[]) => {
    return render(
      <PokemonContextProvider
        initialState={{
          pokemons: list ?? [LIST_POKEMON[0]],
        }}
      >
        <TableSection />
      </PokemonContextProvider>
    );
  };

  it("should render an Table only with its header and No data row", () => {
    renderComponent([]);
    const row = screen.getAllByRole("row");
    expect(row).toHaveLength(2);

    const text = screen.getByText("No data");
    expect(text).toBeInTheDocument();
  });

  it("should render an Table with data", () => {
    renderComponent();
    const row = screen.getAllByRole("row");
    expect(row).toHaveLength(2);

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
  });
});
