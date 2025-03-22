import { Button } from "@heroui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Assessment = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: "q1",
      category: "Work Environment",
      question:
        "I prefer working in a structured environment with clear guidelines.",
      options: [
        { value: 1, label: "Strongly Disagree" },
        { value: 2, label: "Disagree" },
        { value: 3, label: "Neutral" },
        { value: 4, label: "Agree" },
        { value: 5, label: "Strongly Agree" },
      ],
    },
    {
      id: "q2",
      category: "Problem Solving",
      question:
        "I enjoy solving complex problems that require creative thinking.",
      options: [
        { value: 1, label: "Strongly Disagree" },
        { value: 2, label: "Disagree" },
        { value: 3, label: "Neutral" },
        { value: 4, label: "Agree" },
        { value: 5, label: "Strongly Agree" },
      ],
    },
    {
      id: "q3",
      category: "Social Interaction",
      question:
        "I prefer jobs that involve frequent interaction with other people.",
      options: [
        { value: 1, label: "Strongly Disagree" },
        { value: 2, label: "Disagree" },
        { value: 3, label: "Neutral" },
        { value: 4, label: "Agree" },
        { value: 5, label: "Strongly Agree" },
      ],
    },
    {
      id: "q4",
      category: "Leadership",
      question: "I enjoy taking charge and directing the activities of others.",
      options: [
        { value: 1, label: "Strongly Disagree" },
        { value: 2, label: "Disagree" },
        { value: 3, label: "Neutral" },
        { value: 4, label: "Agree" },
        { value: 5, label: "Strongly Agree" },
      ],
    },
    {
      id: "q5",
      category: "Detail Orientation",
      question:
        "I pay close attention to details and notice things that others might miss.",
      options: [
        { value: 1, label: "Strongly Disagree" },
        { value: 2, label: "Disagree" },
        { value: 3, label: "Neutral" },
        { value: 4, label: "Agree" },
        { value: 5, label: "Strongly Agree" },
      ],
    },
  ];

  const handleAnswerChange = (questionId, value) => {
    setAnswers({
      ...answers,
      [questionId]: value,
    });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit all answers and navigate to results
      console.log("All answers:", answers);
      navigate("/results");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen  py-12" style={{ backgroundColor: "#fef9ef" }}>
      {/* Tips */}
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg pb-8 p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            Tips for Accurate Results
          </h3>
          <ul className="text-blue-700 space-y-2">
            <li>
              • Answer based on what feels natural to you, not what you think is
              expected
            </li>
            <li>
              • Consider your preferences, not your current skills or experience
            </li>
            <li>
              • Don't overthink - your first reaction is often the most accurate
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Career Assessment
            </h1>
            <p className="text-gray-600 mt-2">
              Answer honestly to get the most accurate career recommendations.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>
                Question {currentStep + 1} of {questions.length}
              </span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <div className="text-sm font-medium text-blue-600 mb-1">
              {currentQuestion.category}
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {currentQuestion.question}
            </h2>

            <div className="space-y-4">
              {currentQuestion.options.map((option) => (
                <div
                  key={option.value}
                  onClick={() =>
                    handleAnswerChange(currentQuestion.id, option.value)
                  }
                  className={`flex items-center p-4 border rounded-lg cursor-pointer transition
                    ${
                      answers[currentQuestion.id] === option.value
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                >
                  <div className="flex items-center h-5">
                    <input
                      id={`option-${option.value}`}
                      name={`question-${currentQuestion.id}`}
                      type="radio"
                      value={option.value}
                      checked={answers[currentQuestion.id] === option.value}
                      onChange={() =>
                        handleAnswerChange(currentQuestion.id, option.value)
                      }
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                  </div>
                  <label
                    htmlFor={`option-${option.value}`}
                    className="ml-3 block text-gray-700 w-full cursor-pointer"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Buttons */}
          <div className="flex flex-col items-center">
            <div className="flex justify-between w-full">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className={`px-6 py-3 rounded-lg font-medium ${
                  currentStep === 0
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={!answers[currentQuestion.id]}
                className={`px-6 py-3 rounded-lg font-medium ${
                  !answers[currentQuestion.id]
                    ? "bg-blue-400 text-white cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {currentStep === questions.length - 1 ? "Submit" : "Next"}
              </button>
            </div>

            {/* Conditionally Render View Results Button */}
            {currentStep === questions.length - 1 && (
              <div className="mt-4">
                <Link to="/results">
                  <Button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                    View Results
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
