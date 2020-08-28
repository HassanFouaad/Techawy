import React, { Fragment } from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <Fragment>
      <Hero title="awesome gadgets" max="true">
        <Link to="/products">Our Products {";)"}</Link>
      </Hero>
    </Fragment>
  );
}
