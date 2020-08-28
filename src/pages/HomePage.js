import React, { Fragment } from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";
export default function HomePage() {
  return (
    <Fragment>
      <Hero title="awesome gadgets" max="true">
        <Link className="main-link" to="/products" style={{ margin: "2rem" }}>
          Our Products
        </Link>
      </Hero>
      <Services></Services>
      <Featured></Featured>
    </Fragment>
  );
}
