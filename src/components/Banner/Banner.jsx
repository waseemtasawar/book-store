import React from "react";
import BooksStack from "../../assets/website/library.jpg";
import Vector from "../../assets/vector3.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div className="relative min-h-[550px]">
      <div className="absolute inset-0 z-0" style={bgImage}></div>
      <div className="min-h-[550px] flex justify-center items-center backdrop-blur-lg bg-gradient-to-r from-purple-600 to-blue-500 py-12 sm:py-0">
        <div data-aos="slide-up" className="container relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
            {/* Image section */}
            <div className="flex justify-center">
              <img
                src={BooksStack}
                alt="Library"
                className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-xl rounded-lg object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            {/* Text content section */}
            <div className="flex flex-col justify-center gap-8 sm:pt-0 text-white">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                Library at Your Fingertips
              </h1>
              <p className="text-lg tracking-wide leading-6">
                Explore a vast collection of books at your convenience. Enjoy
                seamless access and a world of literature with just a click.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <GrSecure className="text-4xl h-12 w-12 shadow-md p-3 rounded-full bg-white text-purple-600" />
                  <p className="text-xl">Quality Books</p>
                </div>
                <div className="flex items-center gap-4">
                  <IoFastFood className="text-4xl h-12 w-12 shadow-md p-3 rounded-full bg-white text-orange-600" />
                  <p className="text-xl">Fast Delivery</p>
                </div>
                <div className="flex items-center gap-4">
                  <GiFoodTruck className="text-4xl h-12 w-12 shadow-md p-3 rounded-full bg-white text-green-600" />
                  <p className="text-xl">Easy Payment Method</p>
                </div>
                <div className="flex items-center gap-4">
                  <GiFoodTruck className="text-4xl h-12 w-12 shadow-md p-3 rounded-full bg-white text-yellow-600" />
                  <p className="text-xl">Exclusive Offers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
