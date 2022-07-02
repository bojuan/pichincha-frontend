import { render, screen } from "@testing-library/react";
import { PokemonContextProvider } from "../../../context/PokemonContext";
import HeaderSection from "./HeaderSection";

describe("HeaderSection tests", () => {
  const renderComponent = () => {
    return render(
      <PokemonContextProvider>
        <HeaderSection />
      </PokemonContextProvider>
    );
  };

  it("should render an InputSearch and a button", () => {
    renderComponent();
    screen.getByPlaceholderText("Buscar");
    screen.getAllByRole("button", {
      name: "Nuevo",
    });
  });
});
