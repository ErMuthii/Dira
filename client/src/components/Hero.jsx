import React from 'react';
import { Link } from 'react-router-dom';
import { Button,Image } from '@heroui/react';
import {DotLottieReact} from '@lottiefiles/dotlottie-react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-blue-50" style={{ backgroundColor: "#fef9ef" }}>
      {/* Navigation */}
      

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="bg-blue-100 rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left column - Text content */}
            <div className="md:w-1/2 p-12 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Fast track Your Future with Dira
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                At Dira, we empower students to uncover their strengths and connect with high-growth careers. Our mission is to bridge the education-employment gap, making career discovery seamless and effective.
              </p>
              <div className="flex space-x-4">
                
                <Button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
                  Get Started
                </Button>
                <Button className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition">
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Right column - Image */}
            <div className="md:w-1/2">
              <DotLottieReact 
                src='https://lottie.host/92486076-7b64-4cfd-b81c-52fcb7204c9a/YENAinBtyt.lottie'
               
                autoplay={true} 
                loop={true} 
                style={{width: "100%", height: "100%"}}
              />
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white" >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How Dira Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Take the Assessment</h3>
              <p className="text-gray-700">Complete our comprehensive career assessment designed to identify your unique strengths, interests, and work preferences.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Get Personalized Insights</h3>
              <p className="text-gray-700">Our AI-powered platform analyzes your responses and generates tailored career recommendations that match your profile.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Access Training & Opportunities</h3>
              <p className="text-gray-700">Explore personalized learning paths and connect with employers looking for your specific talents and potential.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/assessment">
              <Button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                Start Your Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Secondary Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="mb-4 text-gray-600">Discover</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Unlock Your Future with AI Career Insights
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our AI-driven platform empowers students to explore their strengths and discover high-growth career paths. Experience personalized roadmaps and training designed to bridge the gap between education and employment.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div className="flex items-start">
                <div className="p-3 bg-white rounded-lg shadow-md mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Personalized Guidance</h3>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-white rounded-lg shadow-md mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Career Training</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <img 
              // src="client/src/assets/paths.jpeg" 
              alt="Students exploring career options" 
              className="w-full h-full object-cover rounded-lg"
            />
          
          </div>
          
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-xl font-bold">Dira</div>
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