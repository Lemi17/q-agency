import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Component
import FullPage from "./FullPageLoader";

describe("FullPageLoader component", () => {
  it("renders FullPageLoader component with Loader", () => {
    const { container } = render(<FullPage />);
    const fullPageLoaderElement = container.querySelector(".full_page_loader");
    expect(fullPageLoaderElement).toBeInTheDocument();

    const loaderElement = container.querySelector(".loader");
    expect(loaderElement).toBeInTheDocument();
  });
});
