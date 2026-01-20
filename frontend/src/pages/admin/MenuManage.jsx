import { useEffect, useState } from "react";
import axios from "../../api/axios";

export default function MenuManage() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get("/menu").then(res => setMenu(res.data));
  }, []);

  return (
    <div>
      <h2>Menu Management</h2>
      {menu.map(item => (
        <p key={item._id}>{item.name} - {item.price}</p>
      ))}
    </div>
  );
}
