import React from "react";

export const Product = ({ productName, description, imgPath }) => {
  return (
    <div className="text-center text-dark col-6 col-md-4">
      <div
        className="bg-secondary mx-auto my-4 rounded-circle p-3"
        style={{ height: "80px", width: "80px" }}
      >
        <img src={imgPath} className="img-fluid invert-logo" />
      </div>
      <h5 className="font-sans-serif pb-3">{productName}</h5>
      <p className="font-sans-serif">{description}</p>
    </div>
  );
};
