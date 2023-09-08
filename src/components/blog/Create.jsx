import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../../features/blog/blogSlice";

export default function Create() {
  const { isError } = useSelector((state) => state.blog);
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    image: null,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBlog(blogData));

    if (!isError) {
      navigate("/");
    }
  };

  //   useEffect(() => {
  //     if (!isError) {
  //       navigate("/");
  //     }
  //   }, [isError]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center my-40 gap-5 bg-slate-200 w-2/3 mx-auto rounded-lg"
    >
      <h2 className="text-2xl text-center font-medium border-b-2 bg-slate-400 border-b-slate-400 w-full p-1">
        Create Post
      </h2>

      <div className="flex flex-row gap-5">
        <label htmlFor="title" className="text-lg font-medium">
          Title:
        </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
          className="px-3"
        />
      </div>

      <div className="flex flex-row gap-7">
        <label htmlFor="description" className="text-lg font-medium">
          Description:
        </label>
        <input
          type="description"
          name="description"
          id="description"
          onChange={(e) =>
            setBlogData({ ...blogData, description: e.target.value })
          }
          className="px-3"
        />
      </div>

      <div className="flex flex-row gap-7">
        <label htmlFor="image" className="text-lg font-medium">
          Image:
        </label>
        <input
          type="file"
          name="image"
          id="image"
          onChange={(e) =>
            setBlogData({ ...blogData, image: e.target.files[0] })
          }
          className="px-3"
        />
      </div>

      <button
        type="submit"
        className="bg-zinc-400 p-1 my-5 text-lg font-semibold w-1/3 rounded-md"
      >
        Create
      </button>
    </form>
  );
}
