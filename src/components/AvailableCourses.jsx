import Image from "next/image";
import React from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
const AvailableCourses = () => {
  return (
    <div className="container pt-[30px]">
      <p className="text-3xl font-normal">Available Courses</p>
      <div className="h-[3px] w-[80px] mt-4 !bg-blue-600 mb-6"></div>
      <div className="flex flex-row gap-8">
        <div className="w-1/4">
          <div className="w-[300px] h-[230px]">
            <Image
              src="https://images.pexels.com/photos/10356910/pexels-photo-10356910.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width={300}
              height={300}
              alt="image"
              className="rounded-md"
            />
          </div>
        </div>
        <div className="w-3/4 py-4">
          <p className="text-xl">Creative Writing</p>
          <p className="text-gray-500">Literacy</p>
          <p>
            This is a sample course with contents and activities. You can take a
            look how resources and activities are displayed in a course view.
            This sample course uses the "Topics" course format.
          </p>
          <button className="bg-blue-600 p-2 text-white mt-6 rounded-sm px-5 shadow-md">
            Click to enter this course
          </button>
        </div>
      </div>
      <div className="border !bg-blue-600 mb-4 "></div>{" "}
      <div className="flex flex-row gap-8 mt-[30px]">
        <div className="w-1/4">
          <div className="w-[300px] h-[270px]">
            <Image
              src="https://images.pexels.com/photos/375882/pexels-photo-375882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width={300}
              height={280}
              alt="image"
              className="rounded-md"
            />
          </div>
        </div>
        <div className="w-3/4 py-4">
          <p className="text-xl">Art History</p>
          <p className="text-gray-500">Art and Media</p>
          <p>
            This is a sample course with contents and activities. You can take a
            look how resources and activities are displayed in a course view.
            This sample course uses the "Topics" course format.
          </p>
          <button className="bg-blue-600 p-2 text-white mt-6 rounded-sm px-5 shadow-md">
            Click to enter this course
          </button>
        </div>
      </div>
      <div className="border !bg-blue-600 mb-4"></div>{" "}
      <div className="flex flex-row gap-8 mt-[30px]">
        <div className="w-1/4">
          <div className="w-[300px] h-[280px]">
            <Image
              src="https://images.pexels.com/photos/8087930/pexels-photo-8087930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width={300}
              height={400}
              alt="image"
              className="rounded-md h-[200px]"
            />
          </div>
        </div>
        <div className="w-3/4 py-4">
          <p className="text-xl">Biology</p>
          <p className="text-gray-500">Science and Mathematics</p>
          <p>
            This is a sample course with contents and activities. You can take a
            look how resources and activities are displayed in a course view.
            This sample course uses the "Topics" course format.
          </p>
          <button className="bg-blue-600 p-2 text-white mt-6 rounded-sm px-5 shadow-md">
            Click to enter this course
          </button>
        </div>
      </div>
      <div className="border !bg-blue-600 mb-4"></div>{" "}
      <div className="flex flex-row gap-8 mt-[30px]">
        <div className="w-1/4">
          <div className="w-[300px] h-[270px]">
            <Image
              src="https://images.pexels.com/photos/5212687/pexels-photo-5212687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width={300}
              height={280}
              alt="image"
              className="rounded-md"
            />
          </div>
        </div>
        <div className="w-3/4 py-4">
          <p className="text-xl">Content components</p>
          <p className="text-gray-500">Miscellaneous</p>
          <p>Collection of components for the content plugins.</p>
          <button className="bg-blue-600 p-2 text-white mt-6 rounded-sm px-5 shadow-md">
            Click to enter this course
          </button>
        </div>
      </div>
      <div className="border !bg-blue-600 mb-4"></div>{" "}
      <div className="flex justify-center mt-8 mb-6">
        <button className="bg-blue-400 p-2 text-white rounded-sm px-5 shadow-md">
          All courses
        </button>
      </div>
      {/*Site announcements */}
      <p className="text-3xl font-normal mt-5">Site announcements</p>
      <div className="h-[3px] w-[80px] mt-4 !bg-blue-600 mb-6"></div>
      <div className="grid grid-cols-3 gap-8 px-7">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="p-4">
            <Image
              src="https://images.pexels.com/photos/4769464/pexels-photo-4769464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width={300}
              height={300}
              alt="img1"
              className="h-[200px] rounded-md"
            />
            <p className="mt-4 text-normal">Suggestions for course design</p>
            <div className="flex flex-row gap-2 items-center">
              <AiOutlineExclamationCircle className="text-blue-500 text-xl" />
              <p className="text-sm mt-2">
                by Admin User - Saturday, 30 December
              </p>
            </div>
            <p className="text-sm mt-2">2023, 12:40 PM</p>

            <div className="h-[1px] w-full mt-4 bg-gray-400 mb-6"></div>
            <div>
              <p className="text-xl mb-4">
                Ut enim ad minima veniam, quis nostrum exercitationem.
              </p>
              <p className="mt-4 mb-4">
                Cupiditate non provident, similique sunt in culpa qui officia
                deserunt mollitia. Cupiditate non provident, similique ...
              </p>
              <button className="bg-blue-400 p-2 text-white rounded-sm px-5 shadow-md mb-4">
                More...
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableCourses;
