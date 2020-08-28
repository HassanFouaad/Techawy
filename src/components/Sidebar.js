import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context/context";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <ProductConsumer>
      {(value) => {
        console.log(value);
        const { links, sidebarOpen, handleSideBar } = value;
        return (
          <SideWrapper show={sidebarOpen}>
            <ul>
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className="sidebar-link"
                    onClick={handleSideBar}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </SideWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const SideWrapper = styled.nav`
  position: fixed;
  top: 59px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-right: 3px solid var(--primaryColor);
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  transition: var(--mainTransition);
  ul {
    list-style-type: none;
    padding: 0 !important;
  }
  .sidebar-link {
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: black;
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
  }
  .sidebar-link:hover {
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
  }
  @media (min-width: 576px) {
    width: 20rem;
  }
`;
