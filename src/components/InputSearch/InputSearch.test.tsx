import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputSearch from "./InputSearch";

describe("InputSearch test", () => {
  test("Should render InputSearch", () => {
    const { container } = render(<InputSearch onSearch={() => {}} />);

    expect(container).toBeDefined();
  });

  test("Should render InputSearch when placeholder was changed", () => {
    render(<InputSearch onSearch={() => {}} placeholder="some" />);
    const inputSearchLabel = screen.getByPlaceholderText("some");

    expect(inputSearchLabel).toBeInTheDocument();
  });

  test("Should execute onSearch", async () => {
    const mockOnSearch = jest.fn();

    render(<InputSearch onSearch={mockOnSearch} />);

    const inputSearchLabel = screen.getByPlaceholderText("Buscar");

    await userEvent.type(inputSearchLabel, "hello");

    const inputSearchButton = screen.getByRole("button");

    await userEvent.click(inputSearchButton);

    expect(mockOnSearch).toBeCalledWith("hello");
  });
});
