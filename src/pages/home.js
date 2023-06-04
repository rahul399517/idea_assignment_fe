import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/action";
import "./Home.css";
import { Button } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Group posts by userId
  const categories = {};
  posts.forEach((post) => {
    if (!categories[post.userId]) {
      categories[post.userId] = [];
    }
    categories[post.userId].push(post);
  });

  const handleCategoryClick = (userId) => {
    setSelectedCategory(userId);
  };

  return (
    <div className="category-container">
      {Object.keys(categories).map((userId) => (
        <div className="category" key={userId}>
          <h2></h2>
          <Button
            variant="contained"
            color={selectedCategory === userId ? "success" : "primary"}
            onClick={() => handleCategoryClick(userId)}
          >
            Category: User {userId}
          </Button>
          {selectedCategory === userId && (
            <div className="card-container">
              {categories[userId].map((post) => (
                <div className="card" key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  <button className="read-later-btn">Read Later</button>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;
