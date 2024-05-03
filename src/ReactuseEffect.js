// useEffect可在元件中執行副作用(render後才執行)最大的用處在避免迴圈
// some example of side effects are: fetching data, directly update, the Dom, and Timers.

// useEffect accepts two arguments. The second argument is optional.兩個參數，第二個參數可選。
// useEffect(<function>,<dependency>)
import { useEffect,useState } from "react";
function Timer(){
    const [nowcount,newcount]=useState(0);
    useEffect(
        ()=>{
            setTimeout(
                ()=>{
                    newcount(
                        (count)=>count+1
                    );
                },1000
            );
        },[]// <- add empty brackets here
    );
    return(<h1>I have rendered {nowcount} times!</h1>);

}

export default Timer