import { useState, useEffect } from "react";
import { getAllPosts } from "../../services/posts/postsService";

type UsePostsProps = {
  title_like?: string;
  body_like?: string;
};

type UsePostsResult = {
  posts: getAllPostsResponseDTO | null;
  error: string | null;
  loading: boolean;
};

const useFetchPosts = ({
  body_like = "",
  title_like = "",
}: UsePostsProps): UsePostsResult => {
  const [posts, setPosts] = useState<getAllPostsResponseDTO | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setError(null);
        setLoading(true);

        const data = await getAllPosts({ body_like, title_like });
        setPosts(data);
      } catch (error) {
        setError("An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [body_like, title_like]);

  return { posts, error, loading };
};

export default useFetchPosts;
