import axios from "axios";
import PostsList from "../../components/PostsList";
import { API_URL } from "../../utils/urls";
const Posts = ({ posts }) => {
  return (
    <>
      <PostsList posts={posts} />
    </>
  );
};

export default Posts;

export async function getStaticProps() {
  const postsRes = await axios.get(`${API_URL}/api/posts-plural/`);
  const posts = postsRes.data.data;

  return {
    props: {
      posts,
    },
  };
}
