import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@heroui/react';
import {DotLottieReact} from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';

const AssessmentIntro = () => {

  return (
    <div className="min-h-screen bg-blue-50" style={{ backgroundColor: "#fef9ef" }}>
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Career Discovery Journey Begins
            </h1>
            <p className="text-lg text-gray-700">
              Welcome to Dira's personalized career assessment
            </p>
          </div>

          {/* Main content */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
            <div className="flex flex-col md:flex-row">
              {/* Left side - explanation text */}
              <div className="md:w-3/5 p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  What to Expect
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">About the Assessment</h3>
                    <p className="text-gray-700">
                      This assessment takes approximately 15-20 minutes to complete and consists of a series of questions designed to understand your unique skills, interests, and work preferences.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">How It Works</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Answer questions about your preferences, strengths, and interests</li>
                      <li>Our AI analyzes your responses in real-time</li>
                      <li>Receive personalized career recommendations</li>
                      <li>Explore detailed career paths and training opportunities</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Tips for Best Results</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Answer honestly - there are no right or wrong answers</li>
                      <li>Complete the assessment in one sitting if possible</li>
                      <li>Choose the option that feels most natural to you</li>
                      <li>Consider how you actually behave, not how you think you should behave</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Right side - illustration */}
              <div className="md:w-2/5 bg-blue-50">
                <DotLottieReact
                  src='https://lottie.host/5a8f1fc9-9bd6-4700-a5d8-56f8bea9f747/F8ZKJImLaF.lottie'
                  autoplay={true}
                  loop={true}
                  style={{width: "100%", height: "100%"}}
                />
              </div>
            </div>
          </div>
          
          {/* Testimonial or additional info */}
          <div className="bg-blue-100 rounded-lg p-6 mb-10">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-700 italic">
                  "The Dira assessment helped me discover career paths I hadn't considered before. The personalized insights matched my strengths perfectly!"
                </p>
                <p className="text-gray-900 font-medium mt-2">
                  - Sarah M., University of Nairobi
                </p>
              </div>
            </div>
          </div>
          
          {/* Start button */}
          <div className="text-center">
            <Link to="/loading">
            <Button 
              color="primary" 
              className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Begin Assessment
            </Button>
            </Link>
            <p className="text-gray-600 mt-4">
              This assessment takes approximately 15-20 minutes to complete
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentIntro;