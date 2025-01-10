"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import both icons

// Arrow Component for Next
const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} absolute right-5 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg cursor-pointer z-20`}
      onClick={onClick}
    >
      <FaArrowRight className="text-black" /> {/* Use right arrow icon */}
    </div>
  );
};

// Arrow Component for Previous
const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} absolute left-5 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg cursor-pointer z-20`}
      onClick={onClick}
    >
      <FaArrowLeft className="text-black" /> {/* Use left arrow icon */}
    </div>
  );
};

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container relative">
      <div className="slider-container relative">
        <Slider {...settings}>
          {slideContent.map((slide, index) => (
            <div key={index} className="relative h-[480px] w-full">
              {" "}
              {/* Use full width for the slide */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  layout="fill"
                  objectFit="cover"
                  alt={slide.alt}
                  className="rounded-lg"
                />
              </div>
              <div
                className={`absolute max-w-[470px] sm:ml-8 top-[50%] ${slide.textPosition} transform -translate-y-1/2 sm:space-y-4 text-black bg-white bg-opacity-70 p-5 rounded-lg`}
              >
                <h2 className="text-2xl sm:text-4xl md:text-3xl font-bold text-black">
                  {slide.title}
                </h2>
                <p className="text-sm hidden sm:block pb-4">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// Slide Content Data
const slideContent = [
  {
    image:
      "https://images.pexels.com/photos/10494250/pexels-photo-10494250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "hero",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, placeat.",
    textPosition: "left-0",
  },
  {
    image:
      "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "hero",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, placeat.",
    textPosition: "left-0",
  },
  {
    image:
      "https://images.pexels.com/photos/941572/pexels-photo-941572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "hero",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, placeat.",
    textPosition: "right-0",
  },
];

export default Hero;
