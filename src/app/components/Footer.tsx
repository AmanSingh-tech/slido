import React from 'react';
import Image from 'next/image'; // Next.js Image component for optimized images

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-black py-10 border-t">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <Image
            src="https://www.slido.com/static/slido-logo.ee9729d1.svg" // Replace with your logo path
            alt="Slido Logo"
            width={150}
            height={50}
            className="h-auto w-auto"
          />
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Product Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-600">Product Tour</a></li>
              <li><a href="#" className="hover:text-green-600">Q&A</a></li>
              <li><a href="#" className="hover:text-green-600">Polls</a></li>
              <li><a href="#" className="hover:text-green-600">Quizzes</a></li>
              <li><a href="#" className="hover:text-green-600">Analytics</a></li>
              <li><a href="#" className="hover:text-green-600">Integrations</a></li>
            </ul>
          </div>

          {/* Integrations Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Integrations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-600">PowerPoint</a></li>
              <li><a href="#" className="hover:text-green-600">Google Slides</a></li>
              <li><a href="#" className="hover:text-green-600">Webex</a></li>
              <li><a href="#" className="hover:text-green-600">Zoom</a></li>
              <li><a href="#" className="hover:text-green-600">Microsoft Teams</a></li>
              <li><a href="#" className="hover:text-green-600">Live Video</a></li>
              <li><a href="#" className="hover:text-green-600">Embed Slido</a></li>
            </ul>
          </div>

          {/* Pricing Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pricing</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-600">One-time Plans</a></li>
              <li><a href="#" className="hover:text-green-600">Annual Plans</a></li>
              <li><a href="#" className="hover:text-green-600">Education Plans</a></li>
              <li><a href="#" className="hover:text-green-600">Enterprise</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-600">Blog</a></li>
              <li><a href="#" className="hover:text-green-600">Use Cases</a></li>
              <li><a href="#" className="hover:text-green-600">Webinars</a></li>
              <li><a href="#" className="hover:text-green-600">Videos</a></li>
              <li><a href="#" className="hover:text-green-600">Help Center</a></li>
              <li><a href="#" className="hover:text-green-600">Better Meetings Guide</a></li>
              <li><a href="#" className="hover:text-green-600">Trust Report 2024</a></li>
              <li><a href="#" className="hover:text-green-600">Slido ROI Report</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm">
              © 2025 Cisco Systems, Inc. All rights reserved. Slido is now part of Webex.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-black hover:text-green-600">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-black hover:text-green-600">
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-black hover:text-green-600">
                <span className="sr-only">LinkedIn</span>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-black hover:text-green-600">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
