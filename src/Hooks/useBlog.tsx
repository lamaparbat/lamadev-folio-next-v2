"use client";

import { useState } from 'react';

const useBlogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  return {
    blogPosts,
  }
}

export default useBlogs;
