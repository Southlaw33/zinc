import React, { Suspense } from "react";
import PostLists from "./components/PostLists";
import ClientPostsList from "./components/ClientPostsList";

const PostsPage = () => {
  return (
    <div>
      <h1>Posts</h1>
      <Suspense
        fallback={
          <div className="container mx-auto text-blue-700">Loading posts</div>
        }
      >
        <ClientPostsList />
      </Suspense>
    </div>
  );
};

export default PostsPage;
