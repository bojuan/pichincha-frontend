import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button test", () => {
  it("should render Button", () => {
    const { container } = render(<Button>My button</Button>);

    expect(container).toBeDefined();

    const button = screen.getByText("My button");

    expect(button).toBeInTheDocument();
  });

  it("should render Button Icon", () => {
    render(<Button icon={<div>icon</div>} />);

    const icon = screen.getByText("icon");

    expect(icon).toBeInTheDocument();
  });

  it("should execute onClick", async () => {
    const mockOnClick = jest.fn();

    render(<Button onClick={mockOnClick} />);

    const button = screen.getByRole("button");

    await userEvent.click(button);

    expect(mockOnClick).toBeCalled();
  });

  it("shouldn't execute onClick if is disabled", async () => {
    const mockOnClick = jest.fn();

    render(<Button onClick={mockOnClick} disabled type="text" />);

    const button = screen.getByRole("button");

    await userEvent.click(button);

    expect(mockOnClick).not.toBeCalled();
  });
});
