import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex flex-row gap-20 bg-slate-400 p-4 pl-10 shadow-lg shadow-slate-500">
      <h1 className="text-3xl font-extrabold">Daily Blog</h1>

      <ul className="flex flex-row gap-10 text-lg font-medium pt-1">
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/create">Create </Link>
        </li>
      </ul>
    </div>
  );
}
