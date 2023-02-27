import React from "react";
import { Button } from "./Button.js";

export const Welcome = () => {
  return (
    <section className="bg-primary text-light text-center p-5">
      <div className="container" style={{ padding: "0 15vw" }}>
        <h2 className="pb-3 font-serif">Welcome</h2>
        <p className="font-sans-serif mb-4">
          Do non aliquip elit occaecat tempor laborum labore Lorem Lorem.
          Ullamco nisi nostrud aliqua ex cillum sit mollit deserunt aute dolor
          aliqua. Fugiat pariatur nulla elit pariatur ex voluptate eu esse anim
          proident. Irure amet aute fugiat officia labore id qui exercitation
          pariatur. Voluptate ut laboris eiusmod et exercitation elit cillum
          esse commodo pariatur id voluptate. Excepteur dolore deserunt non sit
          id cupidatat et ad anim minim et est officia. Nisi culpa proident sint
          amet cupidatat voluptate amet sunt incididunt in.
        </p>
        <Button text="read more" buttonColor="light" textColor="dark" />
      </div>
    </section>
  );
};
