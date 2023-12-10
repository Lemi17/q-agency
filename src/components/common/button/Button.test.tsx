import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

// Component
import Button from "./Button";

describe("Basic tests", () => {
  it("renders Button component", () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeTruthy();
  });

  it('applies tertiary styles to Button with variant="tertiary"', () => {
    render(<Button variant="tertiary">Click me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    const { backgroundColor, color } = buttonElement.style;
    expect(backgroundColor).toBe("transparent");
    expect(color).toBe("rgb(0, 0, 0)");
  });

  it("calls onClick handler when Button is clicked", () => {
    const handleClick = vitest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const buttonElement = screen.getByText(/click me/i);

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
