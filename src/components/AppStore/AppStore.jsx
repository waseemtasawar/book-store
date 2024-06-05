import React from "react";
import AppStoreImg from "../../assets/app_store.png";
import PlayStoreImg from "../../assets/play_store.png";
import Banner from "../../assets/website/board.png";

const bannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStore = () => {
  return (
    <>
      <div
        className="bg-gray-100 dark:bg-gray-900 text-white py-16"
        style={bannerImg}
      >
        <div className="container mx-auto px-6">
          <div
            data-aos="fade-up"
            data-aos-duration="300"
            className="space-y-6 max-w-2xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-gray-800 dark:text-white">
              Read Books at Your Fingertips
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Download our app to explore a world of literature right from your
              device.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
              <a
                href="#"
                className="transform transition duration-300 hover:scale-105"
              >
                <img
                  src={PlayStoreImg}
                  alt="Play store"
                  className="w-[120px] sm:w-[150px] md:w-[200px] shadow-lg rounded-md"
                />
              </a>
              <a
                href="#"
                className="transform transition duration-300 hover:scale-105"
              >
                <img
                  src={AppStoreImg}
                  alt="App store"
                  className="w-[120px] sm:w-[150px] md:w-[200px] shadow-lg rounded-md"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
