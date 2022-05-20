import axios from "axios";
import HomeHeader from "../components/HomeHeader";
import { API_URL } from "../utils/urls";

import { useEffect, useState } from "react";
import PostsList from "../components/PostsList";

export default function Home({ posts }) {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    setLatestPosts(posts.slice(0, 3));
  }, [posts]);

  return (
    <>
      <HomeHeader />
      <PostsList posts={latestPosts} />
    </>
  );
}

export async function getStaticProps() {
  const postsRes = await axios.get(`${API_URL}/api/posts-plural/`);
  // console.log(`${API_URL}/api/posts-plural/`);
  const posts = postsRes.data.data;

  return {
    props: {
      posts,
    },
  };
}
