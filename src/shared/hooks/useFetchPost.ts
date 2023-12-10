import { useState, useEffect } from "react";
import { getPost } from "../../services/posts/postsService";

type UsePostResult = {
  post: PostType | null;
  error: string | null;
  loading: boolean;
};

const useFetchPost = (postId: number): UsePostResult => {
  const [post, setPost] = useState<PostType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setError(null);
        setLoading(true);

        const data = await getPost(postId);
        setPost(data);
      } catch (error) {
        setError("An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [postId]);

  return { post, error, loading };
};

export default useFetchPost;
