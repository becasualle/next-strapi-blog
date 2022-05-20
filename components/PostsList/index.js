import { useState, useEffect } from "react";
import PostPreview from "../PostPreview";

const AllPosts = ({ posts }) => {
  const renderPostPreviews = () =>
    posts.map((post) => (
      <PostPreview key={post.id} post={post.attributes} id={post.id} />
    ));

  return (
    <>
      <h2>Посты</h2>
      {renderPostPreviews()}
    </>
  );
};

export default AllPosts;
