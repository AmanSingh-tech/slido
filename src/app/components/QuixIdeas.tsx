import React from 'react';
import Image from 'next/image';

const QuizIdeas = () => {
    return (
      <div className="flex items-center justify-center bg-[#fcf8ed] rounded-lg shadow-md p-6 mx-auto max-w-4xl mt-10">
        <Image
          src="https://www.slido.com/static/slido-live-quizzes-blog-cover.366df74f.375.jpg" // Replace with actual image path in your public folder
          alt="Excited person"
          height={128}
          width={128}
          className="w-32 h-32 object-cover rounded-lg mr-6"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Looking for more online quiz ideas?
          </h2>
          <p className="text-gray-700">
            Get inspired by these{" "}
            <a
              href="#"
              className="text-green-600 hover:underline font-semibold"
            >
              7 quiz templates
            </a>{" "}
            for your next virtual or hybrid meeting.
          </p>
        </div>
      </div>
    );
  };
  
  export default QuizIdeas;