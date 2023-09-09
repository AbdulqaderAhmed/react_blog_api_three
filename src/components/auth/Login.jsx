import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import { ClimbingBoxLoader } from "react-spinners";

export default function Login() {
  const { user, isError, isLoading } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notify = () =>
    toast.error("🦄 Wow so easy!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(userData));
  };

  useEffect(() => {
    if (user && !isError) {
      navigate("/");
    }
  }, [isError, user, isLoading]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClimbingBoxLoader
          color="grey"
          loading={isLoading}
          aria-label="Loading Spinner"
          size={20}
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center my-40 gap-5 bg-slate-200 w-2/3 mx-auto rounded-lg"
    >
      <h2 className="text-2xl text-center font-medium border-b-2 bg-slate-400 border-b-slate-400 w-full p-1">
        Login
      </h2>

      <div className="flex flex-row gap-5">
        <label htmlFor="username" className="text-lg font-medium">
          Username:
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

      <div className="flex flex-row gap-7">
        <label htmlFor="password" className="text-lg font-medium">
          Password:
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
        onClick={notify}
      >
        Login
      </button>

      <p className="text-md font-medium pb-5">
        Dont have an account?{" "}
        <Link to="/register" className="text-blue-600">
          Register
        </Link>
      </p>
    </form>
  );
}
