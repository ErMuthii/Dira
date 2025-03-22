import React from "react";
import { Link } from 'react-router-dom';

const Navigation = () => {
  return <div >
    <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-black">Logo</div>
            <div className="ml-12 space-x-6 hidden md:flex">
              <a href="#assessment" className="text-gray-700 hover:text-blue-700">Career Assessment</a>
              <a href="#training" className="text-gray-700 hover:text-blue-700">Training Programs</a>
              <a href="#certifications" className="text-gray-700 hover:text-blue-700">Certifications</a>
              <div className="relative group">
                <a href="#partners" className="text-gray-700 hover:text-blue-700 flex items-center">
                  Corporate Partners
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-700 font-medium">Join</button>
            <Link to="/assessment">
            <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">Start</button>
            </Link>
          </div>
        </div>
      </nav>
  </div>;
};

export default Navigation;
