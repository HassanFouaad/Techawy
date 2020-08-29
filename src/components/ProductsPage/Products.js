import React from "react";
import { ProductConsumer } from "../../context/context";
import Title from "../Title";
import Product from "../Product";
export default function Products() {
  return (
    <ProductConsumer>
      {(value) => {
        const { filteredProducts } = value;
        return (
          <section className="py-5">
            <div className="container">
              <Title center title="التكنولوجيا بين يديك"></Title>{" "}
              <div className="row py-5">
                {filteredProducts.map((product) => (
                  <Product product={product} key={product.id}></Product>
                ))}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
