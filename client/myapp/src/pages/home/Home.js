import React, { useEffect, useState } from "react";
import { Card } from "../../components/blog/Card";
import { Category } from "../../components/category/Category";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get("http://localhost:3004/posts" + search);
        setPosts(res.data);
        console.log(res.data); // Check if data is correctly fetched
      } catch (error) {
        console.error("Error fetching posts:", error.response || error.message || error);
      }
    };
    fetchPost();
  }, [search]);

  return (
    <>
      <Category />
      <Card posts={posts} />
    </>
  );
};

export default Home;
