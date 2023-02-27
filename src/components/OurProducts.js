import React from "react";
import { Product } from "./Product.js";
import { Button } from "./Button.js";
import bread from "../assets/bread.png";
import croissant from "../assets/croissant.png";
import cupcake from "../assets/cupcake.png";
import cookies from "../assets/cookies.png";
import donut from "../assets/donut.png";
import cake from "../assets/cake.png";

export const OurProducts = () => {
  return (
    <section className='container'>
      <div className=" text-center py-4 my-md-5 my-3">
        <div>
          <p className="m-0 font-sans-serif">what we do</p>
          <h2 className="font-serif my-2">Our Products</h2>
        </div>
        <div className="row mb-4">
          <Product
            productName="Bread"
            imgPath={bread}
            description="Sample text. Click to select the Text Element"
          />
          <Product
            productName="Croissant"
            imgPath={croissant}
            description="Sample text. Click to select the Text Element"
          />
          <Product
            productName="CupCake"
            imgPath={cupcake}
            description="Sample text. Click to select the Text Element"
          />
          <Product
            productName="Cookies"
            imgPath={cookies}
            description="Sample text. Click to select the Text Element"
          />
          <Product
            productName="Donuts"
            imgPath={donut}
            description="Sample text. Click to select the Text Element"
          />
          <Product
            productName="Cakes"
            imgPath={cake}
            description="Sample text. Click to select the Text Element"
          />
        </div>
        <Button text="Read More" buttonColor="primary" textColor="light"/>
      </div>
    </section>
  );
};
