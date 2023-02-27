import React from "react";
import breadBasket from "../assets/bakery-basket-03.png";

export const ContactUs = () => {
  return (
    <section className="bg-secondary p-5 text-light">
      <div className="container">
        <div className="row py-5 d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <h2 className="font-serif">Contact Us</h2>
            <p className="font=sans=serif">
              Commodo ullamco anim adipisicing tempor magna ut id do laboris
              minim irure. Consectetur ad amet labore proident sit. Non
              incididunt occaecat in enim nostrud culpa aliquip consectetur
              minim cupidatat Lorem. Proident sint Lorem do elit sit aliquip
              non. Dolore labore adipisicing aliqua nostrud. Sunt elit culpa
              excepteur anim est minim anim minim ullamco velit anim duis do.
            </p>
            <div className="row mt-5" style={{ width: "350px" }}>
              <div className="col-2 m-auto">
                <div
                  className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ height: "70px", width: "70px" }}
                >
                  <i className="bi bi-telephone-fill fs-1 text-light" />
                </div>
              </div>
              <div className="ps-5 col-10 align-items-center font-sans-serif">
                <div className="d-flex flex-column justify-content-center h-100">
                  <p className="m-0 fs-3">Call Us Anytime</p>
                  <p className="text-primary m-0 fs-3 fw-bold">+92 555 77 88</p>
                </div>
              </div>
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
