import { FC, useMemo, useState } from "react";
import useFetchComments from "../../../../shared/hooks/useFetchComments";
import "./PostCardComments.css";
import Heading from "../../text/heading/Heading";
import CommentsSkeletonLoader from "./comments-skeleton-loader/CommentsSkeletonLoader";
import Error from "../error/Error";
import withLogging from "../../hoc/withLogging";
import PostCardComment from "./post-card-comment/PostCardComment";
import Button from "../../button/Button";

type PostCardProps = {
  postId: number;
  showAll: boolean;
};

const PostCardComments: FC<PostCardProps> = ({ postId, showAll }) => {
  const [isShowAll, setIsShowAll] = useState(showAll);
  const { comments, error, loading } = useFetchComments({ postId });

  const displayedComments = useMemo(() => {
    if (comments) {
      return isShowAll ? comments : comments.slice(0, 2);
    }
    return [];
  }, [comments, isShowAll]);

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="post_card_comments">
      <Heading level={3}>Comments:</Heading>
      {loading ? (
        <CommentsSkeletonLoader />
      ) : (
        comments && (
          <>
            {displayedComments.map((comment) => {
              return (
                <PostCardComment
                  key={comment.id}
                  componentName={`${comment.id}`}
                  comment={comment}
                />
              );
            })}
            {!isShowAll && (
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setIsShowAll(true);
                }}
                className="show_all"
                variant="tertiary"
              >
                Show All
                <span></span>
              </Button>
            )}
          </>
        )
      )}
    </div>
  );
};

const PostCardCommentsWithLogging = withLogging(
  PostCardComments,
  "PostCardComments"
);

export default PostCardCommentsWithLogging;

// export default PostCardComments;
