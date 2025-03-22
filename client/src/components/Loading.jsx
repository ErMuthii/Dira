import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loading = () => {
  const navigate = useNavigate();
  const [loadingText, setLoadingText] = useState(
    "Preparing your assessment..."
  );
  const [progress, setProgress] = useState(0);

  // Array of loading messages to cycle through
  const loadingMessages = [
    "Preparing your assessment...",
    "Analyzing your profile...",
    "Customizing questions...",
    "Building your personalized journey...",
    "Almost ready...",
  ];

  useEffect(() => {
    // Cycle through loading messages
    const messageInterval = setInterval(() => {
      setLoadingText((prevText) => {
        const currentIndex = loadingMessages.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % loadingMessages.length;
        return loadingMessages[nextIndex];
      });
    }, 1500);

    // Update progress bar
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 2;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 80);

    // Navigate to the assessment page after 5 seconds
    const timer = setTimeout(() => {
      navigate("/assessment");
    }, 5000);

    // Clean up
    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-blue-50"
      style={{ backgroundColor: "#fef9ef" }}
    >
      <div className="max-w-md w-full px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dira</h1>
          <p className="text-lg text-gray-700">Career Discovery Platform</p>
        </div>

        {/* Animation container */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-6">
          <div className="w-64 h-64 mx-auto mb-6">
            <DotLottieReact
              src="https://lottie.host/3f78211f-f6b3-4899-98d0-0a7b1fd10c0d/qGMdgQdI0o.lottie"
              autoplay={true}
              loop={true}
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {loadingText}
            </h2>
            <p className="text-gray-600">This will only take a moment</p>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="text-center text-gray-600 text-sm">
          <p>© 2025 Dira. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
