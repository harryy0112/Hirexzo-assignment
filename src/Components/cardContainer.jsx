import React from "react";
import Card from "./card";

const CardContainer = () => {
  return (
    <div className="bg-gray-100 p-16">
      <div className="container mx-auto flex justify-center space-x-10">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardContainer;
