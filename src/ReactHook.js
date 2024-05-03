import { useState } from "react";
function FavoriteColor(){
    const[nowcolor,newcolor]=useState('Red');
    return(<>
    <h1>My Favorite Color is {nowcolor}!</h1>
    <button type="button" onClick={()=>newcolor("Blue")}  style={{color:'blue',fontSize:'1.5rem'}}>Blue</button>
    <button type="button" onClick={()=>newcolor("Red")} style={{color:'red',fontSize:'1.5rem'}}>Red</button>
    <button type="button" onClick={()=>newcolor("Green")} style={{color:'green',fontSize:'1.5rem'}}>Green</button>
    <button type="button" onClick={()=>newcolor("Pink")} style={{color:"pink",fontSize:'1.5rem'}}>Pink</button>
    </>);
}

export default FavoriteColor;

// Hook rules 
// Hooks 只能在React 函數元件內部呼叫。
// Hooks只能在元件頂層呼叫。
// Hooks不能是有條件的。
// React useState Hook allows us to track state in a function component.
// React useState 允許我們在函數元件中追蹤狀態。
// State generally refers to data or properties that needs to be tracking in an application.
// 狀態通常是指程式中需要被追蹤的資料或屬性。

// import {useState} from 'react'
// function FavoriteColor(){
// const [color,setColor]=useState('');}
// 名稱是變量，可隨意命名。設定初始狀態是空字串:useState("")
// [currentstate,updatedstate]=useState("");
