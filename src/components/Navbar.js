import React from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import { ProductConsumer } from "../context/context";
import logo from "../images/logo.svg";
export default function Navbar() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartItems, handleSideBar, handleCart } = value;
        return (
          <NavWrapper>
            <div className="nav-center">
              <FaBars className="nav-icon" onClick={handleSideBar} />
              <img src={logo} alt="logo" />
              <div className="nav-cart">
                <FaCartPlus
                  className="nav-icon"
                  onClick={handleCart}
                ></FaCartPlus>
                <div className="cart-items">{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const NavWrapper = styled.nav`
  position: sticky;
  position: --webkit-sticky;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  top: 0;
  border-bottom: 2px solid var(--primaryColor);
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
`;
