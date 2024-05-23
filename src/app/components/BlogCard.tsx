"use client";
import { useRouter } from "next/navigation";
import Category from "./Category";
const BlogCard = (props: any) => {
  const router = useRouter();
  const navigateToPage = (id: any) => {
    router.push("/posts/" + id);
  };
  return (
    <div
      className="flex gap-2 flex-col shadow-lg bg-[#f6f6f6] hover:bg-slate-200 p-3 rounded-xl justify-between"
      onClick={() => navigateToPage(props.blogData.id)}
    >
    <div className="flex flex-col gap-2 md:gap-3 justify-start">
      <img
        className="hidden md:block w-[95%] h-[220px] max-w-[500px] mx-auto rounded "
        src={props.blogData.image}
        alt="alt text"
      />
     <Category category={props.blogData.category} />
      
        <div className="flex flex-row gap-5 font-bold text-md md:text-lg text-wrap ">
          <img
            className="md:hidden w-[50px] h-[50px] rounded-full"
            src={props.blogData.image}
            alt="alt text"
          />
          {props.blogData.heading}
        </div>
        <p className="text-sm h-fit text-wrap  ">{props.blogData.summary}</p>
    </div>
    <div className="flex flex-row  justify-between text-sm md:text-md">
          <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbK-uDHZlg6fEBb9pu628Eg3m0yX1nm16zl9oLbFhuQ&s" className="inline w-[20px] h-[20px] rounded-full  md:w-[30px] md:h-[30px]"/> {props.blogData.author}</div>
          <p className="text-sm">{props.blogData.date}</p>
        </div>
      </div>
     
  );
};

export default BlogCard;
