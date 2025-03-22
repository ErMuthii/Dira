import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <div className="flex items-center space-x-2">
                {/* Compass SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2v2m0 12v2m10-10h-2M4 12H2m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414-1.414M17.95 17.95l-1.414-1.414M6.05 6.05L4.636 7.464M12 8a4 4 0 100 8 4 4 0 000-8z"
                  />
                </svg>
                {/* Dira Text */}
                <span className="text-2xl font-bold text-black">Dira</span>
              </div>
            </Link>
            <div className="ml-12 space-x-6 hidden md:flex">
              <a
                href="#assessment"
                className="text-gray-700 hover:text-blue-700"
              >
                Career Assessment
              </a>
              <a href="#training" className="text-gray-700 hover:text-blue-700">
                Training Programs
              </a>
              <a
                href="#certifications"
                className="text-gray-700 hover:text-blue-700"
              >
                Certifications
              </a>
              <div className="relative group">
                <a
                  href="#partners"
                  className="text-gray-700 hover:text-blue-700 flex items-center"
                >
                  Corporate Partners
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
