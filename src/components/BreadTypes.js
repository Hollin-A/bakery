import React from "react";
import { Button } from "./Button.js"

export const BreadTypes = ({ breadTitle, imageAdd, desc, price }) => {
  return (
    <div
      class="row bg-info text-dark p-3 m-3 text-start font-sans-serif"
      style={{  height: "280px" }}
    >
      <div class="col-6 position-relative">
          <img
            src={imageAdd}
            alt="My Image"
            className="position-absolute image-fit"
          />
      </div>
      <div class="col-6 p-3">
        <h4>{breadTitle}</h4>
        <p>{desc}</p>
        <p className="fw-bold fs-4">{price}</p>
        <Button text="add to cart" buttonColor="secondary" textColor="light"/>
      </div>
    </div>
  );
};
