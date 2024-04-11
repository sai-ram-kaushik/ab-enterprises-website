import React from "react";
import background from "/background.png";
// import Button from "../components/Button";

const Banner = () => {
  return (
    <div className="w-full h-[25vh] bg-primary relative">
      <div className="relative z-10 flex flex-col gap-3 items-center justify-center h-full text-background">
        <h2>In House Products</h2>
        <p className="text-center">Bagpacks/Messenger bags/Laptop sleeves</p>
        {/* <Button title="Organize Wedding" /> */}
      </div>
    </div>
  );
};

export default Banner;
