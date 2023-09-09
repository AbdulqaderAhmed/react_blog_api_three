import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../features/blog/blogSlice";
import { ClimbingBoxLoader } from "react-spinners";
import { AiOutlineMore } from "react-icons/ai";

export default function Home() {
  const { data, isLoading } = useSelector((state) => state.blog);
  const { user } = useSelector((state) => state.auth);
  const { token } = user.user;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs(token));
  }, []);

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
    <>
      <div className="grid grid-cols-4  gap-5 p-5">
        {data &&
          data.map((item, index) => {
            return (
              <div
                className=" mt-5 shadow-lg shadow-slate-500 rounded-xl"
                key={index}
              >
                <img
                  src={`http://localhost:3000/upload/${item.image}`}
                  alt={item.title}
                  width={300}
                  className="border-b-2 border-b-slate-400 h-3/5"
                />

                <div className="flex flex-row justify-between px-1">
                  <h2 className="p-3 text-lg font-medium">{item.title}</h2>
                  <AiOutlineMore className="my-3 text-xl font-medium" />
                </div>
                <p className="p-3 text-md font-normal">{item.description}</p>
              </div>
            );
          })}
        {!data && (
          <div className="flex justify-center items-center my-20">
            <h2 className="text-2xl font-semibold">No blogs found.</h2>
          </div>
        )}
      </div>
    </>
  );
}
