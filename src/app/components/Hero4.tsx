import React from 'react';
import Image from 'next/image';

const FavoriteTools = () => {
  return (
    <div className="bg-white py-16 px-6">
      {/* Section Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-black mb-10">
        Create a quiz directly in your favorite tool
      </h2>

      {/* Tools Section */}
      <div className="flex justify-center items-center gap-10 flex-wrap max-w-5xl mx-auto">
        {/* Tool: Webex */}
        <div className="flex flex-col items-center">
          <Image
            src="https://www.slido.com/static/slido-integrations-ico-webex.c17b0360.svg" // Replace with actual Webex logo path
            alt="Webex"
            width={60}
            height={60}
          />
          <p className="mt-4 text-black font-medium text-sm">Webex</p>
        </div>

        {/* Tool: PowerPoint */}
        <div className="flex flex-col items-center">
          <Image
            src="https://www.slido.com/static/slido-integrations-ico-powerpoint.c6a9bfb7.svg" // Replace with actual PowerPoint logo path
            alt="PowerPoint"
            width={60}
            height={60}
          />
          <p className="mt-4 text-black font-medium text-sm">PowerPoint</p>
        </div>

        {/* Tool: Teams */}
        <div className="flex flex-col items-center">
          <Image
            src="https://www.slido.com/static/slido-integrations-ico-ms-teams.0278afd9.svg" // Replace with actual Teams logo path
            alt="Teams"
            width={60}
            height={60}
          />
          <p className="mt-4 text-black font-medium text-sm">Teams</p>
        </div>

        {/* Tool: Google Slides */}
        <div className="flex flex-col items-center">
          <Image
            src="https://www.slido.com/static/slido-integrations-ico-google-slides.5369da74.svg" // Replace with actual Google Slides logo path
            alt="Google Slides"
            width={60}
            height={60}
          />
          <p className="mt-4 text-black font-medium text-sm">Google Slides</p>
        </div>

        {/* Tool: Zoom */}
        <div className="flex flex-col items-center">
          <Image
            src="https://www.slido.com/static/slido-integrations-ico-zoom.b91a37a1.svg" // Replace with actual Zoom logo path
            alt="Zoom"
            width={60}
            height={60}
          />
          <p className="mt-4 text-black font-medium text-sm">Zoom</p>
        </div>
      </div>
    </div>
  );
};

export default FavoriteTools;
