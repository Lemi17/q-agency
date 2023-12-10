import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Component
import CommentsSkeletonLoader from "./CommentsSkeletonLoader";

describe("CommentsSkeletonLoader component", () => {
  it("renders CommentsSkeletonLoader component with skeleton loaders", () => {
    const { container } = render(<CommentsSkeletonLoader />);

    const skeletonContainer = container.querySelector(
      ".comments_skeleton_container"
    );
    const skeletonLoaders = container.querySelectorAll(
      ".comments_skeleton_loader"
    );

    expect(skeletonContainer).toBeInTheDocument();
    expect(skeletonLoaders.length).toBe(2); // Assuming there are two loaders
  });
});
