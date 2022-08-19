import { useEffect, useState } from "react";

const LoadStory=()=>{
    const [story,setStory]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setStory(data))
    },[])
    return [story,setStory];
}
export default LoadStory;