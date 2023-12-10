import { Link } from "react-router-dom";
import Heading from "../../../common/text/heading/Heading";
import Paragraph from "../../../common/text/paragraph/Paragraph";
import "./PostCard.css";
import { FC, useContext, memo } from "react";
import { AppContext } from "../../../../shared/state/AppContextComponent";
import PostCardComments from "../../../common/ui/post-card-comments/PostCardComments";
import withLogging from "../../../common/hoc/withLogging";

type PostCardProps = {
  post: PostType;
};

const PostCard: FC<PostCardProps> = ({ post }) => {
  const { getUserById } = useContext(AppContext);

  const user = getUserById(post.userId);
  return (
    <div className="post_card_bg">
      <div className="post_card">
        <div className="post_card_content">
          <Link to={`/post/${post.id}`}>
            <div className="">
              <Paragraph>{user?.name || "---"}</Paragraph>
              <Heading level={3} className="post_card_heading">
                {post.title}
              </Heading>
            </div>
            <Paragraph className="post_card_body">{post.body}</Paragraph>

            <PostCardComments postId={post.id} showAll={false} />
            <img src="/logo-gray.svg" className="logo_watermark" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const PostCardWithLogging = memo(withLogging(PostCard, "PostCard"));

export default PostCardWithLogging;

// export default PostCard;
