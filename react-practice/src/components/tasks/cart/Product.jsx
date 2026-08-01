// TASK 5 (part A): Lifting State Up — Product
// GOAL: Practice sharing state between SIBLING components through a
// shared parent — the single most useful React pattern for real
// projects (cart badge, form + summary, filters + results, etc.)
//
// SETUP: This Product component does NOT own the cart. It receives the
// cart data and an "add to cart" function as PROPS from its parent
// (CartDemo.jsx, which you'll build in part C). This is "lifting state
// up": the state lives in the parent, and children just receive it.
//
// REQUIREMENTS:
// 1. Accept props: `name`, `price`, and `onAddToCart` (a function).
// 2. Display the name and price.
// 3. Add an "Add to Cart" button. When clicked, call:
//      onAddToCart({ name, price })
//    (Don't implement cart logic here — that belongs in the parent.
//    This component's only job is to report "the user wants to add
//    THIS item" upward.)
//
// HOW YOU'LL KNOW IT WORKS: you won't be able to fully test this file
// alone — it only works once CartDemo.jsx (part C) renders it and
// passes in a real onAddToCart function.

function Product({ name, price, onAddToCart }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}>
      <h3>{name}</h3>
      <p>${price}</p>
      {/* TODO: add the "Add to Cart" button that calls onAddToCart */}
    </div>
  );
}

export default Product;
