import Image from "next/image";
import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

const QuizSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto  flex flex-col md:flex-row items-center justify-between  py-18 bg-white">
      {/* Left Section (Text Content) */}
      <div className="w-1/3 md:w-1/3 space-y-8 text-center md:text-left">
        <h1 className="md:text-7xl font-bold leading-tight text-gray-900">
          Make an interactive quiz for your meeting
        </h1>
        <p className="text-2xl text-gray-700">
          Run more engaging trainings and energize your participants with our
          live quiz maker.
        </p>
        <button className="px-6 py-3 text-white bg-green-700 rounded-md hover:bg-black">
          Create your quiz for free
        </button>
        <div className="mt-6">
          <h2 className="font-medium text-gray-900">
            Want to join a live quiz?
          </h2>
          <div className="relative mt-2 w-full md:w-1/2">
            {/* Input Field */}
            <input
              type="text"
              placeholder="Enter code here"
              className="w-96 border border-gray-300 rounded-md pl-10 pr-14 py-3 text-gray-900 focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
            {/* Hashtag Icon */}
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-700 text-lg font-semibold">
              #
            </span>
            {/* Button Inside Input */}
            <button className="absolute top-1/2 left-44 transform -translate-y-1/2 bg-green-700 text-white rounded-full p-2 hover:bg-green-700">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Right Section (Image and Button) */}
      <div className="w-2/3 md:w-2/3 ml-5 mt-8 md:mt-0 flex justify-center">
        <div className="relative">
          {/* Video Play Button */}
          <Image
            src="https://www.slido.com/static/slido-live-quizzes-hero.a15bccb1.696.jpg"
            alt="Interactive Quiz"
            height={400}
            width={600}
            className="shadow-lg"
          />
          <button className="absolute ml-2 bg-green-700 text-white text-xl font-bold rounded-full p-8 top-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg hover:p-10">
            <BiSolidRightArrow />
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
