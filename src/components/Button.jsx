import React from "react";

const Button = ({ title, className, onClick }) => {
  return (
    <button
      className={`px-7 py-2 rounded-full bg-background text-secondary hover:bg-gray-800 hover:text-primary duration-500`}
    >
      {title}
    </button>
  );
};

export default Button;
