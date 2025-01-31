import React, { useState } from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa6";
import BookList from "./BookList"; // Import the new component

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Who's there",
    rating: 5.0,
    author: "Someone",
  },
  {
    id: 2,
    img: Book2,
    title: "His Life",
    rating: 4.5,
    author: "John",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost boys",
    rating: 4.7,
    author: "Lost Girl",
  },
  {
    id: 4,
    img: Book2,
    title: "His Life",
    rating: 4.4,
    author: "Someone",
  },
  {
    id: 5,
    img: Book1,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
];

const Books = () => {
  const [showMoreBooks, setShowMoreBooks] = useState(false); // State to manage visibility

  const toggleBooks = () => {
    setShowMoreBooks((prev) => !prev);
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 max-w-xl mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Top Books for you
          </p>
          <h1 className="text-4xl font-extrabold">Top Books</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Discover the most popular books curated just for you. These are the
            top picks that readers love.
          </p>
        </div>

        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {/* Card */}
            {booksData.map(({ id, img, title, rating, author }) => (
              <div
                key={id}
                className="group relative transform transition duration-300 hover:scale-105"
              >
                <img
                  src={img}
                  alt={title}
                  className="h-[250px] w-full object-cover rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-75 rounded-b-lg shadow-md">
                  <h3 className="font-bold text-lg">{title}</h3>
                  <p className="text-sm text-gray-700">{author}</p>
                  <div className="flex items-center mt-2">
                    <FaStar className="text-yellow-500" />
                    <span className="ml-1">{rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {showMoreBooks && <BookList />} {/* Conditionally render BookList */}
          <div className="flex justify-center mt-12">
            <button
              className="bg-primary text-white py-2 px-6 rounded-full shadow-md transform transition duration-300 hover:scale-105"
              onClick={toggleBooks} // Toggle the state on click
            >
              {showMoreBooks ? "Hide All Books" : "View All Books"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
