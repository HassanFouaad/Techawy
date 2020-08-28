import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from "./SocialData";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 10,
    links: linkData,
    socialLinks: socialData,
    cart: [],
  };

  //Handgle Side Bar
  handleSideBar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  //Handle Side Cart
  handleSideCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };

  //Close Cart
  closeSideCart = () => {
    this.setState({ cartOpen: false });
  };

  //Open Cart
  openCart = () => {
    this.setState({ cartOpen: true });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          handleSideBar: this.handleSideBar,
          handleCart: this.handleSideCart,
          closeCart: this.closeSideCart,
          openCart: this.openCart,
          ...this.state,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
