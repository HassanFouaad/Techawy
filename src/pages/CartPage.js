import React, { Fragment } from "react";
import CartSection from "../components/CartPage";
import cartBcg from "../images/storeBcg.jpeg";
import Hero from "../components/Hero";
export default function CartPage() {
  return (
    <Fragment>
      <Hero img={cartBcg}></Hero>
      <CartSection></CartSection>;
    </Fragment>
  );
}
