import { FC, useState } from "react";
import withLogging from "../../../common/hoc/withLogging";
import Paragraph from "../../../common/text/paragraph/Paragraph";
import PostCard from "../post-card/PostCard";
import "./PostsData.css";
import Button from "../../../common/button/Button";

type PostsDataProps = {
  filteredPosts: PostType[];
};

const PostsData: FC<PostsDataProps> = ({ filteredPosts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const indexOfLastPost = currentPage * postsPerPage;
  const currentPosts = filteredPosts.slice(0, indexOfLastPost);

  const handleShowMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      {currentPosts.length ? (
        <div className="posts_container">
          {currentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <Paragraph>No Posts matching result...</Paragraph>
      )}

      {currentPosts.length < filteredPosts.length && (
        <Button onClick={handleShowMore} className="show_more">
          Show more
        </Button>
      )}
    </>
  );
};

const PostsDataWithLogging = withLogging(PostsData, "PostsData");

export default PostsDataWithLogging;

// export default PostsData;
