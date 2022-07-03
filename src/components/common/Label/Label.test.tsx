import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Label from "./Label";

describe("Label test", () => {
  it("should render label", () => {
    render(<Label name="some" />);

    screen.getByLabelText("some:");
  });

  it("should execute external function", async () => {
    const mockOnChange = jest.fn();

    render(<Label name="some" onChange={mockOnChange} />);
    const element = screen.getByLabelText("some:");

    await userEvent.type(element, "hello");

    expect(mockOnChange).toBeCalled();
  });

  it("should have an error className", async () => {
    const { container } = render(<Label name="some" error />);

    expect(
      container.getElementsByClassName("label__input label--error")
    ).toHaveLength(1);
  });
});
