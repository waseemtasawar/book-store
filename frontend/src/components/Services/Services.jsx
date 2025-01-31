import React from "react";
import Img1 from "../../assets/books/book2.jpg";
import Img2 from "../../assets/books/book1.jpg";
import Img3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    title: "His Life",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Who's there",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Lost Boy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Services = ({ handleOrderPopup }) => {
  return (
    <>
      <span id="services"></span>
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
              Trending Books
            </p>
            <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white">
              Best Books
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
              Discover the best books of the year, carefully curated for book
              lovers everywhere.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl bg-white dark:bg-gray-800 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl shadow-lg max-w-sm p-6"
              >
                <div className="flex justify-center items-center -mt-20">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-32 h-32 object-cover rounded-full shadow-md transition-transform duration-300 transform group-hover:scale-110"
                  />
                </div>
                <div className="text-center mt-6">
                  <div className="flex justify-center items-center mb-4">
                    {[...Array(4)].map((_, index) => (
                      <FaStar key={index} className="text-yellow-500" />
                    ))}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <button
                    onClick={handleOrderPopup}
                    className="bg-primary text-white py-2 px-4 rounded-full hover:bg-secondary transition duration-300 transform hover:scale-105"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
