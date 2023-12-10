import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Component
import BannerGrey from "./BannerGrey";

describe("BannerGrey component", () => {
  it("renders BannerGrey component with grey banner and logo", () => {
    const { container } = render(<BannerGrey />);

    const bannerGreyElement = container.querySelector(".banner_grey");
    const logoElement = container.querySelector(
      '.banner_grey img[src="/logo-gray.svg"]'
    );

    expect(bannerGreyElement).toBeInTheDocument();
    expect(logoElement).toBeInTheDocument();
  });
});
