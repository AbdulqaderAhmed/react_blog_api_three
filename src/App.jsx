import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoutes from "./private/PrivateRoutes";
import Home from "./components/blog/Home";
import { useSelector } from "react-redux";
import Create from "./components/blog/Create";
import Header from "./include/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const { user } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.blog);
  return (
    <Router>
      <header>{user && !isLoading && <Header />}</header>
      <main className="container">
        <Routes>
          <Route path="/" element={<PrivateRoutes component={Home} />} />
          <Route
            path="/create"
            element={<PrivateRoutes component={Create} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <ToastContainer autoClose={true} />
    </Router>
  );
}
