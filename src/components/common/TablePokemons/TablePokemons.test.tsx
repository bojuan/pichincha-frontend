import { render, screen } from "@testing-library/react";
import {
  COLUMNS_TABLE_POKEMONS,
  DATA_SOURCE,
} from "../../../utils/test/mock-data";
import TablePokemons from "./TablePokemons";

describe("TablePokemons test", () => {
  it("should render header and a row with image", () => {
    render(
      <TablePokemons data={DATA_SOURCE} columns={COLUMNS_TABLE_POKEMONS} />
    );

    const title = screen.getByText(COLUMNS_TABLE_POKEMONS[0].title);

    expect(title).toBeInTheDocument();

    const name = screen.getByText(DATA_SOURCE[0].name);

    expect(name).toBeInTheDocument();

    const image = screen.getByAltText(DATA_SOURCE[0].name);

    expect(image).toBeInTheDocument();
  });

  it("should render No data row", () => {
    render(<TablePokemons data={[]} columns={COLUMNS_TABLE_POKEMONS} />);

    const noData = screen.getByText("No data");

    expect(noData).toBeInTheDocument();
  });

  it("should render custom ReactNode", () => {
    render(
      <TablePokemons
        data={DATA_SOURCE}
        columns={[
          ...COLUMNS_TABLE_POKEMONS,
          {
            ...COLUMNS_TABLE_POKEMONS[0],
            render: (currentItem) => {
              return <div>Custom Render</div>;
            },
          },
        ]}
      />
    );

    const customRender = screen.getByText("Custom Render");

    expect(customRender).toBeInTheDocument();
  });
});
