import withLogging from "../../../hoc/withLogging";
import "./CommentsSkeletonLoader.css";

const CommentsSkeletonLoader = () => {
  return (
    <div className="comments_skeleton_container">
      <div className="comments_skeleton_loader"></div>
      <div className="comments_skeleton_loader"></div>
    </div>
  );
};

const CommentsSkeletonLoaderWithLogging = withLogging(
  CommentsSkeletonLoader,
  "CommentsSkeletonLoader"
);

export default CommentsSkeletonLoaderWithLogging;

// export default CommentsSkeletonLoader;
