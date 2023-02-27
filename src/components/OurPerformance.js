import React from "react";
import { PerformanceUnits } from "./PerformanceUnits.js";
import { Button } from "./Button.js";
import bread from "../assets/bread.png";
import croissant from "../assets/croissant.png";
import cupcake from "../assets/cupcake.png";

export const OurPerformance = () => {
  return (
    <section className="bg-info text-center py-5">
      <div className="container">
        <p className="font-sans-serif mb-1">What we do</p>
        <h2 className="font-serif">Our Performance</h2>
        <div className="row">
          <div className="col-4">
            <PerformanceUnits imgAdd={bread} count="104" item="Bread" />
          </div>
          <div className="col-4">
            <PerformanceUnits imgAdd={croissant} count="104" item="Croissant" />
          </div>
          <div className="col-4">
            <PerformanceUnits imgAdd={cupcake} count="104" item="Cupcake" />
          </div>
        </div>
        <Button text="Read More" buttonColor="primary" textColor="light"/>
      </div>
    </section>
  );
};
