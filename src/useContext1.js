// React Context is a way to manage state globally.
// It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
// 巢狀元件下，useState 和 useContext 一起使用會更好。
// state由最高父元素保存。假設元件stack的top and buttom需要存取狀態。要在沒有Context的情況下執行，需要將狀態作為"props"傳遞到每個巢狀元件。
// 稱為prop drilling。

// 就算中間元件不使用user也需要繼承下去，稱為prop drilling
import { useState } from "react";
function Component1(){
    const [user]=useState("Jesse Hall");
    return(
    <>
    <h1>{`Hello ${user} !`}</h1>
    <Component2 user={user}/>
    </>);
}
function Component2({user}){
    return(
    <>
    <h1>Component2</h1>
    <Component3 user={user}/>
    </>
    );
}
function Component3({user}){
    return(
    <>
    <h1>Component3</h1>
    <Component4 user={user}/>
    </>
    );
}
function Component4({user}){
    return(
    <>
    <h1>Component4</h1>
    <Component5 user={user}/>
    </>
    );
}
function Component5({user}){
    return(
    <>
    <h1>Component5 {`Hello ${user} again!`}</h1>
    </>
    );
}

export default Component1