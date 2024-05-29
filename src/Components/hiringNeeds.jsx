import React from "react";

const HiringNeeds = () => {
  return (
    <div className="bg-purple-600 p-5 flex justify-around items-center rounded-lg">
      <div className="flex items-center">
        <img src="/src/assets/hiring.png" alt="Hiring" className="h-40 w-60" />
        <div className="ml-4">
          <h2 className="text-white text-3xl font-bold">
            Talk to us about your Hiring needs
          </h2>
        </div>
      </div>
      <button className="bg-white text-purple-800 py-6 px-20 rounded-full">
        Click Here
      </button>
    </div>
  );
};

export default HiringNeeds;
