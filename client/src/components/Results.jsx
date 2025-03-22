

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Results = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [activeTab, setActiveTab] = useState('traditional');
  
  // Sample career paths based on assessment results
  const careerPaths = {
    traditional: [
      {
        id: 1,
        title: 'Investment Banking Analyst',
        description: 'Analyze financial data, create financial models, and assist in M&A transactions and securities offerings.',
        skills: ['Financial Modeling', 'Valuation', 'Due Diligence', 'Excel'],
        salary: 'Ksh85,000 - Ksh120,000',
        outlook: 'Moderate Growth',
        details: 'Investment banking analysts work directly with clients on high-profile financial transactions. The role involves long hours but offers exceptional experience and networking opportunities. Advancement typically leads to associate roles within 2-3 years.'
      },
      {
        id: 2,
        title: 'Financial Advisor',
        description: 'Provide personalized financial guidance to clients on investments, retirement planning, and wealth management.',
        skills: ['Client Relationship Management', 'Financial Planning', 'Investment Analysis'],
        salary: 'Ksh65,000 - Ksh135,000',
        outlook: 'Strong Growth',
        details: 'Financial advisors build long-term relationships with clients, helping them achieve financial goals through personalized strategies. Success depends heavily on building a client base, with earning potential increasing significantly with experience and assets under management.'
      },
      {
        id: 3,
        title: 'Corporate Finance Analyst',
        description: 'Evaluate financial performance, prepare forecasts, and assist with budgeting and strategic financial planning.',
        skills: ['Financial Analysis', 'Budgeting', 'Forecasting', 'Strategic Planning'],
        salary: 'Ksh70,000 - Ksh95,000',
        outlook: 'Stable',
        details: 'Corporate finance analysts work within organizations to optimize financial operations and support strategic decision-making. The role offers more predictable hours than investment banking while still providing exposure to complex financial challenges and business operations.'
      }
    ],
    nontraditional: [
      {
        id: 4,
        title: 'FinTech Product Manager',
        description: 'Lead the development of innovative financial technology products that transform how people and businesses manage money.',
        skills: ['Product Development', 'Financial Services Knowledge', 'User Experience', 'Agile Methodologies'],
        salary: 'Ksh95,000 - Ksh160,000',
        outlook: 'Rapid Growth',
        details: 'FinTech product managers sit at the intersection of finance, technology, and user experience. They identify market opportunities and lead cross-functional teams to create innovative financial products. This role combines financial expertise with the dynamic pace of tech startups.'
      },
      {
        id: 5,
        title: 'ESG Investment Analyst',
        description: 'Analyze investments based on environmental, social, and governance criteria to support sustainable and ethical investing.',
        skills: ['ESG Analysis', 'Impact Assessment', 'Sustainable Finance', 'Research'],
        salary: 'Ksh75,000 - Ksh110,000',
        outlook: 'High Growth',
        details: 'ESG analysts evaluate investments through sustainability and ethical lenses. As more investors prioritize social and environmental impact alongside financial returns, these specialists help identify opportunities that align with both financial goals and values-based criteria.'
      },
      {
        id: 6,
        title: 'Blockchain Financial Strategist',
        description: 'Develop and implement blockchain-based financial solutions for organizations seeking to leverage decentralized finance innovations.',
        skills: ['Blockchain Technology', 'Cryptocurrency', 'Smart Contracts', 'Financial Systems'],
        salary: 'Ksh100,000 - Ksh180,000',
        outlook: 'Emerging Field',
        details: 'Blockchain financial strategists help organizations navigate the rapidly evolving world of decentralized finance. They identify opportunities to implement blockchain solutions that enhance security, reduce costs, or create new financial products and services.'
      }
    ]
  };

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen py-8 " style={{ backgroundColor: "#fef9ef" }}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Results Header */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Your Career Assessment Results</h1>
            <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
              Based on your responses, we've identified finance as an ideal industry for your skills and preferences. 
              Explore both traditional and non-traditional career paths that align with your profile.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-blue-50 rounded-lg">
            <div className="mb-4 md:mb-0 md:mr-8">
              <h2 className="text-xl font-semibold text-gray-800">Your Top Strengths</h2>
              <div className="flex flex-wrap mt-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mr-2 mb-2">Analytical Thinking</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mr-2 mb-2">Problem Solving</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mr-2 mb-2">Attention to Detail</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mr-2 mb-2">Strategic Planning</span>
              </div>
            </div>
          
          </div>
        </div>

        {/* Career Paths Tabs */}
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
              Traditional Finance Roles
            </button>
            <button
              onClick={() => setActiveTab('nontraditional')}
              className={`flex-1 py-4 px-6 text-center font-medium text-lg ${
                activeTab === 'nontraditional'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Non-Traditional Finance Roles
            </button>
          </div>

          {/* Career Cards */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {careerPaths[activeTab].map((career) => (
                <div key={career.id} className="border rounded-lg overflow-hidden bg-white hover:shadow-lg transition">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{career.title}</h3>
                    <p className="text-gray-600 mb-4">{career.description}</p>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <span className="text-sm text-gray-500">Salary Range</span>
                        <p className="font-semibold text-gray-800">{career.salary}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Job Outlook</span>
                        <p className="font-semibold text-gray-800">{career.outlook}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-sm text-gray-500 block mb-2">Key Skills</span>
                      <div className="flex flex-wrap">
                        {career.skills.map((skill, index) => (
                          <span 
                            key={index} 
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs mr-2 mb-2"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Accordion for details */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button
                        onClick={() => toggleAccordion(career.id)}
                        className="flex justify-between items-center w-full text-left font-medium text-blue-600 hover:text-blue-800"
                      >
                        <span>Learn More</span>
                        <svg
                          className={`w-5 h-5 transition-transform ${
                            openAccordion === career.id ? 'transform rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>
                      
                      {openAccordion === career.id && (
                        <div className="mt-4 text-gray-700 text-sm">
                          <p>{career.details}</p>
                          <div className="mt-4 flex justify-between">
                            <Link
                              to={`/career/${career.id}`}
                              className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                              View Full Career Path
                            </Link>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm">
                              Save to My List
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Action Section */}
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold text-gray-800">Want to explore more career options?</h3>
                <p className="text-gray-600">Get personalized training recommendations for your chosen path.</p>
              </div>
              <div className="flex space-x-4">
                <Link to='/assessment'>
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                  Retake Assessment
                </button>
                </Link>
                <Link to='/roadmap'>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Explore Training Programs
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Comparison Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Traditional vs. Non-Traditional: What's the Difference?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Traditional Finance Careers</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Established career paths with clear advancement opportunities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Often require specific certifications or educational backgrounds</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>More stable but potentially less flexible work arrangements</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Focus on established financial principles and methodologies</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Non-Traditional Finance Careers</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Emerging roles that blend finance with technology, sustainability, or other domains</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Often value diverse skill sets and interdisciplinary knowledge</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Greater flexibility but potentially higher volatility in job security</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Focus on innovation and disruption in financial services</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-100 rounded-lg">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="text-blue-800">
                <strong>Pro Tip:</strong> Consider how your personal work style, risk tolerance, and long-term goals align with these different career types. Many professionals successfully transition between traditional and non-traditional roles throughout their careers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;