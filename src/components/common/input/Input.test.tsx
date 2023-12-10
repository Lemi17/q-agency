import { describe, expect, it } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

// Component
import Input from "./Input";

describe("Input component", () => {
  it("renders Input component", () => {
    render(<Input value="" onChange={() => {}} />);
    const inputElement = document.querySelector('input[type="text"]');
    expect(inputElement).toBeInTheDocument();
  });

  it("passes value and onChange prop to Input component", () => {
    const handleChange = vitest.fn();
    const { container } = render(
      <Input value="TestValue" onChange={handleChange} />
    );

    const inputElement = container.querySelector('input[type="text"]');
    expect(inputElement).toHaveAttribute("value", "TestValue");

    fireEvent.change(inputElement!, { target: { value: "NewValue" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
