"use client";

import React from 'react';
import useBlogs from '@/Hooks/useBlog';

const Index = () => {
  const { blogPosts } = useBlogs();

  return (
    <div>
      blog post page
    </div>
  )
}

export default Index
