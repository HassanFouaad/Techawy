import React, { Fragment } from "react";
import Hero from "../components/Hero";
import defaulyBCG from "../images/defaultBcg.jpeg";
import { Link } from "react-router-dom";
export default function Default() {
  return (
    <Fragment>
      <Hero img={defaulyBCG} max="true" title="404">
        <h2 className="text-uppercase">Page Not Found</h2>
        <Link to="/" className="main-link" style={{ marginTop: "2rem" }}>
          Return Home
        </Link>
      </Hero>
    </Fragment>
  );
}
