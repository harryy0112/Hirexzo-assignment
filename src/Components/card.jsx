import React from "react";

const Card = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex justify-center mb-4">
        <div className="bg-green-200 p-4 rounded-full">
          <img
            src="/src/assets/people.png" // Replace with your icon source
            alt="Icon"
            className="h-8 w-8"
          />
        </div>
      </div>
      <h2 className="text-gray-800 text-xl font-bold text-center mb-4">
        Hire 3x faster
      </h2>
      <p className="text-gray-600 text-justify">
        Autogenerate your automated hiring pipeline in 2 clicks to screen,
        evaluate and select candidates through. practical skills assessments.
        Deal with high volume, hire 3x faster.Autogenerate your automated hiring
        pipeline in 2 clicks to screen, evaluate and select candidates through
        practical skills assessments. Deal with high volume, hire 3x faster.
      </p>
    </div>
  );
};

export default Card;
