"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect, useCallback } from "react";

type Post = {
  id: string;
  title: string;
};

const ClientPostsList = () => {
  const { data, isPending, error } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const respone = await fetch("http://localhost:3000/posts");
      return await respone.json();
    },
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error !!</div>;
  }
  return (
    <div className="container mx-auto">
      {data.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </div>
  );
};

export default ClientPostsList;
