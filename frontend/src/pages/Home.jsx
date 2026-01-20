import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/menu")
      .then(res => setMenu(res.data));
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      {menu.map(item => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}
