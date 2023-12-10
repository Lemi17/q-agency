import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

//Component
import PostCardComment from "./PostCardComment";

// Mock CommentType data
const sampleComment = {
  postId: 1,
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  body: "This is a sample comment.",
};

describe("PostCardComment component", () => {
  it("renders PostCardComment component with the provided comment data", () => {
    const { container } = render(<PostCardComment comment={sampleComment} />);

    const postCardCommentElement =
      container.querySelector(".post_card_comment");
    const paragraphElement = container.querySelector(".post_card_comment p");

    expect(postCardCommentElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement?.textContent).toContain(
      `${sampleComment.name}: ${sampleComment.body}`
    );
  });
});
