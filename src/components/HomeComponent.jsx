import React from "react";
import Hero from "./Hero";
import Online from "./Online";
import Features from "./Features";
import AvailableCourses from "./AvailableCourses";

const HomeComponent = () => {
  return (
    <div className="">
      <Hero />
      <Online />
      <Features />
      <AvailableCourses />
    </div>
  );
};

export default HomeComponent;
