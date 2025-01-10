"use client";

import React, { useState } from "react";
import { RiSettings3Line } from "react-icons/ri";
import { BsLayoutWtf } from "react-icons/bs";
import { IoPeople } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Image from "next/image";
import { TbCertificate } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";

const Features = () => {
  // Set the initial state to 0 to open the first FAQ
  const [openFAQ, setOpenFAQ] = useState(0); // Default to first FAQ open

  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null); // Close if the same FAQ is clicked
    } else {
      setOpenFAQ(index); // Open the clicked FAQ
    }
  };

  const faqData = [
    {
      question: "What is the Sucharu subscription model?",
      answer:
        "Pellentesque nec dictum magna, sit amet rutrum tortor. Nullam turpis ante, dictum imperdiet massa non, fermentum fringilla urna. Curabitur viverra consequat condimentum. Nulla sollicitudin eros in congue ultricies.",
    },
    {
      question: "What is the difference between plans?",
      answer:
        "Nunc luctus, ipsum nec euismod ornare, velit diam mattis mauris, sit amet euismod orci mi et lorem. Donec eu fringilla risus, ut auctor dolor. Maecenas facilisis mattis tortor a eleifend.",
    },
    {
      question: "How can I maximize the benefits of my subscription?",
      answer:
        "Duis suscipit ligula nec sollicitudin cursus. Proin eros mi, rutrum vitae luctus sed, sollicitudin nec libero. Phasellus id diam accumsan, faucibus risus sed, vestibulum purus. Fusce nec nunc malesuada, vulputate enim eu, ultrices diam. Quisque dictum fringilla iaculis. Mauris eleifend, neque id sollicitudin tempus, ipsum nunc elementum purus, sit amet interdum nunc turpis non lorem.",
    },
  ];

  return (
    <div className="container px-[60px] text-center py-[50px]">
      <p className="text-2xl">Our Features</p>
      <div className="h-[2px] w-[80px] mx-auto mt-5 !bg-blue-600"></div>
      <p className="w-4/5 text-center mx-auto pt-6 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laborum
        dolorum iure <br /> sed illum. Asperiores voluptatem id sint voluptas
        perferendis.
      </p>
      {/* Features */}
      <div className="flex flex-row justify-between gap-5 pt-[60px]">
        <div className="w-1/4">
          <div className="text-left">
            <RiSettings3Line
              className="text-5xl mb-4 text-blue-600 transition-transform duration-300 ease-in-out
            hover:-translate-y-2"
            />
            <p className="font-semibold text-xl">Powerful Admin Settings</p>
            <p>
              Quick and easy customization: Control style and design of your
              Moodle site with Lambda.
            </p>
          </div>
          <p className="text-blue-600 cursor-pointer pt-3">More...</p>
        </div>
        <div className="w-1/4">
          <div className="text-left">
            <BsLayoutWtf
              className="text-5xl mb-4 text-blue-600 transition-transform duration-300 ease-in-out
            hover:-translate-y-2"
            />
            <p className="font-semibold text-xl">Flexible Layout</p>
            <p>
              Quick and easy customization: Control style and design of your
              Moodle site with Lambda.
            </p>
          </div>
          <p className="text-blue-600 cursor-pointer pt-3">More...</p>
        </div>
        <div className="w-1/4">
          <div className="text-left">
            <IoPeople
              className="text-5xl mb-4 text-blue-600 transition-transform duration-300 ease-in-out
            hover:-translate-y-2"
            />
            <p className="font-semibold text-xl">Multilanguage</p>
            <p>
              Quick and easy customization: Control style and design of your
              Moodle site with Lambda.
            </p>
          </div>
          <p className="text-blue-600 cursor-pointer pt-3">More...</p>
        </div>
        <div className="w-1/4">
          <div className="text-left">
            <IoCheckmarkCircleOutline
              className="text-5xl mb-4 text-blue-600 transition-transform duration-300 ease-in-out
            hover:-translate-y-2"
            />
            <p className="font-semibold text-xl">Built-in Components</p>
            <p>
              Quick and easy customization: Control style and design of your
              Moodle site with Lambda.
            </p>
          </div>
          <p className="text-blue-600 cursor-pointer pt-3">More...</p>
        </div>
      </div>

      {/* Why choose us */}
      <div>
        <div className="flex flex-row gap-6 pt-[80px]">
          <div className="w-1/2">
            <p className="!text-blue-700">Why choose us?</p>
            <p className="text-3xl">
              A few reasons why our valued <br />
              customers choose Lambda for <br />
              Moodle.
            </p>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-300 pb-4">
                  <div
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <h3
                      className={`text-xl font-medium text-left ${
                        openFAQ === index ? "text-blue-700" : "text-black"
                      }`}
                    >
                      {faq.question}
                    </h3>{" "}
                    {/* Added text-left */}
                    {openFAQ === index ? (
                      <IoIosArrowUp className="text-2xl text-blue-700" />
                    ) : (
                      <IoIosArrowDown className="text-2xl" />
                    )}
                  </div>
                  {openFAQ === index && (
                    <p className="mt-4 text-gray-600 text-left">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2">
            <div className="w-[550px] h-[500px]">
              <Image
                src="https://images.pexels.com/photos/5257759/pexels-photo-5257759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                width={550}
                height={700}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
        {/* three icons */}
        <div className="flex flex-row gap-7 ">
          <div className="w-1/3 bg-blue-200 flex flex-row gap-2 py-7 px-2">
            <TbCertificate className="text-6xl text-blue-900" />
            <div className="text-start">
              <p className="font-bold mb-2">Plugins Ready</p>
              <p>
                Compatible with plugins from the <br /> Moodle plugins
                directory.
              </p>
            </div>
          </div>

          <div className="w-1/3 bg-blue-200 flex flex-row gap-2 py-7 px-2">
            <FaRegStar className="text-6xl text-blue-900" />
            <div className="text-start">
              <p className="font-bold mb-2">Best Rated</p>
              <p>
                Compatible with plugins from the <br /> Moodle plugins
                directory.
              </p>
            </div>
          </div>
          <div className="w-1/3 bg-blue-200 flex flex-row gap-2 py-7 px-2">
            <MdOutlineRocketLaunch className="text-6xl text-blue-900" />
            <div className="text-start">
              <p className="font-bold mb-2">Lifetime Updates</p>
              <p>
                Compatible with plugins from the <br /> Moodle plugins
                directory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
