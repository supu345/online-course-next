import React from "react";
import Image from "next/image";
import { FaAngleRight, FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiConcourse } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
const Footer = () => {
  return (
    <div>
      <div className="container px-[30px] pt-[30px] border-t-2 border-blue-400 bg-slate-600">
        <div className="flex flex-row gap-[40px] pl-[40px]">
          <div className="w-1/4">
            <div className="flex gap-2 items-center ">
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
            <p className="text-normal text-xl">Premium Moodle Themes</p>
            <p className="text-normal text-xl mt-4 text-blue-600">
              Buy Theme now!
            </p>
          </div>
          <div className="w-1/4">
            <p className="text-2xl">Links</p>
            <div className="h-[3px] w-[60px] mt-2 !bg-blue-600 mb-6"></div>
            <div className="flex flex-row gap-2 items-center mb-3">
              <FaAngleRight className="text-white" />
              <p>Features</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <FaAngleRight className="text-white" />
              <p>Components</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <FaAngleRight className="text-white" />
              <p>H5P</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <FaAngleRight className="text-white" />
              <p>Support</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <FaAngleRight className="text-white" />
              <p>Documentation</p>
            </div>
          </div>
          <div className="w-1/4">
            <p className="text-2xl">Links</p>
            <div className="h-[3px] w-[60px] mt-2 !bg-blue-600 mb-6"></div>
            <div className="flex flex-row gap-2 items-center mb-3">
              <FaAngleRight className="text-white" />
              <p>Features</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <FaAngleRight className="text-white" />
              <p>Components</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <FaAngleRight className="text-white" />
              <p>H5P</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <FaAngleRight className="text-white" />
              <p>Support</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <FaAngleRight className="text-white" />
              <p>Documentation</p>
            </div>
          </div>
          <div className="w-1/4">
            <p className="text-2xl">Links</p>
            <div className="h-[3px] w-[60px] mt-2 !bg-blue-600 mb-6"></div>
            <div className="flex flex-row gap-2 items-center mb-3">
              <FaAngleRight className="text-white" />
              <p>Features</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <FaAngleRight className="text-white" />
              <p>Components</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <FaAngleRight className="text-white" />
              <p>H5P</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <FaAngleRight className="text-white" />
              <p>Support</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <FaAngleRight className="text-white" />
              <p>Documentation</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-700 text-white">
        <div className="flex flex-row gap-3 px-[40px] pt-[20px] justify-between">
          <div className="">
            <p> Contact: https://themeforest.net/user/eva_pi</p>
            <p>(c) 2024 | Designed with Suparna - Premium Moodle Theme</p>
            <p>Data retention summary</p>
          </div>
          <div className="flex flex-row gap- mb-6">
            <FaFacebookF className="bg-blue-400 m-1 p-2 text-white rounded-full text-5xl border-2 border-white hover:border-blue-400" />
            <FaInstagram className="bg-pink-400 hover:border-pink-400 m-1 p-2 text-white rounded-full text-5xl border-2 border-white" />
            <FaXTwitter className="bg-green-400 hover:border-green-400 m-1 p-2 text-white rounded-full text-5xl border-2 border-white" />
            <TfiYoutube className="bg-red-500 hover:border-red-500 m-1 p-2 text-white rounded-full text-5xl border-2 border-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
