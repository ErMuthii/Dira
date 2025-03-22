import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@heroui/react';
import {DotLottieReact} from '@lottiefiles/dotlottie-react';
cc

const Hero = () => {
  return (
    <div className="min-h-screen bg-blue-50" style={{ backgroundColor: "#fef9ef" }}>
 
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
            <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">Start</button>
          </div>
        </div>
      </nav>

 
      <footer className="bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-xl font-bold">Risk Hackers</div>
              <div className="text-sm text-gray-500 mt-2">© 2025 Hack The Globe Project</div>
            </div>
            <div className="flex flex-wrap justify-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 mb-4">About Us</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 mb-4">Careers</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 mb-4">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 mb-4">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 mb-4">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;