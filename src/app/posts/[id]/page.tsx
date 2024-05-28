"use client";
import { useParams } from "next/navigation";
import blogs from "@/app/blogs";
import Navbar from "@/app/components/NavBar";
import Category from "@/app/components/Category";
import Footer from "@/app/components/Footer";
import Transition from "@/app/components/Transition";
import useFetchData from "@/hooks/useFetchData";

export default function Home() {
  const router = useParams();
   const url= "https://jsonplaceholder.typicode.com/posts/"+router.id
  console.log(url)
  const [post] = useFetchData(url)

  return (
   <Transition>
    <div className="bg-white">
       <Navbar/>
       {post[0]!=="loading" ? (
        <div className="h-full  flex flex-col gap-2 my-3 w-[90%] md:w-[80%] mx-auto">
          <h1 className="text-3xl font-bold text-center">{post.title}</h1>
          {/* <div className="mx-auto text-lg"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbK-uDHZlg6fEBb9pu628Eg3m0yX1nm16zl9oLbFhuQ&s" className="inline w-[20px] h-[20px] rounded-full  md:w-[30px] md:h-[30px] "/> {blogData.blog.author}</div> */}
          {/* <p className="text-lg md:text-xl text-center ">{blogData.blog.author}</p> */}
          {/* <img src={"https://picsum.photos/100?random="+post.id} className="w-[30%] h-[20%] md:w-[60%] md:h-[45%] mx-auto my-5"/>  */}
          <div className="flex flex-row justify-between">
             <Category category={"Post"}/> 
            {/* <p className="text-sm md:text-lg">{blogData.blog.date}</p> */}
          </div>
          <div className="text-sm md:text-lg flex flex-col gap-3">
          {post.body.split("\n").map((line:any)=> {return (<p>{line}</p>)})}
          </div>
        </div>
      ) : (
        <div className="h-screen text-center text-bold text-xl"> Loading! </div>
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
