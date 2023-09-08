import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoutes from "./private/PrivateRoutes";
import Home from "./components/blog/Home";

export default function App() {
  return (
    <Router>
      <header>
        <h2>Header</h2>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<PrivateRoutes component={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </Router>
  );
}
