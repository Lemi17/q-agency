import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { getAllComments } from "./commentsService";

describe("getAllComments service", () => {
  it("fetches comments successfully", async () => {
    globalThis.fetch = async () =>
      Promise.resolve({
        ok: true,
        json: async () => [
          {
            id: 1,
            postId: 1,
            name: "John",
            email: "john@example.com",
            body: "Comment 1",
          },
          {
            id: 2,
            postId: 1,
            name: "Jane",
            email: "jane@example.com",
            body: "Comment 2",
          },
        ],
      } as Response);

    const result = await getAllComments({ postId: 1 });

    expect(result).toHaveLength(2);
    expect(result[0].name).toBe("John");
    expect(result[1].name).toBe("Jane");
  });

  it("handles error when fetching comments", async () => {
    globalThis.fetch = async () => Promise.reject(new Error("Fetch error"));

    try {
      await getAllComments({ postId: 1 });
    } catch (error) {
      expect((error as Error).message).toBe("Fetch error");
    }
  });
});
