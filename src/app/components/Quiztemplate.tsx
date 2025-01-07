import React from 'react';
import Image from 'next/image';

const QuizTemplates = () => {
  const templates = [
    {
      title: 'Business numbers quiz',
      description:
        'Turn your business updates into an interactive quiz that will keep everyone engaged.',
      imgSrc: 'https://www.slido.com/static/slido-live-quizzes-templates-01-business-numbers-quiz.d82c3ae4.1184.png', // Replace with actual image
      alt: 'Business Quiz',
    },
    {
      title: 'Team trivia quiz',
      description:
        'Get to know your teammates better by guessing fun facts about each other.',
      imgSrc: 'https://www.slido.com/static/slido-live-quizzes-templates-02-team-trivia-quiz.eed9528d.1184.png', // Replace with actual image
      alt: 'Team Trivia Quiz',
    },
    {
      title: 'Pop culture quiz',
      description:
        'Test all the movie buffs and music lovers on their knowledge of popular culture.',
      imgSrc: 'https://www.slido.com/static/slido-live-quizzes-templates-03-pop-culture-quiz.e81d281b.1184.png', // Replace with actual image
      alt: 'Pop Culture Quiz',
    },
  ];

  return (
    <div className="bg-white py-16 px-6">
      {/* Section Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-black mb-10">
        Get started with our free quiz templates
      </h2>

      {/* Templates Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {templates.map((template, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-40 mb-4">
              <Image
                src={template.imgSrc}
                alt={template.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-black mb-2 text-center">
              {template.title}
            </h3>

            {/* Description */}
            <p className="text-center text-gray-600 mb-4">
              {template.description}
            </p>

            {/* Use Template Link */}
            <a
              href="#"
              className="text-green-600 font-medium underline hover:text-green-800"
            >
              Use template
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizTemplates;
