import axios from "axios";

export default function Register() {
  const register = async () => {
    await axios.post("http://localhost:5000/api/auth/register", {
      name: "Test",
      email: "test@test.com",
      password: "123456"
    });
  };

  return <button onClick={register}>Register</button>;
}
