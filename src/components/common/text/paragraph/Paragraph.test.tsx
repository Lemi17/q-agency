import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

//Component
import ParagraphWithLogging from "./Paragraph";

describe("Paragraph component", () => {
  it("renders Paragraph component with provided className and children", () => {
    const { container } = render(
      <ParagraphWithLogging className="custom-paragraph">
        Hello Paragraph
      </ParagraphWithLogging>
    );

    const paragraphElement = container.querySelector("p.custom-paragraph");

    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement?.textContent).toBe("Hello Paragraph");
  });

  it("passes down additional HTML attributes to Paragraph component", () => {
    const { container } = render(
      <ParagraphWithLogging id="customId" data-testid="customTestId">
        Additional Attributes
      </ParagraphWithLogging>
    );

    const paragraphElement = container.querySelector(
      'p#customId[data-testid="customTestId"]'
    );

    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement?.textContent).toBe("Additional Attributes");
  });
});
