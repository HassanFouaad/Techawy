import React, { Fragment } from "react";
import Products from "../components/ProductsPage/Products";
import Hero from "../components/Hero";
import productBCG from "../images/productsBcg.jpeg";
export default function ProductsPage() {
  return (
    <Fragment>
      <Hero img={productBCG}></Hero> <Products />
    </Fragment>
  );
}
