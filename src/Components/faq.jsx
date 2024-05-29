import React, { useState } from "react";

const FAQItem = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-4 bg-gray-200 rounded-lg shadow-md flex justify-between items-center"
      >
        <span className="text-lg text-black">{question}</span>
        <svg
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="20"
          height="20"
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="black"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 pt-2 pb-4 text-black bg-gray-50 rounded-b-lg w-full">
          Answer goes here...
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    "What is Question asked ?         ",
    "What is Question asked ?         ",
    "What is Question asked ?         ",
    "What is Question asked ?         ",
    "What is Question asked ?         ",
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-6 text-black underline">
        Frequently asked questions
      </h2>
      <div>
        {faqData.map((question, index) => (
          <FAQItem key={index} question={question} />
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <FAQ />
    </div>
  );
}

export default App;
