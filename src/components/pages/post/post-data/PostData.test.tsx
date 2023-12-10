// PostData.test.tsx
import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  AppContext,
  AppContextProps,
} from "../../../../shared/state/AppContextComponent";
import PostDataWithLogging from "./PostData";

// Mock AppContext values
const mockAppContext: AppContextProps = {
  usersError: null,
  usersLoading: false,
  users: null,
  getUserById: () => ({
    id: 1,
    name: "John Doe",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  }),
  commentFetched: () => null,
  updateCommentsBuffer: () => {},
  clearCommentsBuffer: () => {},
};

const MockAppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AppContext.Provider value={mockAppContext}>{children}</AppContext.Provider>
  );
};

describe("PostData component", () => {
  it("renders PostData component with post data and user name", () => {
    const post = {
      id: 1,
      userId: 1,
      title: "Test Post",
      body: "This is the body of the test post.",
    };

    render(
      <MockAppContextProvider>
        <PostDataWithLogging post={post} />
      </MockAppContextProvider>
    );

    // Assertions
    const postTitle = screen.getByText("Test Post");
    const userName = screen.getByText("John Doe");
    const postBody = screen.getByText("This is the body of the test post.");

    expect(postTitle).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
    expect(postBody).toBeInTheDocument();
  });
});
