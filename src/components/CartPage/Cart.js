import React from "react";

import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
export default function Cart() {
  return (
    <div>
      <CartColumns></CartColumns>
      <CartList></CartList>
      <CartTotal></CartTotal>
    </div>
  );
}
