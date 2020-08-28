import React from "react";
import Title from "../Title";
import aboutBCG from "../../images/aboutBcg.jpeg";
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBCG}
              alt="about"
              className="img-thumbnail img-fluid"
              style={{ backgroundColor: "var(--darkGrey)" }}
            ></img>
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us"></Title>
            <p className="text-lead text-muted my-3">
              {" "}
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem Lorem Lorem Lorem
            </p>
            <button
              type="button"
              className="main-link"
              style={{ marginTop: "2rem" }}
            >
              Email Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
