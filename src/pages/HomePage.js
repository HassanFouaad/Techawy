import React, { Fragment } from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";
export default function HomePage() {
  return (
    <Fragment>
      <Hero title="متعه التسوق بين يديك" max="true">
        <Link
          className="main-link"
          to="/products"
          style={{ margin: "2rem", fontFamily: "Cairo", letterSpacing: "1px" }}
        >
          !تسوق الان
        </Link>
      </Hero>
      <Services></Services>
      <Featured></Featured>
    </Fragment>
  );
}
