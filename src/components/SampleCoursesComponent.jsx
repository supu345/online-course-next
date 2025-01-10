import Image from "next/image";
import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { TbMessage2 } from "react-icons/tb";
const SampleCoursesComponent = () => {
  return (
    <div className="container pt-7">
      <div className="flex flex-row gap-3 items-center">
        <FaAngleDown className="bg-slate-200 rounded-full p-1 text-3xl" />
        <p className="text-xl font-normal">Introduction</p>
      </div>
      <div className="border mt-4  mb-6"></div>

      <div
        className=" relativew-[1150px] h-[200px] bg-slate-400 bg-cover bg-center mb-6 ml-5 px-5"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1206101/pexels-photo-1206101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div className="absolute mt-[120px] ">
          <p className="text-white">Society and Environment</p>
          <p className="bg-blue-400 text-white p-2 px-5 w-[400px] text-2xl">
            Effective Memory Techniques
          </p>
        </div>
      </div>
      <div>
        <p className="text-3xl px-3">
          Online - Professional Moodle Test - Demo Course
        </p>
        <p className="text-xl px-3 pt-2">
          This demo course uses the "Topics" course format.
        </p>
        <div className="relative flex justify-center items-center h-[400px] w-[600px] ml-[300px]">
          <Image
            src="https://images.pexels.com/photos/3755511/pexels-photo-3755511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width={500}
            height={500}
            alt=""
            className="h-auto w-auto"
          />
          <FaRegCirclePlay
            className="absolute text-white text-6xl hover:bg-slate-300 hover:rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
        {/* attchedments fils*/}
        <div>
          <div className="flex flex-row gap-2 items-center mt-5 mb-5">
            <TbMessage2 className="text-4xl bg-red-500 p-1 rounded-md text-white" />
            <p>Announcements</p>
          </div>
          <div className="border-2 "></div>{" "}
          <div className="flex flex-row gap-3 items-center mt-5">
            <FaAngleDown className="bg-slate-200 rounded-full p-1 text-3xl" />
            <p className="text-xl font-normal">Introduction</p>
          </div>
          <div className="flex flex-row gap-4 items-center mt-5 mb-5">
            <TbMessage2 className="text-4xl bg-red-500 p-1 m-2 rounded-md text-white" />
            <div>
              <p>Announcements</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium labore possimus eaque placeat quos corporis aut
                fugit, libero dolorem sit natus dignissimos facere hic ea,
                ratione nam! Nobis dolores natus animi earum fugit qui deleniti,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleCoursesComponent;
