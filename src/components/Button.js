import React from "react";

export const Button = ({ text, buttonColor, textColor }) => {
  const buttonClass = `btn btn-${buttonColor} text-${textColor} rounded-pill px-4 font-sans-serif`;
  
  return (
    <button className={buttonClass}>
      {text}
    </button>
  );
};