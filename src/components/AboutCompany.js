import React from "react";
import { Button } from "./Button.js";
import breadBasket from "../assets/bakery-basket-01.png";

export const AboutCompany = () => {
  return (
    <section className="bg-secondary text-light py-5 text-center text-md-start">
      <div className="container">
        <div className="row py-5 d-flex align-items-center justify-content-center">
          <div className="col-md-6 col-12 align-items-center justify-content-between">
            <div>
              <p className="font-sans-serif mb-2">about company</p>
              <h2 className="font-serif">
                Creating the best-tasting bread and desserts
              </h2>
              <p className="font-sans-serif mb-4">
                Laborum ea irure nostrud commodo aliquip. Enim voluptate ut
                reprehenderit commodo Lorem officia sunt Lorem ullamco. Esse
                excepteur reprehenderit eiusmod in non nisi aute cupidatat sunt
                mollit veniam. Exercitation ad enim ad et esse. Nisi et Lorem
                nisi duis anim esse in ex consequat in aliquip veniam sunt.
              </p>
              <Button
                text="Read More"
                buttonColor="primary"
                textColor="light"
              />
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block d-flex align-items-center justify-content-center">
            <div className="w-100">
              <img
                src={breadBasket}
                className="img-fluid h-auto"
                alt="bread basket"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
