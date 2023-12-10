import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

// Component
import Layout from "./Layout";

describe("Layout component", () => {
  it("renders the header", () => {
    render(
      <Router>
        <Layout>
          <div>Content</div>
        </Layout>
      </Router>
    );

    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("renders the content wrapper", () => {
    render(
      <Router>
        <Layout>
          <div>Content</div>
        </Layout>
      </Router>
    );

    const contentWrapper = screen.getByRole("main");
    expect(contentWrapper).toBeInTheDocument();
  });

  it("renders the children content", () => {
    render(
      <Router>
        <Layout>
          <div>Content</div>
        </Layout>
      </Router>
    );

    const content = screen.getByText(/Content/i);
    expect(content).toBeInTheDocument();
  });
});
