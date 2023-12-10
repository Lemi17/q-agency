import "./Posts.css";
import Heading from "../../components/common/text/heading/Heading";
import useFilteredPosts from "../../shared/hooks/useFilterPosts";
import { useEffect, useState } from "react";
import FullPageLoader from "../../components/common/loader/full-page-loader/FullPageLoader";
import Error from "../../components/common/ui/error/Error";
import withLogging from "../../components/common/hoc/withLogging";
import Search from "../../components/common/search/Search";
import PostsData from "../../components/pages/posts/posts-data/PostsData";

const Posts = () => {
  const [text, setText] = useState("");
  const { filteredPosts, error, loading, filterPostsByUserName } =
    useFilteredPosts();

  useEffect(() => {
    filterPostsByUserName(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="posts_page">
      <Heading level={1}>Posts</Heading>
      <div className="posts_search_wrapper">
        <Search
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
          placeholder="Search..."
          className="posts_page_search"
        />
      </div>
      {loading && <FullPageLoader />}
      {filteredPosts && <PostsData filteredPosts={filteredPosts} />}
    </div>
  );
};

const PostsWithLogging = withLogging(Posts, "Posts");

export default PostsWithLogging;

// export default Posts;
