import React from "react";

export const PerformanceUnits = ({ imgAdd, count, item }) => {
  return (
    <div
      className="p-4"
    >
      <div
        className="rounded-circle bg-secondary mx-auto p-3"
        style={{ height: "100px", width: "100px" }}
      >
        <img src={imgAdd} alt="my image" className="img-fluid invert-logo" />
      </div>
      <p className="pt-4 font-serif fs-1 mb-2">{count}</p>
      <p className="font-sans-serif">{item}</p>
    </div>
  );
};
