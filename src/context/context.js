import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from "./SocialData";
import { items } from "./productData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0,
    links: linkData,
    socialLinks: socialData,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: true,
  };

  componentDidMount() {
    this.setProducts(items);
  }

  setProducts = (products) => {
    let storeProducts = products.map((item) => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };
      return product;
    });
    /// featured products
    let featuredProducts = storeProducts.filter(
      (item) => item.featured === true
    );
    this.setState({
      storeProducts,
      filteredProducts: storeProducts,
      featuredProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loading: false,
    });
  };

  //cart from storage
  getStorageCart() {
    return [];
  }
  //cart products from storage
  getStorageProduct() {
    return {};
  }

  //Add Totals to local storage
  addTotals() {}

  //Get Totals from local Storage
  getTotals() {}

  //Sync Storage
  syncStorage = () => {};

  // Add To Cart
  addToCart = (id) => {
    console.log(`Added To Cart ${id}`);
  };

  //Set Single Product
  setSingleProduct = (id) => {
    console.log(`Set Single Product : ${id}`);
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
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct,
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
