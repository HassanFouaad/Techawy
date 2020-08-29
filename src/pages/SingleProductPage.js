import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import imager from "../images/singleProductBcg.jpeg";
import { ProductConsumer } from "../context/context";
import { FaCartPlus } from "react-icons/fa";

const productName = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { title } = value.singleProduct;
        return <Hero img={imager} title={title}></Hero>;
      }}
    </ProductConsumer>
  );
};
export default function SingleProductPage() {
  return (
    <Fragment>
      {productName()}
      <ProductConsumer>
        {(value) => {
          const { singleProduct, addToCart, loading } = value;
          if (loading) {
            console.log("Hello from Loading");
            return (
              <>
                <h1>Product Loading...</h1>
              </>
            );
          }
          const {
            company,
            description,
            id,
            price,
            title,
            image,
          } = singleProduct;

          return (
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <img
                      src={`../${image}`}
                      alt={title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <h5 className="text-title mb-4">{title}</h5>
                    <h5 className="text-capitalize text-muted mb-4">
                      {" "}
                      brand: {company}
                    </h5>
                    <h5 className="text-main text-capitalize mb-4">
                      price : ${price}
                    </h5>
                    <p className="text-caitalize text-title mt-3">
                      description :
                    </p>
                    <p>{description}</p>
                    <button
                      type="button"
                      className="main-link"
                      style={{
                        margin: "0.75rem",
                        fontFamily: "Cairo",
                        letterSpacing: "0px",
                      }}
                      onClick={() => addToCart(id)}
                    >
                      <FaCartPlus></FaCartPlus> اضف الى السله
                    </button>
                    <Link
                      to="/products"
                      className="main-link"
                      style={{
                        margin: "0.75rem",
                        fontFamily: "Cairo",
                        letterSpacing: "0px",
                      }}
                    >
                      الرجوع الى التسوق
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    </Fragment>
  );
}
