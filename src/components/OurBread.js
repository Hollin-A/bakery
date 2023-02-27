import React from "react";
import { BreadTypes } from "./BreadTypes.js";
import breadOriginal from "../assets/original.jpg";
import sweet from "../assets/sweet.jpg";
import yeastFree from "../assets/yeast-free.jpg";
import grain from "../assets/grain.jpg";

export const OurBread = () => {
  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="font-serif">Our Bread</h2>
        <p className="font-sans-serif mt-4">
          Et elit sunt consequat laborum laboris eiusmod id. Dolore dolor
          ullamco id eiusmod magna eu exercitation laboris eu labore commodo.
          Non ad amet consequat eiusmod non ea veniam cillum non magna dolore
          dolore adipisicing proident. Cillum ullamco ea eu veniam tempor fugiat
          aute ex ut eiusmod cillum sunt minim sunt.
        </p>
        <div className="row justify-content-between">
          <div className="col-lg-6 col-12">
            <BreadTypes
              breadTitle="Original"
              imageAdd={breadOriginal}
              desc="Excpteur sint occcaecat cupidatat non proident"
              price="$18.00"
            />
          </div>
          <div className="col-lg-6 col-12">
            <BreadTypes
              breadTitle="Sweet"
              imageAdd={sweet}
              desc="Excpteur sint occcaecat cupidatat non proident"
              price="$15.00"
            />
          </div>
          <div className="col-lg-6 col-12">
            <BreadTypes
              breadTitle="yeast-free"
              imageAdd={yeastFree}
              desc="Excpteur sint occcaecat cupidatat non proident"
              price="$25.00"
            />
          </div>
          <div className="col-lg-6 col-12">
            <BreadTypes
              breadTitle="grain"
              imageAdd={grain}
              desc="Excpteur sint occcaecat cupidatat non proident"
              price="$16.00"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
