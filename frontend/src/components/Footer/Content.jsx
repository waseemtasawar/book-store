import React from "react";

const contentSections = [
  {
    id: 1,
    title: "Introduction to Our Platform",
    description:
      "Discover how our platform can help you find the best books, read reviews, and stay updated with the latest releases.",
    image: "https://picsum.photos/300/200?random=4",
  },
  {
    id: 2,
    title: "Our Mission",
    description:
      "Our mission is to make literature accessible to everyone, providing a comprehensive platform for book lovers.",
    image: "https://picsum.photos/300/200?random=5",
  },
  {
    id: 3,
    title: "Join Our Community",
    description:
      "Become a part of our growing community of readers and authors. Share your thoughts, reviews, and recommendations.",
    image: "https://picsum.photos/300/200?random=6",
  },
];

const Content = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-800 dark:text-white">
        Contect Page
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
        This is the content of the Home page.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {contentSections.map((section) => (
          <div
            key={section.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                {section.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {section.description}
              </p>
              <button className="bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
