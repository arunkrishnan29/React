// TASK 5 (part C): Lifting State Up — the parent
// GOAL: This is where the cart state actually LIVES. Product and
// CartSummary are both children of CartDemo — this is what makes
// "lifting state up" work: the shared parent owns the data, and passes
// it down (or passes down a function to update it) via props.
//
// REQUIREMENTS:
// 1. Create state called `cart`, starting as an empty array [].
// 2. Create a function `addToCart(item)` that adds `item` to the cart
//    using the spread operator (never mutate directly):
//      setCart([...cart, item])
// 3. Render a few <Product> components (hardcode 2-3 products with
//    name/price) and pass each one the `addToCart` function as the
//    `onAddToCart` prop.
// 4. Render <CartSummary cart={cart} /> below the products.
//
// HOW YOU'LL KNOW IT WORKS: clicking "Add to Cart" on any product should
// immediately update CartSummary's item count and total — this proves
// the two sibling components are sharing state correctly through you,
// the parent.

import { useState } from "react";
import Product from "./Product.jsx";
import CartSummary from "./CartSummary.jsx";

function CartDemo() {
  // TODO: create the cart state here

  // TODO: create the addToCart function here

  return (
    <div>
      <h2>Shop</h2>
      {/* TODO: render 2-3 <Product> components with name, price, onAddToCart */}

      {/* TODO: render <CartSummary cart={cart} /> */}
    </div>
  );
}

export default CartDemo;
