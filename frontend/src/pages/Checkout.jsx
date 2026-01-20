import { useContext } from "react";
import axios from "../api/axios";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const placeOrder = async () => {
    await axios.post("/orders", {
      items: cart.map(i => ({
        menuItem: i._id,
        quantity: i.qty
      })),
      totalPrice: total
    });
    clearCart();
    alert("Order placed successfully");
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total: {total}</p>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}
