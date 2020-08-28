import React from "react";
import { Fragment } from "react";
import Info from "../components/AboutPage/info";
import Hero from "../components/Hero";
import aboutBcg from "../images/aboutBcg.jpeg";
export default function AboutPage() {
  return (
    <Fragment>
      <Hero img={aboutBcg}></Hero>
      <Info></Info>
    </Fragment>
  );
}
