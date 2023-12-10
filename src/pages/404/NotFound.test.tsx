import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";

describe("NotFound component", () => {
  it("renders the NotFound component correctly", async () => {
    render(<NotFound />);

    const heading = screen.getByRole("heading", { level: 1 });
    const paragraph = screen.getByText(
      "Sorry, the page you are looking for might not exist."
    );

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });
});
