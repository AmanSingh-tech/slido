import React from 'react';
import Image from 'next/image';

const HowItWorks = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      {/* Section Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-black mb-10">
        How it works
      </h2>

      {/* Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-green-700 w-full p-6 rounded-lg">
            <Image
              src="https://www.slido.com/static/slido-live-quizzes-how-it-works-create.485df404.svg" // Replace with the actual image path
              alt="Step 1"
              width={200}
              height={150}
              className="mx-auto"
            />
          </div>
          <h3 className="text-lg font-bold text-black mt-6">1. Create your quiz</h3>
          <p className="text-gray-600 text-sm mt-2">
            Prepare your quiz in Slido and have your participants join with a link or QR code.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-green-700 w-full p-6 rounded-lg">
            <Image
              src="https://www.slido.com/static/slido-live-quizzes-how-it-works-host.9342237c.svg" // Replace with the actual image path
              alt="Step 2"
              width={200}
              height={150}
              className="mx-auto"
            />
          </div>
          <h3 className="text-lg font-bold text-black mt-6">2. Host it live</h3>
          <p className="text-gray-600 text-sm mt-2">
            Activate the questions one by one and let people answer from their phones or laptops.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-green-700 w-full p-6 rounded-lg">
            <Image
              src="https://www.slido.com/static/slido-live-quizzes-how-it-works-display-leaderboard.532f8277.svg" // Replace with the actual image path
              alt="Step 3"
              width={200}
              height={150}
              className="mx-auto"
            />
          </div>
          <h3 className="text-lg font-bold text-black mt-6">3. Display the leaderboard</h3>
          <p className="text-gray-600 text-sm mt-2">
            Give your quiz a big finish by announcing top players, their scores, and the hardest question.
          </p>
        </div>
      </div>

      {/* Footer Link */}
      <div className="text-center mt-10">
        <a
          href="#"
          className="text-green-600 hover:text-green-700 font-medium text-sm"
        >
          See detailed guide
        </a>
      </div>
    </div>
  );
};

export default HowItWorks;
