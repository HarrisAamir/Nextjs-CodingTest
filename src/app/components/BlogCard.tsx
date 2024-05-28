"use client";
import { useRouter } from "next/navigation";
import Category from "./Category";
import { wrapper } from "@/store";

const getFirstWords = (text: string, wordCount = 4) => {
  return (
    text.split(" ").slice(0, wordCount).join(" ") +
    (text.split(" ").length > wordCount ? "..." : "")
  );
};
const BlogCard = (props: any) => {
  const router = useRouter();
  const navigateToPage = (id: any) => {
    router.push("/posts/" + id);
  };
  return (
    <div
      className="flex gap-2 flex-col shadow-lg bg-[#f6f6f6] hover:bg-slate-200 p-3 rounded-xl justify-between"
      onClick={() => {
        navigateToPage(props.blogData.id);
      }}
    >
      <div className="flex flex-col gap-2 md:gap-3 justify-start">
        <img
          className="hidden md:block w-[95%] h-[220px] max-w-[500px] mx-auto rounded "
          src={"https://picsum.photos/200/300?random=" + props.blogData.id}
          alt="alt text"
        />
        <Category category="Post" />

        <div className="flex flex-row gap-5 font-bold text-md md:text-lg text-wrap ">
          <img
            className="md:hidden w-[50px] h-[50px] rounded-full"
            src={"https://picsum.photos/200/200?random=" + props.blogData.id}
            alt="alt text"
          />
          {props.blogData.title}
        </div>
        <p className="text-sm h-fit text-wrap">
          {getFirstWords(props.blogData.body)}
        </p>
      </div>
      <div className="flex flex-row  justify-between text-sm md:text-md">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbK-uDHZlg6fEBb9pu628Eg3m0yX1nm16zl9oLbFhuQ&s"
            className="inline w-[20px] h-[20px] rounded-full  md:w-[30px] md:h-[30px]"
          />{" "}
          {props.blogData.userId}
        </div>
        {/* <p className="text-sm">{props.blogData.date}</p> */}
      </div>
    </div>
  );
};

export default BlogCard;
