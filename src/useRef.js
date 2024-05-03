// 可用於儲存可變值(value)，該值在更新時不會重新導致重新渲染。可用於直接存取DOM元素。
// 不會重新渲染
// https://hsuan.info/2023/09/03/16-react-useref/

// useState()用於儲存與元件渲染相關的狀態數據，這些數據會觸發元件的重新渲染。
// useRef()用於儲存不需要觸發重新渲染的數據，例如DOM元素的參考、計時器ID、上一次渲染的值等。 它也用於在effect之間共享可變值。
import { useState,useEffect,useRef } from "react";

function Refcount(){
    const [inputValue,setInputValue]=useState("");
    const count = useRef(0);//從零開始
    // count.current從DOM的count節點current中找數值，就是從useRef()中找數值
    
    useEffect(
        ()=>{count.current=count.current+1;}
    );
    
    return(<>
    <input 
    type="text"
    value={inputValue}
    onChange={(e)=>setInputValue(e.target.value)}/>
    <h1>RenderCount:{count.current}</h1>
    </>
    );
}
export default Refcount;

// useRef() only returns one item. It returns an Object called current.
// When we initialize useRef we set the initial value: useRef(0).