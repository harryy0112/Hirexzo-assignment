import React from "react";

const CallToAction = () => {
  return (
    <div className="bg-white py-10 flex flex-col items-center">
      <h2 className="text-3xl font-extrabold text-black mb-6">
        Ready to dive in?
      </h2>
      <button className="bg-black text-white py-2 px-12 rounded-full text-lg mb-3">
        Get Started
      </button>
      <p className="text-gray-500 underline">No credit card required</p>
    </div>
  );
};

export default CallToAction;
