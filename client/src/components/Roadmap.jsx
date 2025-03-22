import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

const Roadmap = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('traditional');
  const [currentStep, setCurrentStep] = useState(1);
  
  // Use the pathname to determine which tab should be active
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab) {
      setActiveTab(tab);
    }
  }, [location]);

  const roadmaps = {
    traditional: {
      title: "Accountant Career Path",
      description: "A structured pathway to becoming a qualified accountant in Africa.",
      steps: [
        {
          id: 1,
          title: "Education Foundation",
          duration: "3-4 years",
          description: "Obtain a Bachelor's degree in Accounting, Finance, or Business Administration from an accredited institution.",
          keyPoints: [
            "Focus on core accounting principles, financial reporting, and business law",
            "Participate in internships during academic breaks",
            "Join student accounting associations for networking"
          ]
        },
        {
          id: 2,
          title: "Entry-Level Certification",
          duration: "1-2 years",
          description: "Begin the Certified Public Accountant (CPA) program through KASNEB (Kenya) or ICAN (Nigeria).",
          keyPoints: [
            "Complete CPA Section 1 and 2 or equivalent initial levels",
            "Gain hands-on experience through entry-level accounting positions",
            "Develop proficiency in accounting software and spreadsheets"
          ]
        },
        {
          id: 3,
          title: "Professional Experience",
          duration: "2-3 years",
          description: "Work in accounting roles while continuing professional certification.",
          keyPoints: [
            "Complete CPA Section 3 and advanced levels",
            "Gain experience in financial reporting, auditing, and taxation",
            "Build expertise in industry-specific accounting practices"
          ]
        },
        {
          id: 4,
          title: "Advanced Certification",
          duration: "1-2 years",
          description: "Pursue specialized certifications based on career goals.",
          keyPoints: [
            "Options include Chartered Accountant (CA), Certified Management Accountant (CMA), or Certified Internal Auditor (CIA)",
            "Focus on developing leadership and management skills",
            "Network with professionals in your desired specialty"
          ]
        },
        {
          id: 5,
          title: "Career Advancement",
          duration: "Ongoing",
          description: "Progress to senior accounting roles and continue professional development.",
          keyPoints: [
            "Consider MBA or Master's in Accounting for executive positions",
            "Maintain certification through continuing education",
            "Explore leadership roles such as Finance Manager, Controller, or CFO"
          ]
        }
      ]
    },
    nontraditional: {
      title: "Environmental Finance Specialist Path",
      description: "An emerging career path combining environmental expertise with financial knowledge.",
      steps: [
        {
          id: 1,
          title: "Interdisciplinary Education",
          duration: "3-4 years",
          description: "Obtain a Bachelor's degree in Finance, Environmental Science, Economics, or a related field.",
          keyPoints: [
            "Take courses in both environmental studies and finance/economics",
            "Develop data analysis and research skills",
            "Participate in sustainability projects or climate initiatives"
          ]
        },
        {
          id: 2,
          title: "Foundation Knowledge",
          duration: "1-2 years",
          description: "Gain experience in either environmental or financial sectors.",
          keyPoints: [
            "Consider entry-level positions in sustainability departments, environmental NGOs, or financial institutions",
            "Develop understanding of ESG (Environmental, Social, Governance) frameworks",
            "Learn about climate risk assessment methodologies"
          ]
        },
        {
          id: 3,
          title: "Specialized Training",
          duration: "1-2 years",
          description: "Pursue initial certifications and consider advanced education.",
          keyPoints: [
            "Obtain a Green Finance Certificate from Climate Bonds Initiative",
            "Consider pursuing a Master's degree in Environmental Finance, Sustainable Development, or Climate Finance",
            "Develop expertise in green bonds, carbon markets, or sustainable investing"
          ]
        },
        {
          id: 4,
          title: "Advanced Certification",
          duration: "1-2 years",
          description: "Obtain professional credentials specific to environmental finance.",
          keyPoints: [
            "Pursue Certified Environmental, Social, and Governance Analyst (CESGA) certification",
            "Consider Climate Risk Certificate from GARP",
            "Develop project management skills for sustainability initiatives"
          ]
        },
        {
          id: 5,
          title: "Career Specialization",
          duration: "Ongoing",
          description: "Advance to specialized roles in environmental finance.",
          keyPoints: [
            "Potential paths include ESG Investment Analyst, Climate Finance Advisor, Sustainable Finance Manager, or Carbon Markets Specialist",
            "Stay current with evolving regulations and market trends",
            "Engage with professional networks like the Sustainable Finance Forum Africa"
          ]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: "#fef9ef" }}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Career Training Roadmap</h1>
            <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
              Follow these structured pathways to achieve your career goals in finance. 
              Each roadmap provides a step-by-step guide to acquiring the education, certifications, and experience needed.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-blue-50 rounded-lg">
            <div className="mb-4 md:mb-0 md:mr-8">
              <h2 className="text-xl font-semibold text-gray-800">Personalized Roadmaps</h2>
              <p className="text-gray-600 mt-1">
                These roadmaps are customized based on your assessment results.
              </p>
            </div>
            <Link 
              to="/results" 
              className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Back to Results
            </Link>
          </div>
        </div>

        {/* Roadmap Tabs */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('traditional')}
              className={`flex-1 py-4 px-6 text-center font-medium text-lg ${
                activeTab === 'traditional'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Traditional: Accountant
            </button>
            <button
              onClick={() => setActiveTab('nontraditional')}
              className={`flex-1 py-4 px-6 text-center font-medium text-lg ${
                activeTab === 'nontraditional'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Non-Traditional: Environmental Finance
            </button>
          </div>

          {/* Roadmap Content */}
          <div className="p-6">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900">{roadmaps[activeTab].title}</h2>
              <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
                {roadmaps[activeTab].description}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="relative mb-12">
              <div className="h-1 bg-gray-200 w-full absolute top-4"></div>
              <div className="flex justify-between relative">
                {roadmaps[activeTab].steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStep(step.id)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium z-10 transition-all
                      ${currentStep >= step.id 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white border-2 border-gray-300 text-gray-500'}`}
                  >
                    {step.id}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-xs font-medium text-gray-500 mt-2">
                {roadmaps[activeTab].steps.map((step) => (
                  <span key={step.id} className="w-10 text-center">{step.duration}</span>
                ))}
              </div>
            </div>

            {/* Current Step Details */}
            {roadmaps[activeTab].steps.map((step) => (
              <div 
                key={step.id}
                className={`transition-all duration-300 ${currentStep === step.id ? 'opacity-100' : 'hidden opacity-0'}`}
              >
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Step {step.id}: {step.title}</h3>
                  <p className="text-gray-700 mb-4">{step.description}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-2">Key Activities:</h4>
                  <ul className="space-y-2">
                    {step.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
                className={`px-4 py-2 rounded-lg transition ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}
              >
                Previous Step
              </button>
              <button
                onClick={() => setCurrentStep(Math.min(roadmaps[activeTab].steps.length, currentStep + 1))}
                disabled={currentStep === roadmaps[activeTab].steps.length}
                className={`px-4 py-2 rounded-lg transition ${
                  currentStep === roadmaps[activeTab].steps.length
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Next Step
              </button>
            </div>
          </div>

          {/* Certification Table */}
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Certifications</h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Certification</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Level</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Issuing Body</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {activeTab === 'traditional' ? (
                    <>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-sm font-medium text-gray-800">Certified Public Accountant (CPA)</td>
                        <td className="py-3 px-4 text-sm text-gray-600">Intermediate</td>
                        <td className="py-3 px-4 text-sm text-gray-600">KASNEB (Kenya), ICAN (Nigeria)</td>
                        <td className="py-3 px-4 text-sm text-gray-600">Fundamental certification for accounting professionals.</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-sm font-medium text-gray-800">Association of Chartered Certified Accountants (ACCA)</td>
                        <td className="py-3 px-4 text-sm text-gray-600">Intermediate</td>
                        <td className="py-3 px-4 text-sm text-gray-600">ACCA Global</td>
                        <td className="py-3 px-4 text-sm text-gray-600">International qualification covering financial reporting, auditing, and taxation.</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-sm font-medium text-gray-800">Chartered Accountant (CA)</td>
                        <td className="py-3 px-4 text-sm text-gray-600">Advanced</td>
                        <td className="py-3 px-4 text-sm text-gray-600">ICPAK (Kenya), ICAN (Nigeria)</td>
                        <td className="py-3 px-4 text-sm text-gray-600">Recognized accounting credential focusing on auditing, taxation, and financial management.</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-sm font-medium text-gray-800">Certified Management Accountant (CMA)</td>
                        <td className="py-3 px-4 text-sm text-gray-600">Advanced</td>
                        <td className="py-3 px-4 text-sm text-gray-600">Institute of Management Accountants (IMA)</td>
                        <td className="py-3 px-4 text-sm text-gray-600">Specialization in management accounting and strategic planning.</td>
                      </tr>
                    </>
                  ) : (
                    <>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-sm font-medium text-gray-800">Green Finance Certificate</td>
                        <td className="py-3 px-4 text-sm text-gray-600">Intermediate</td>
                        <td className="py-3 px-4 text-sm text-gray-600">Climate Bonds Initiative</td>
                        <td className="py-3 px-4 text-sm text-gray-600">Focuses on sustainable finance principles and green bond issuance.</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-sm font-medium text-gray-800">Certified Environmental, Social, and Governance Analyst (CESGA)</td>
                        <td className="py-3 px-4 text-sm text-gray-600">Advanced</td>
                        <td className="py-3 px-4 text-sm text-gray-600">EFFAS</td>
                        <td className="py-3 px-4 text-sm text-gray-600">Specializes in ESG analysis and sustainable investment strategies.</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-sm font-medium text-gray-800">Climate Risk Certificate</td>
                        <td className="py-3 px-4 text-sm text-gray-600">Advanced</td>
                        <td className="py-3 px-4 text-sm text-gray-600">Global Association of Risk Professionals (GARP)</td>
                        <td className="py-3 px-4 text-sm text-gray-600">Comprehensive training in assessing and managing climate-related financial risks.</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-sm font-medium text-gray-800">Environmental Finance Diploma</td>
                        <td className="py-3 px-4 text-sm text-gray-600">Intermediate</td>
                        <td className="py-3 px-4 text-sm text-gray-600">Various Institutions</td>
                        <td className="py-3 px-4 text-sm text-gray-600">Covers environmental economics, carbon finance, and green project financing.</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 text-center">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Request Detailed Study Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;