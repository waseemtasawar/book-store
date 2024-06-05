import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Narayan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
            What our customers say
          </p>
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white">
            Testimonials
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
            Hear from our satisfied customers about their experiences with our
            services.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div key={data.id} className="px-4">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 rounded-xl dark:bg-gray-800 bg-white relative">
                  <div className="flex justify-center">
                    <img
                      className="rounded-full w-20 h-20 border-4 border-primary shadow-lg"
                      src={data.img}
                      alt={data.name}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {data.text}
                    </p>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mt-4">
                      {data.name}
                    </h2>
                  </div>
                  <p className="text-primary text-9xl font-serif absolute top-0 right-4 opacity-20">
                    “
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
