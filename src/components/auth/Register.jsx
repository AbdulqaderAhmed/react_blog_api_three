import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../features/auth/authSlice";

export default function Register() {
  const { isError } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(userData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
}
