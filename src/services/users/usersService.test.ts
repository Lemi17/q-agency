import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { getAllUsers, getUser } from "./usersService";

describe("getAllUsers service", () => {
  it("fetches users successfully", async () => {
    globalThis.fetch = async () =>
      Promise.resolve({
        ok: true,
        json: async () => [
          {
            id: 1,
            name: "John Doe",
            username: "johndoe",
            email: "john@example.com",
          },
          {
            id: 2,
            name: "Jane Doe",
            username: "janedoe",
            email: "jane@example.com",
          },
        ],
      } as Response);

    const result = await getAllUsers();

    expect(result).toHaveLength(2);
    expect(result[0].name).toBe("John Doe");
    expect(result[1].name).toBe("Jane Doe");
  });

  it("handles error when fetching users", async () => {
    globalThis.fetch = async () => Promise.reject(new Error("Fetch error"));

    try {
      await getAllUsers();
    } catch (error) {
      expect((error as Error).message).toBe("Fetch error");
    }
  });
});

describe("getUser service", () => {
  it("fetches a user successfully", async () => {
    globalThis.fetch = async () =>
      Promise.resolve({
        ok: true,
        json: async () => ({
          id: 1,
          name: "John Doe",
          username: "johndoe",
          email: "john@example.com",
        }),
      } as Response);

    const result = await getUser("1");

    expect(result.name).toBe("John Doe");
    expect(result.email).toBe("john@example.com");
  });

  it("handles error when fetching a user", async () => {
    globalThis.fetch = async () => Promise.reject(new Error("Fetch error"));

    try {
      await getUser("1");
    } catch (error) {
      expect((error as Error).message).toBe("Fetch error");
    }
  });
});
