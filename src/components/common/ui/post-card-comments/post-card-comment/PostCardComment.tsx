import "./PostCardComment.css";
import Paragraph from "../../../text/paragraph/Paragraph";
import { FC, memo } from "react";
import withLogging from "../../../hoc/withLogging";

const PostCardComment: FC<{ comment: CommentType }> = ({ comment }) => {
  return (
    <div className="post_card_comment">
      <Paragraph>
        <strong>{comment.name}: </strong>
        {comment.body}
      </Paragraph>
    </div>
  );
};

const PostCardCommentWithLogging = memo(
  withLogging(PostCardComment, "PostCardComment")
);

export default PostCardCommentWithLogging;

// export default PostCardComment;
