import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import ErrorWithLogging from "./Error";

describe("Error component", () => {
  it("renders Error component with the provided error message", () => {
    const errorMessage = "This is an error message.";
    const { container } = render(<ErrorWithLogging message={errorMessage} />);

    const errorPageElement = container.querySelector(".error_page");
    const bannerGreyElement = container.querySelector(
      ".error_page .banner_grey"
    );
    const headingElement = container.querySelector(".error_page h1");
    const paragraphElement = container.querySelector(".error_page p");

    expect(errorPageElement).toBeInTheDocument();
    expect(bannerGreyElement).toBeInTheDocument();
    expect(headingElement).toBeInTheDocument();
    expect(headingElement?.textContent).toBe("Ooops Something went wrong...");
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement?.textContent).toBe(errorMessage);
  });
});
