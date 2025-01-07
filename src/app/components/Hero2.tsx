import React from "react";

const QuizPage = () => {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <div className="text-center py-16 px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Test people&apos;s knowledge with <br /> an interactive online quiz
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Want to spice up your presentation or check people&apos;s learning in an
          engaging way? Create a multiple choice quiz and bring out the
          competitive spirit at your meetings, workshops, or informal
          gatherings.
          <br />
          Run a live quiz as a separate activity or throughout your presentation
          and enjoy some fun guessing time.
        </p>
      </div>

      {/* Video Section */}
      <div className="flex flex-col items-center justify-center px-6">
        <div className="relative w-full max-w-4xl aspect-video">
          <video
            controls
            className="rounded-lg w-full h-full object-cover shadow-md"
          >
            <source
              src="https://www.slido.com/_next/static/media/37c0b4c10dd01d06.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-16">
        <button className="bg-green-600 text-white text-lg px-6 py-3 rounded-md shadow-lg hover:bg-green-700">
          Create your quiz for free
        </button>
        <p className="text-sm text-gray-500 mt-4">
          17,536 quizzes played in the last month
        </p>
      </div>
    </div>
  );
};

export default QuizPage;
