import React from "react";

const aboutSections = [
  {
    id: 1,
    title: "Our Story",
    description:
      "Our journey began with a simple idea: to make literature accessible to everyone. Over the years, we've grown into a comprehensive platform for book lovers around the world.",
    image: "https://picsum.photos/300/200?random=7",
  },
  {
    id: 2,
    title: "Our Mission",
    description:
      "Our mission is to foster a love for reading by providing a vast collection of books, reviews, and a community for readers and authors alike.",
    image: "https://picsum.photos/300/200?random=8",
  },
  {
    id: 3,
    title: "Our Team",
    description:
      "We are a diverse team of passionate readers, authors, and technologists dedicated to bringing you the best reading experience possible.",
    image: "https://picsum.photos/300/200?random=9",
  },
];

const About = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-800 dark:text-white">
        About Us
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
        Learn more about our company and team.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {aboutSections.map((section) => (
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
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
