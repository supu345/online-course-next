import Image from "next/image";
import React from "react";

const Online = () => {
  return (
    <div className="container py-[60px] px-[80px]">
      <div className="text-center text-gray-600">
        <p className=" text-3xl ">Self-Paced Learning Courses Online</p>
        <h1 className="text-5xl font-bold pt-5">
          with <span className="text-blue-700">Online</span> - Courses
          self-Paced Learning
        </h1>
        <p className=" text-xl pt-5 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex flex-row gap-[20px] justify-center">
        <div className="w-1/3 mt-[50px] pl-5">
          <div className="h-[300px] w-[300px]">
            <Image
              src="https://images.pexels.com/photos/3760810/pexels-photo-3760810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={300}
              height={300}
              className="rounded-md transition-transform duration-300 ease-in-out hover:-translate-y-2"
            />
            <p className="text-center pt-5">
              <span className="font-bold"> Educational Institutions:</span> From
              elementary schools to universities, enrich teaching methodologies
              and engage learners effectively across diverse educational levels.
            </p>
          </div>
        </div>

        <div className="w-1/3 mt-[50px]">
          <div className="h-[300px] w-[300px]">
            <Image
              src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={300}
              height={300}
              className="rounded-md transition-transform duration-300 ease-in-out hover:-translate-y-2"
            />
            <p className="text-center pt-5">
              <span className="font-bold">Online Course Platforms:</span>
              Elevate your online course experiences, providing a robust and
              adaptable learning environment for users seeking comprehensive
              educational resources.
            </p>
          </div>
        </div>

        <div className="w-1/3 mt-[50px]">
          <div className="h-[300px] w-[300px] ">
            <Image
              src="https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={300}
              height={300}
              className="rounded-md transition-transform duration-300 ease-in-out hover:-translate-y-2"
            />
            <p className="text-center pt-5">
              <span className="font-bold"> Educational Institutions:</span> From
              elementary schools to universities, enrich teaching methodologies
              and engage learners effectively across diverse educational levels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Online;
