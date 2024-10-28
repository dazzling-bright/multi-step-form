import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`p-4 px-12 bg-marine-blue text-white rounded-lg font-bold" ${className} hover:opacity-90 transition-opacity`}
    >
      {children}
    </button>
  );
};

export default Button;
