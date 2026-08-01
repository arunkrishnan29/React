// TASK 5 (part B): Lifting State Up — CartSummary
// GOAL: This is the OTHER sibling. It also does not own the cart state
// — it just receives the cart array as a prop and displays it. Product
// (part A) and CartSummary never talk to each other directly. They both
// go through the shared parent, CartDemo.jsx (part C).
//
// REQUIREMENTS:
// 1. Accept a `cart` prop — an array of { name, price } objects.
// 2. Display "Cart (N items)" where N is cart.length.
// 3. List each item's name and price using .map() (remember: key prop!).
// 4. Show the total price — sum up cart.map(item => item.price).
//    HINT: cart.reduce((total, item) => total + item.price, 0)
// 5. If the cart is empty, show "Your cart is empty" instead of a list.

function CartSummary({ cart }) {
  return (
    <div style={{ border: "2px solid green", padding: "10px", margin: "5px" }}>
      {/* TODO: show "Cart (N items)" */}
      {/* TODO: show empty state OR the list of items */}
      {/* TODO: show the total price using .reduce() */}
    </div>
  );
}

export default CartSummary;
