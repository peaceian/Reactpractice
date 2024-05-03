// Hook are reusable functions.重複使用
// When you have component logic that needs to br used by multiple components, we can extract that logic to a custom Hook.
// Custom Hooks start with "use". Example: useFetch規定"use"開頭。
// Build a Hook
// In the code, we are fetching data in our Home component and displaying it.
// We will use the JSONPlaceholder service to fetch fake data.
// This service is great for testing applications when there is existing data.
// Use the JSONPlaceholder service to fetch fake "todo" items and display the titles on the page:
import { useState,useEffect } from "react";
const Home =()=>{
    const [data,setData]=useState(null);
    useEffect(
        ()=>{
            fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res)=>res.json())
            .then((data)=>setData(data));
        },[]
    );
    return(
        <>
        {data && data.map((opendata)=>{
            return<p key={opendata.id}>{opendata.id}. {opendata.title}</p>;
        })}
        </>
    );//data && data.map();，先判斷data是否為真(不為null或undefined)，為真的話用map()遍歷
};
export default Home;