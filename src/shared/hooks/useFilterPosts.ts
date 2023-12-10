import { useContext, useState, useEffect } from "react";
import useFetchPosts from "./useFetchPosts";
import { AppContext } from "../state/AppContextComponent";

type UseFilteredPostsResult = {
  filteredPosts: PostType[] | null;
  error: string | null;
  loading: boolean;
  filterPostsByUserName: (userName: string) => void;
};

const useFilteredPosts = (): UseFilteredPostsResult => {
  const { users } = useContext(AppContext);
  const { posts, error, loading } = useFetchPosts({});
  const [filteredPosts, setFilteredPosts] = useState<PostType[] | null>(null);

  const filterPostsByUserName = (userName: string) => {
    if (!userName) {
      setFilteredPosts(posts);
      return;
    }

    const postsFiltered: PostType[] = [];

    // Loop through all users
    users?.forEach((user) => {
      // Check if the users name matches the input
      if (user.name.toLowerCase().includes(userName.toLowerCase())) {
        // Filter posts for this user
        const userPosts =
          posts?.filter((post) => post.userId === user.id) || [];
        // Concatenate the users posts to the result
        postsFiltered.push(...userPosts);
      }
    });

    setFilteredPosts(postsFiltered);
  };

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts, users]);

  return { filteredPosts, error, loading, filterPostsByUserName };
};

export default useFilteredPosts;
