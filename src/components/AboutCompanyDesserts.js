import React from "react";
import { Button } from "./Button.js"
import breadBasket from "../assets/bakery-basket-02.png";

export const AboutCompanyDesserts = () => {
  return (
    <section className="secondary bg-secondary">
      <div className="container">
        <div className="row py-5 d-flex align-items-center justify-content-center">
          <div className="col-md-6 d-none d-md-block d-flex align-items-center justify-content-center">
            <div className="w-100">
              <img
                src={breadBasket}
                className="img-fluid h-auto"
                alt="bread basket"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 text-light d-flex align-items-center text-center text-md-end">
            <div>
              <p className="font-sans-serif my-2">about company</p>
              <h2 className="font-serif">
                We love desserts,
                <br /> and coffee
              </h2>
              <p className="font-sans-serif my-3">
                Eu ad nulla dolor proident ipsum ut nostrud enim eiusmod.
                Deserunt cupidatat esse anim amet non mollit laboris non nulla
                reprehenderit deserunt eiusmod minim qui. Voluptate cupidatat
                aliquip consectetur adipisicing dolore enim culpa adipisicing
                in. Id et id officia ipsum et sit. Et aliqua sit duis aute
                eiusmod pariatur tempor aute ea sit laborum est. Ad esse enim
                ullamco eu eiusmod laborum mollit sit ea dolore. Cupidatat
                exercitation eu nulla magna mollit aliqua consequat non qui
                cillum anim exercitation nulla.
              </p>
              <Button text="Read More" buttonColor="primary" textColor="light"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
