import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Component
import Heading from "./Heading";

describe("Heading component", () => {
  it("renders Heading component with the correct heading level", () => {
    const { container } = render(<Heading level={1}>Hello World</Heading>);
    const headingElement = container.querySelector("h1");

    expect(headingElement).toBeInTheDocument();
    expect(headingElement?.textContent).toBe("Hello World");
  });

  it("applies custom className to Heading component", () => {
    const { container } = render(
      <Heading level={2} className="custom-heading">
        Custom Heading
      </Heading>
    );

    const headingElement = container.querySelector("h2.custom-heading");

    expect(headingElement).toBeInTheDocument();
    expect(headingElement?.textContent).toBe("Custom Heading");
  });

  it("passes down additional HTML attributes to Heading component", () => {
    const { container } = render(
      <Heading level={3} id="customId" data-testid="customTestId">
        Additional Attributes
      </Heading>
    );

    const headingElement = container.querySelector(
      'h3#customId[data-testid="customTestId"]'
    );

    expect(headingElement).toBeInTheDocument();
    expect(headingElement?.textContent).toBe("Additional Attributes");
  });
});
