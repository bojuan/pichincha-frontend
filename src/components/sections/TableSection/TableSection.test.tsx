import { render, screen } from "@testing-library/react";
import { PokemonContextProvider } from "../../../context/PokemonContext";
import TableSection from "./TableSection";

describe("TableSection tests", () => {
  const renderComponent = () => {
    return render(
      <PokemonContextProvider>
        <TableSection />
      </PokemonContextProvider>
    );
  };

  it("should render an Table only with its header and No data row", () => {
    renderComponent();
    const row = screen.getAllByRole("row");
    expect(row).toHaveLength(2);

    const text = screen.getByText("No data");
    expect(text).toBeInTheDocument();
  });
});
