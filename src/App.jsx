import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoutes from "./private/PrivateRoutes";
import Home from "./components/blog/Home";
import { useSelector } from "react-redux";
import Create from "./components/blog/Create";
import Header from "./include/Header";

export default function App() {
  const { user } = useSelector((state) => state.auth);
  return (
    <Router>
      <header>{user && <Header />}</header>
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
    </Router>
  );
}
