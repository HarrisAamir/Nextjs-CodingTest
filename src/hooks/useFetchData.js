import {useEffect, useState} from "react";

function useFetchData(url){

    const [data,setData]=useState(["loading"])
    const getData = async ()=>{
        try {
            const res = await fetch(url);
            const jsonData = await res.json();
            setData(jsonData);
          } catch (error) {
            console.log("Error fetching data:", error);
          }
    }
    useEffect(()=>{
        getData()
    },[])
    
    return [data]
}

export default useFetchData