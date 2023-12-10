import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

//Component
import Header from "./Header";

describe("Header component", () => {
  it("renders the logo link", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const logoLink = screen.getByRole("link", { name: /q agency logo/i });
    expect(logoLink).toBeInTheDocument();
  });

  it("renders the header paragraph", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const headerParagraph = screen.getByText(/Whatever the Q\. We got the A/i);
    expect(headerParagraph).toBeInTheDocument();
  });

  it("renders the logo image", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const logoImage = screen.getByAltText(/q agency logo/i);
    expect(logoImage).toBeInTheDocument();
  });
});
