import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { getAllPosts, getPost } from "./postsService";

describe("getAllPosts service", () => {
  it("fetches posts successfully", async () => {
    globalThis.fetch = async () =>
      Promise.resolve({
        ok: true,
        json: async () => [
          {
            userId: 1,
            id: 1,
            title: "Post 1",
            body: "Body of Post 1",
          },
          {
            userId: 2,
            id: 2,
            title: "Post 2",
            body: "Body of Post 2",
          },
        ],
      } as Response);

    const result = await getAllPosts();

    expect(result).toHaveLength(2);
    expect(result[0].title).toBe("Post 1");
    expect(result[1].title).toBe("Post 2");
  });

  it("handles error when fetching posts", async () => {
    globalThis.fetch = async () => Promise.reject(new Error("Fetch error"));

    try {
      await getAllPosts();
    } catch (error) {
      expect((error as Error).message).toBe("Fetch error");
    }
  });
});

describe("getPost service", () => {
  it("fetches a post successfully", async () => {
    globalThis.fetch = async () =>
      Promise.resolve({
        ok: true,
        json: async () => ({
          userId: 1,
          id: 1,
          title: "Post 1",
          body: "Body of Post 1",
        }),
      } as Response);

    const result = await getPost(1);

    expect(result.title).toBe("Post 1");
    expect(result.body).toBe("Body of Post 1");
  });

  it("handles error when fetching a post", async () => {
    globalThis.fetch = async () => Promise.reject(new Error("Fetch error"));

    try {
      await getPost(1);
    } catch (error) {
      expect((error as Error).message).toBe("Fetch error");
    }
  });
});
