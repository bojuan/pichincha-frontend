import { fireEvent, render, screen } from "@testing-library/react";
import Slider from "./Slider";

describe("Slider test", () => {
  it("should render Slider", () => {
    render(<Slider name="some" />);

    screen.getByLabelText("some:");
  });

  it("should execute external function", async () => {
    const mockOnChange = jest.fn();

    render(<Slider name="some" onChange={mockOnChange} />);
    const element = screen.getByLabelText("some:");

    fireEvent.change(element, { target: { value: 5 } });

    expect(mockOnChange).toBeCalled();
  });
});
