import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Component
import LoaderWithLogging from "./Loader";

describe("Loader component", () => {
  it("renders Loader component", () => {
    const { container } = render(<LoaderWithLogging />);
    const loaderElement = container.querySelector(".loader");
    expect(loaderElement).toBeInTheDocument();
  });
});
