import React from "react";
import Book1 from "../../assets/books/book2.jpg";
import Book2 from "../../assets/books/book1.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Vector from "../../assets/website/blue-pattern.png";

const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "His Life will forever be Changed",
    description:
      "His Life will forever be Changed. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Book2,
    title: "Who's there",
    description:
      "Who's there. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost Boy",
    description:
      "Lost Boy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const [imageId, setImageId] = React.useState(Book1);
  const [title, setTitle] = React.useState("His Life will forever be Changed");
  const [description, setDescription] = React.useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  );

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };

  return (
    <div
      className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white transition duration-200"
      style={bgImage}
    >
      <div className="container pb-8 sm:pb-0 mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Text content section */}
          <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
              {title}
              <span className="block bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary text-right text-lg sm:text-xl">
                by Anonymous
              </span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed">
              {description}
            </p>
            <div>
              <button
                onClick={handleOrderPopup}
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform duration-200 text-white py-3 px-6 rounded-full shadow-md"
              >
                Order Now
              </button>
            </div>
          </div>
          {/* Image section */}
          <div className="flex justify-center items-center relative order-1 sm:order-2">
            <div className="relative h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
              <img
                src={imageId}
                alt="book img"
                className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-75 rounded-t-lg shadow-md">
                <h2 className="text-lg sm:text-xl font-bold">{title}</h2>
              </div>
            </div>
            <div className="flex flex-row lg:flex-col justify-center gap-4 absolute bottom-[-40px] lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 right-0 p-2 bg-white rounded-lg shadow-lg">
              {ImageList.map((item) => (
                <img
                  key={item.id}
                  src={item.img}
                  onClick={() => {
                    setImageId(item.img);
                    setTitle(item.title);
                    setDescription(item.description);
                  }}
                  alt="book thumbnail"
                  className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-cover rounded-md hover:scale-110 transition-transform duration-200 cursor-pointer shadow-sm"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
