// The useRef Hook can also be used to keep track of provious state values.
// useRef 也可用於追蹤先前的狀態值。
// This is because we are able to useRef values between renders.
// useRef能夠在渲染之間保留值。

import { useState,useEffect,useRef } from "react";
function StateTracking(){
    const [nowValue,newValue]=useState("");
    const PreviousValue = useRef("");
    useEffect(
        ()=>{PreviousValue.current=nowValue},[nowValue]
    );
    //useRef保留的就是目前的數值，用useEffect避免渲染useEffct({},[]);兩個參數
    return(
        <>
        <br />
        <h1>Tracking State Changes</h1>
        <input type="text" value={nowValue} onChange={(e)=>newValue(e.target.value)}/>
        <h2>Current Value:{nowValue}</h2>
        <h2>PreviousValue:{PreviousValue.current}</h2>
        </>
    );
}
export default StateTracking;
// PreviousValue.current要完整，不然頁面出不來