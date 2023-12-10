import { useState, useEffect, useContext } from "react";
import { getAllComments } from "../../services/comments/commentsService";
import { AppContext } from "../state/AppContextComponent";

interface UseCommentsProps {
  postId: number;
}

interface UseCommentsResult {
  comments: getAllCommentsResponseDTO | null;
  error: string | null;
  loading: boolean;
}

const useFetchComments = ({ postId }: UseCommentsProps): UseCommentsResult => {
  const { commentFetched, updateCommentsBuffer } = useContext(AppContext);
  const [comments, setComments] = useState<getAllCommentsResponseDTO | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        if (commentFetched(postId)) {
          setComments(commentFetched(postId));
        } else {
          setError(null);
          setLoading(true);

          const data = await getAllComments({ postId });
          setComments(data);
          updateCommentsBuffer(postId, data);
        }
      } catch (error) {
        setError("An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [commentFetched, postId, updateCommentsBuffer]);

  return { comments, error, loading };
};

export default useFetchComments;
