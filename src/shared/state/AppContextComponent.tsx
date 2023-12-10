import React, { FC, createContext, useRef } from "react";
import useFetchUsers from "../hooks/useFetchUsers";
import withLogging from "../../components/common/hoc/withLogging";

export interface AppContextProps {
  usersError: string | null;
  usersLoading: boolean;
  users: getAllUsersResponseDTO | null;
  getUserById: (userId: number) => UserType | null;
  commentFetched: (postId: number) => CommentType[] | null;
  updateCommentsBuffer: (postId: number, comments: CommentType[]) => void;
  clearCommentsBuffer: () => void;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

const AppContextComponent: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    error: usersError,
    loading: usersLoading,
    users,
    getUserById,
  } = useFetchUsers();

  const commentsBuffer = useRef<{ [postId: number]: CommentType[] }>({});

  const commentFetched = (postId: number): CommentType[] | null => {
    return commentsBuffer.current[postId] || null;
  };

  const updateCommentsBuffer = (postId: number, comments: CommentType[]) => {
    commentsBuffer.current[postId] = comments;
  };

  const clearCommentsBuffer = () => {
    commentsBuffer.current = {};
  };

  return (
    <AppContext.Provider
      value={{
        usersError,
        usersLoading,
        users,
        getUserById,
        commentFetched,
        updateCommentsBuffer,
        clearCommentsBuffer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const AppContextComponentWithLogging = withLogging(
  AppContextComponent,
  "AppContextComponent"
);

export { AppContext };

export default AppContextComponentWithLogging;
