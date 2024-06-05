import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "Understanding React Context",
    author: "John Doe",
    date: "June 5, 2024",
    summary:
      "A deep dive into the React Context API and how to effectively use it in your applications.",
    image: "https://picsum.photos/300/200?random=1",
  },
  {
    id: 2,
    title: "Styling in React: CSS-in-JS vs. CSS Modules",
    author: "Jane Smith",
    date: "June 10, 2024",
    summary:
      "An analysis of different styling methods in React, their pros and cons, and best practices.",
    image: "https://picsum.photos/300/200?random=2",
  },
  {
    id: 3,
    title: "Performance Optimization in React",
    author: "Alice Johnson",
    date: "June 15, 2024",
    summary:
      "Tips and techniques for improving the performance of your React applications.",
    image: "https://picsum.photos/300/200?random=3",
  },
];

const Blog = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-800 dark:text-white">
        Our Blog
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
        Read our latest blog posts and updates.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                {post.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {post.date} by {post.author}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {post.summary}
              </p>
              <button className="bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
