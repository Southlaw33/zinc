import React, { Suspense } from "react";
import PostLists from "./components/PostLists";

const PostsPage = () => {
  return (
    <div>
      <h1>Posts</h1>
      <Suspense fallback={
        <div className="container mx-auto text-blue-700">Loading posts</div>
      }>
        <PostLists />
      </Suspense>
    </div>
  );
};

export default PostsPage;
