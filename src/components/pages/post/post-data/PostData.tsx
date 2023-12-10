import { FC, useContext } from "react";
import Heading from "../../../common/text/heading/Heading";
import BannerGrey from "../../../common/ui/banner-grey/BannerGrey";
import Paragraph from "../../../common/text/paragraph/Paragraph";
import PostCardComments from "../../../common/ui/post-card-comments/PostCardComments";
import withLogging from "../../../common/hoc/withLogging";
import "./PostData.css";
import { AppContext } from "../../../../shared/state/AppContextComponent";

type PostDataProps = {
  post: PostType;
};

const PostData: FC<PostDataProps> = ({ post }) => {
  const { getUserById } = useContext(AppContext);
  const user = getUserById(1);

  return (
    <div>
      <div className="post_body">
        <Heading level={1} className="post_heading1">
          {post.title}
        </Heading>

        <Heading level={3} style={{ marginTop: "32px" }}>
          {user?.name || "---"}
        </Heading>

        <div style={{ height: "300px", marginTop: "32px" }}>
          <BannerGrey />
        </div>

        <Paragraph className="post_paragraph">{post.body}</Paragraph>
      </div>
      <PostCardComments postId={post.id} showAll={true} />
    </div>
  );
};

const PostDataWithLogging = withLogging(PostData, "PostData");

export default PostDataWithLogging;

// export default PostData;
