"use client";
import { useParams } from "next/navigation";
import blogs from "@/app/blogs";
import Navbar from "@/app/components/NavBar";
import Category from "@/app/components/Category";
import Footer from "@/app/components/Footer";
import Transition from "@/app/components/Transition";
const getBlogData = (id: any) => {
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].id === id) return { found: true, blog: blogs[i] };
  }
  return { found: false, blog: {heading:"",image:"",category:"",date:"",content:"", author:"" }};
};

export default function Home() {
  const router = useParams();
  const blogData = getBlogData(router.id);

  return (
   <Transition>
    <div className="bg-white">
       <Navbar/>
      {blogData.found ? (
        <div className="h-full  flex flex-col gap-2 my-3 w-[90%] md:w-[80%] mx-auto">
          <h1 className="text-3xl font-bold text-center">{blogData.blog.heading}</h1>
          <div className="mx-auto text-lg"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbK-uDHZlg6fEBb9pu628Eg3m0yX1nm16zl9oLbFhuQ&s" className="inline w-[20px] h-[20px] rounded-full  md:w-[30px] md:h-[30px] "/> {blogData.blog.author}</div>
          {/* <p className="text-lg md:text-xl text-center ">{blogData.blog.author}</p> */}
          <img src={blogData.blog.image} className="w-[70%] md:w-[60%] md:h-[45%] mx-auto my-5"/>
          <div className="flex flex-row justify-between">
            <Category category={blogData.blog.category}/>
            <p className="text-sm md:text-lg">{blogData.blog.date}</p>
          </div>
          <div className="text-sm md:text-lg flex flex-col gap-3">
          {blogData.blog.content.split("\n").map((line:any)=> {return (<p>{line}</p>)})}
          </div>
        </div>
      ) : (
        <div className="h-screen text-center text-bold text-xl"> Not found</div>
      )}
      <Footer/>
    </div>
    </Transition>
   
  );
}


// export const getStaticProps = ()=>{
//   //fetch request here

//   const router = useParams()
//   blogs.forEach(element => {
//     if(element.id===router.id)
//       return {props:{found:true, element}}
//   });

//   return {
//     props: {props:{found:false}}
//   }
// }
