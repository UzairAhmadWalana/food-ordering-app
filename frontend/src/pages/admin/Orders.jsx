import { useEffect, useState } from "react";
import axios from "../../api/axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/orders").then(res => setOrders(res.data));
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      {orders.map(o => (
        <p key={o._id}>
          Order {o._id} - {o.status}
        </p>
      ))}
    </div>
  );
}
