"use client";
import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineCompareArrows } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxMagnifyingGlass } from "react-icons/rx";
import { BsCart4 } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import Logo from "../assets/logo.png";
import Image from "next/image";
import { GiFruitBowl } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiSolidRightArrow } from "react-icons/bi";
import { SiConcourse } from "react-icons/si";
import { MdHome } from "react-icons/md";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      {" "}
      {/* Nav-1 */}
      <div className="mx-auto py-4 px-[30px]">
        <div className="container mx-auto">
          <div className="flex justify-between rounded-[10px] m-0">
            <Link href="/">
              <div className="flex gap-2 items-center">
                <div className="text-lime-500 text-5xl">
                  <SiConcourse />
                </div>
                <div className="font-bold capitalize">
                  <div className="flex flex-col text-xl">
                    <p className="bg-gradient-to-br from-lime-900 via-orange-800 to-lime-700 bg-clip-text text-transparent">
                      Online
                    </p>
                    <p>Course</p>
                  </div>
                </div>
              </div>
            </Link>

            <div className="flex gap-3">
              {/* Username Input */}
              <div className="flex items-center  overflow-hidden">
                <Link href="/">
                  <div className="flex items-center border border-gray-300 justify-center bg-gray-200 h-10 w-10">
                    <IoMdPerson className="text-gray-600 text-2xl" />
                  </div>
                </Link>

                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="flex-1 py-[9px] px-4 border border-gray-300 text-gray-900 placeholder:text-gray-400 sm:text-sm"
                  placeholder="User Name"
                />
              </div>
              {/* Password Input with Arrow Icon */}
              <div className="flex items-center  overflow-hidden">
                <div className="flex items-center border border-gray-300  justify-center bg-gray-200 h-10 w-10">
                  <RiLockPasswordFill className="text-gray-600 text-2xl" />
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  className="flex-1 py-[9px] px-4 border border-gray-300 text-gray-900 placeholder:text-gray-400 sm:text-sm"
                  placeholder="Password"
                />
                <div className="flex items-center justify-center border border-gray-300 bg-gray-200 h-10 w-10 cursor-pointer hover:bg-gray-300">
                  <BiSolidRightArrow className="text-gray-600 text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Nav-2 */}
      <div class="antialiased bg-no-repeat text-white bg-slate-800 border shadow-md px-[30px] ">
        <header class="container mx-auto px-4 py-2 flex items-center justify-between">
          <nav>
            <ul class="flex items-center justify-center font-semibold">
              <li class="relative group px-3 py-2">
                <button class="hover:opacity-50 cursor-default text- flex flex-row items-center">
                  <MdHome className="text-white text-3xl bg-slate-600 rounded-full p-1 " />
                </button>
              </li>
              <li class="relative group px-3 py-2">
                <button class="hover:opacity-50 cursor-default text-white flex flex-row items-center">
                  Courses
                  <RiArrowDropDownLine className="text-white text-3xl" />
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
                            href="/sampleCourse"
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
              <li class="relative group px-3 py-2">
                <button class="hover:opacity-50 cursor-default text-white flex flex-row items-center">
                  Features
                  <RiArrowDropDownLine className="text-white text-3xl" />
                </button>
                <div class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                  <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                    <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                    <div class="relative z-10">
                      <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        Use cases
                      </p>
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                            Creators
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                            Streamers
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                            Influence
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                            Programming
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                            Design
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="relative group px-3 py-2">
                <button class="hover:opacity-50 cursor-default text-white flex flex-row items-center">
                  Pages
                  <RiArrowDropDownLine className="text-white text-3xl" />
                </button>
                <div class="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                  <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                    <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12.65rem] duration-500 ease-in-out rounded-sm"></div>

                    <div class="relative z-10">
                      <a
                        href="#"
                        class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                      >
                        Documentation
                        <p class="text-gray-500 font-normal">
                          Start integrating in no time
                        </p>
                      </a>
                      <div class="mt-6 grid grid-cols-2 gap-6">
                        <div>
                          <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                            Get started
                          </p>
                          <ul class="mt-3 text-[15px]">
                            <li>
                              <a
                                href="#"
                                class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Libraries and SDKs
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Plugins
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Code samples
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Tutorials
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                            Guides
                          </p>
                          <ul class="mt-3 text-[15px]">
                            <li>
                              <a
                                href="#"
                                class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Accept online payments
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Editing video like a pro
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Automation techniques
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Create stunning effects
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li class="relative group px-3 py-2">
                <a href="#" class="hover:opacity-50 cursor-default">
                  Documentation
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>
                <a
                  href="#"
                  class="rounded-full px-3 py-3 font-semibold bg-white bg-opacity-10 flex items-center group"
                >
                  <div className=" text-2xl">
                    <RxMagnifyingGlass />
                  </div>
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
