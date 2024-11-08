import React from "react";
import { PostsTable } from "@/components/posts/PostsTable";
import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";
const PostPage = () => {
  return (
    <div>
      <BackButton text="Back to Dashboard" link="/" />
      <PostsTable />
      <PostsPagination />
    </div>
  );
};

export default PostPage;
