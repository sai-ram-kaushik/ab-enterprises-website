import React from "react";
import background from "/background.png";
import Button from "../components/Button";

const Banner = () => {
  return (
    <div className="w-full h-[25vh] bg-primary relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${background})`,
          opacity: "0.5", // Adjust opacity as needed
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative z-10 flex flex-col gap-3 items-center justify-center h-full text-white">
        <h2>Wedding Planner</h2>
        <p className="text-center">Sprinkle Some Memorable Moments In Your Weeding</p>
        <Button title="Organize Wedding" />
      </div>
    </div>
  );
};

export default Banner;
