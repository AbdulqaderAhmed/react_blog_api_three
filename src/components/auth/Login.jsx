import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../features/auth/authSlice";

export default function Login() {
  const { isError } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(userData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

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

      <button type="submit">Login</button>

      <p>
        <Link to="/register">Register</Link>
      </p>
    </form>
  );
}
