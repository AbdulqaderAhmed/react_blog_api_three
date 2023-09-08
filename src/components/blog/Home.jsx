import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../features/blog/blogSlice";

export default function Home() {
  const { data } = useSelector((state) => state.blog);
  const { user } = useSelector((state) => state.auth);
  const { token } = user.user;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs(token));
  }, []);
  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      {data &&
        data.map((item, index) => {
          return (
            <div
              key={index}
              className=" mt-5 shadow-lg shadow-slate-500 rounded-xl"
            >
              <img
                src={`http://localhost:3000/upload/${item.image}`}
                alt={item.title}
                className="border-b-2 border-b-slate-400 w-72 h-1/2"
              />
              <h2 className="p-3 text-lg font-medium">{item.title}</h2>
            </div>
          );
        })}
    </div>
  );
}
