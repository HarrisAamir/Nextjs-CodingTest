"use client";
import blogs from "@/app/blogs.js";
import BlogCard from "@/app/components/BlogCard";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Transition from "../components/Transition";
import React from "react";
import useFetchData from "@/hooks/useFetchData";

function Home() {
  const [posts] = useFetchData("https://jsonplaceholder.typicode.com/posts");
  return (
    <Transition>
      <div className="h-100 bg-white">
        <Navbar />
        {posts[0] == "loading" ? (
          <div>Loading!</div>
        ) : (
          <>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-3 gap-3 md:gap-5 mx-auto max-w-[1200px] md:max-w-[80%] ">
              {posts.map((p: any) => {
                return <BlogCard blogData={p} key={p.id} />;
              })}
            </div>
          </>
        )}
        <Footer />
      </div>
    </Transition>
  );
}

export default Home;
