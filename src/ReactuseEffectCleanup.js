import { useState,useEffect } from "react";
function ClearTimer(){
    const [nowtime,newtime] =useState(0);
    useEffect(
        ()=>{
            let timer = setTimeout(
                ()=>{newtime((c)=>c+1);
            },1000);
        return()=>clearTimeout(timer)
        },[]
        // return clear coded in useEffect().
    );
    return<h1>I've rendered {nowtime} times !(重新渲染會清空計數)</h1>;
}
export default ClearTimer