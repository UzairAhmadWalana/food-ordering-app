import axios from "../../api/axios";

export default function AdminLogin() {
  const login = async () => {
    const res = await axios.post("/auth/login", {
      email: "admin@test.com",
      password: "123456"
    });
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", "admin");
  };

  return <button onClick={login}>Admin Login</button>;
}
