import React from "react";
import { Button } from "./Button.js"

export const Discount = () => {
  return (
    <section className="bg-primary text-center text-light py-5">
      <div className="container">
        <h2 className="font-serif mb-4">40% discount after 8.00 pm!</h2>
        <Button text="CONTACT US" buttonColor="light" textColor="dark"/>
      </div>
    </section>
  );
};
