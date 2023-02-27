import React from "react";
import { Button } from "./Button.js";
import Bakery from "../assets/bakery-header.png";

export const Header = () => {
  return (
    <header>
      <div
        className="bg-secondary text-light text-center position-relative bakery-header"
        style={{ height: "400px" }}
      >
        {/* <div className="container"> */}
        <img src={Bakery} class="position-absolute bottom-0 start-50 translate-middle-x img-fluid w-lg-50 w-md-75 w-100" />
        <div class="position-absolute top-0 start-50 translate-middle-x mt-5">
          <h6 className="font-sans-serif">homemade recipes</h6>
          <h1 className="postition-absolute b-10 font-serif mb-4">Backery and Confectionery</h1>
          <Button text="Read More" buttonColor="primary" textColor="light"/>
        </div>
      </div>
    </header>
  );
};
