import { describe, expect, it } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

// Component
import Search from "./Search";

describe("Search component", () => {
  it("renders Search component", () => {
    const { container } = render(<Search value="" onChange={() => {}} />);
    const searchContainer = container.querySelector(".search_container");
    expect(searchContainer).toBeInTheDocument();
  });

  it("renders the Input component inside Search", () => {
    const { container } = render(<Search value="" onChange={() => {}} />);
    const inputElement = container.querySelector('input[type="text"]');
    expect(inputElement).toBeInTheDocument();
  });

  it("passes value and onChange prop to Input component", () => {
    const handleChange = vitest.fn();
    const { container } = render(
      <Search value="TestValue" onChange={handleChange} />
    );

    const inputElement = container.querySelector('input[type="text"]');
    expect(inputElement).toHaveAttribute("value", "TestValue");

    fireEvent.change(inputElement!, { target: { value: "NewValue" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
