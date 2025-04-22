"use client";
import React, { useState, useEffect, useCallback } from "react";

type Post = {
  id: string;
  title: string;
};

const ClientPostsList = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Post[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/posts");
      if (response.status !== 200) {
        setLoading(false);
        setError(new Error("Something went wrong"));
      }
      const posts: Post[] = await response.json();
      setLoading(false);
      setData(posts);
      setError(null); // Clear any previous errors
    } catch (e) {
      setLoading(false);
      setError(e as Error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div className="container mx-auto">Loading...</div>;
  }

  if (error) {
    return <div>Error!!</div>;
  }

  return (
    <div className="container mx-auto">
      <h1>Client Posts List</h1>
      <ul>
        {data!.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </ul>
    </div>
  );
};

export default ClientPostsList;
