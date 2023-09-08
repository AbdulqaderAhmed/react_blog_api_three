import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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

  useEffect(() => {
    if (!isError) {
      navigate("/login");
    }
  }, [isError]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center my-40 gap-5 bg-slate-200 w-2/3 mx-auto rounded-lg"
    >
      <h2 className="text-2xl text-center font-medium border-b-2 bg-slate-400 border-b-slate-400 w-full p-1">
        Register
      </h2>

      <div className="flex flex-row gap-5">
        <label htmlFor="username" className="text-lg font-medium">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
          className="px-3"
        />
      </div>

      <div className="flex flex-row gap-14">
        <label htmlFor="email" className="text-lg font-medium">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          className="px-3"
        />
      </div>

      <div className="flex flex-row gap-7">
        <label htmlFor="password" className="text-lg font-medium">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          className="px-3"
        />
      </div>

      <button
        type="submit"
        className="bg-zinc-400 p-1 text-lg font-semibold w-1/3 rounded-md"
      >
        Register
      </button>

      <p className="text-md font-medium pb-5">
        have an account?{" "}
        <Link to="/login" className="text-blue-600">
          Login
        </Link>
      </p>
    </form>
  );
}
