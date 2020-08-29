import React from "react";
import { ProductConsumer } from "../context/context";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function SideCart() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartOpen, closeCart, cart, cartTotal } = value;
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <ul>
              {cart.map((item) => {
                return (
                  <li key={item.id} className="cart-item mb-4">
                    <img width="35" src={item.image} alt="Cart Item"></img>
                    <div className="mt-3">
                      <h6 className="text-uppercase">{item.title}</h6>
                      <h6 className="text-title text-main text-capitalize">
                        amount: {item.count}
                      </h6>
                    </div>
                  </li>
                );
              })}
            </ul>
            <h4 className="text-capitalize text-main">
              Cart Total: {cartTotal} LE
            </h4>
            <div className="text-center my-5">
              <Link
                to="/cart"
                className="main-link mb-3 ml-1"
                style={{ letterSpacing: "0px", fontFamily: "Cairo" }}
              >
                اشتري الان
              </Link>
              <Link to="/products" className="main-link" style={{ letterSpacing: "0px", fontFamily: "Cairo" }}>
                العوده للتسوق
              </Link>
            </div>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const CartWrapper = styled.div`
  position: fixed;
  top: 58px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  @media (min-width: 576px) {
    width: 20rem;
  }
  overflow: scroll;
  padding: 2rem;
  ul {
    padding: 0 !important;
  }
  .cart-item {
    list-style-type: none;
  }
`;
