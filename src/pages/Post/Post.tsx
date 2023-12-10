import "./Post.css";
import { useParams } from "react-router-dom";
import useFetchPost from "../../shared/hooks/useFetchPost";
import FullPageLoader from "../../components/common/loader/full-page-loader/FullPageLoader";
import Error from "../../components/common/ui/error/Error";
import withLogging from "../../components/common/hoc/withLogging";
import PostData from "../../components/pages/post/post-data/PostData";

const Post = () => {
  const { id } = useParams();
  const { error, loading, post } = useFetchPost(Number(id));

  return (
    <div className="post_page">
      {loading && <FullPageLoader />}
      {error && <Error message={error} />}
      {post && <PostData post={post} />}
    </div>
  );
};

const PostWithLogging = withLogging(Post, "Post");

export default PostWithLogging;

// export default Post;
