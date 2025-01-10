import Image from "next/image";
import React from "react";
import { MdHome } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiContractUpDownFill } from "react-icons/ri";
const AllCoursesComponent = () => {
  return (
    <div>
      <div className="container ">
        <button className="bg-blue-400 p-2 text-white rounded-sm px-5 shadow-md mt-6 mb-4">
          Online Courses
        </button>

        <div className="flex flex-row gap-4 bg-slate-100 ">
          <div className="w-3/4 ml-9">
            {/* button */}
            <ul class="flex items-center justify-center font-semibold mt-4 mb-6 ">
              <li class="relative group px-3 py-1 bg-slate-200 p-2 border border-blue-700">
                <button class="hover:opacity-50 cursor-default text-black flex flex-row items-center gap-9">
                  Miscellaneous
                  <RiContractUpDownFill className="text-black text-xl" />
                </button>
                <div class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                  <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                    <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                    <div class="relative z-10">
                      <ul class="mt-3 text-[15px]  ">
                        <li>
                          <a
                            href="/courses"
                            class="text-gray-500 bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                            All Courses
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                            Sample course
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                            Course Details
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* blog */}
            <div className="flex flex-row gap-5">
              <div className="">
                <div className="w-[300px] h-[240px]">
                  <Image
                    src="https://images.pexels.com/photos/10356910/pexels-photo-10356910.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    width={300}
                    height={320}
                    alt="image"
                    className="rounded-md h-[210px]"
                  />
                </div>
              </div>
              <div className="py-4 ">
                <p className="text-xl">Creative Writing</p>
                <p className="text-gray-500">Literacy</p>
                <p>
                  This is a sample course with contents and activities. You can
                  take a look how resources and activities are displayed in a
                  course view. This sample course uses the "Topics" course
                  format.
                </p>
                <button className="bg-blue-600 p-2 text-white mt-6 rounded-sm px-5 shadow-md">
                  Click to enter this course
                </button>
              </div>
            </div>
            <div className="border !bg-blue-600 mb-4 "></div>{" "}
            <div className="flex flex-row gap-5">
              <div className="">
                <div className="w-[300px] h-[240px]">
                  <Image
                    src="https://images.pexels.com/photos/375882/pexels-photo-375882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    width={300}
                    height={280}
                    alt="image"
                    className="rounded-md"
                  />
                </div>
              </div>
              <div className="py-4 ">
                <p className="text-xl">Creative Writing</p>
                <p className="text-gray-500">Literacy</p>
                <p>
                  This is a sample course with contents and activities. You can
                  take a look how resources and activities are displayed in a
                  course view. This sample course uses the "Topics" course
                  format.
                </p>
                <button className="bg-blue-600 p-2 text-white mt-6 rounded-sm px-5 shadow-md">
                  Click to enter this course
                </button>
              </div>
            </div>
            <div className="border !bg-blue-600 mb-4 "></div>{" "}
            <div className="flex flex-row gap-5">
              <div className="">
                <div className="w-[300px] h-[240px]">
                  <Image
                    src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    width={300}
                    height={280}
                    alt="image"
                    className="rounded-md"
                  />
                </div>
              </div>
              <div className="py-4 ">
                <p className="text-xl">Creative Writing</p>
                <p className="text-gray-500">Literacy</p>
                <p>
                  This is a sample course with contents and activities. You can
                  take a look how resources and activities are displayed in a
                  course view. This sample course uses the "Topics" course
                  format.
                </p>
                <button className="bg-blue-600 p-2 text-white mt-6 rounded-sm px-5 shadow-md">
                  Click to enter this course
                </button>
              </div>
            </div>
            <div className="border !bg-blue-600 mb-4 "></div>{" "}
            <div className="flex flex-row gap-5">
              <div className="">
                <div className="w-[300px] h-[240px]">
                  <Image
                    src="https://images.pexels.com/photos/5088008/pexels-photo-5088008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    width={300}
                    height={280}
                    alt="image"
                    className="rounded-md"
                  />
                </div>
              </div>
              <div className="py-4 ">
                <p className="text-xl">Creative Writing</p>
                <p className="text-gray-500">Literacy</p>
                <p>
                  This is a sample course with contents and activities. You can
                  take a look how resources and activities are displayed in a
                  course view. This sample course uses the "Topics" course
                  format.
                </p>
                <button className="bg-blue-600 p-2 text-white mt-6 rounded-sm px-5 shadow-md">
                  Click to enter this course
                </button>
              </div>
            </div>
            <div className="border !bg-blue-600 mb-4 "></div>{" "}
            <div className="flex flex-row gap-5">
              <div className="">
                <div className="w-[300px] h-[240px]">
                  <Image
                    src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    width={300}
                    height={280}
                    alt="image"
                    className="rounded-md"
                  />
                </div>
              </div>
              <div className="py-4 ">
                <p className="text-xl">Creative Writing</p>
                <p className="text-gray-500">Literacy</p>
                <p>
                  This is a sample course with contents and activities. You can
                  take a look how resources and activities are displayed in a
                  course view. This sample course uses the "Topics" course
                  format.
                </p>
                <button className="bg-blue-600 p-2 text-white mt-6 rounded-sm px-5 shadow-md">
                  Click to enter this course
                </button>
              </div>
            </div>
            <div className="border !bg-blue-600 mb-4 "></div>{" "}
          </div>
          <div className="w-1/4">
            <p className="mt-6">Course categories</p>
            <div className="h-[3px] w-[80px] mt-4 !bg-blue-600 mb-6"></div>
            <p className="mb-2">
              Miscellaneous{" "}
              <span className="bg-slate-300 text-white px-2 rounded-md">
                {" "}
                3
              </span>
            </p>
            <p className="mb-2">
              Society and Environment
              <span className="bg-slate-300 text-white px-2 rounded-md ml-2">
                {" "}
                3
              </span>
            </p>
            <p className="mb-2">
              Art and Media
              <span className="bg-slate-300 text-white px-2 rounded-md ml-2">
                {" "}
                6
              </span>
            </p>
            <p className="mb-2">
              Literacy
              <span className="bg-slate-300 text-white px-2 rounded-md ml-2">
                {" "}
                4
              </span>
            </p>
            <p className="mb-2">
              Physical Education{" "}
              <span className="bg-slate-300 text-white px-2 rounded-md">
                {" "}
                5
              </span>{" "}
            </p>
            <p className="mb-2">
              Science and Mathematics{" "}
              <span className="bg-slate-300 text-white px-2 rounded-md">
                {" "}
                1
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCoursesComponent;
