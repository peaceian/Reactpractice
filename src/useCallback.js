// React useCallback Hook 傳回一個記憶的callback函數，透過useCallback可以對一個函式重新執行的時機作出控制
// Think of memorization as cashing a value so that it does not need to be recalculated.
// 快取值使其不需要重新計算。
// 這使我們能夠隔離資源密集型函數，以便他們不會在每個渲染上自動運行。
// useCallback僅在其依賴項之一更新時運行。這可以提高效能。

// useMemo傳回一個記憶值，useCallback傳回一個記憶函數，useCallback是將一個函式包覆並將函式記憶起來，最後回傳記憶的函式
// ***useCallback:記憶的是函式
// ***useMemo:記憶的是函式執行後的回傳值

import { useState,useCallback } from "react";
import Todos from "./Todos";
const Callback=()=>{
    const [count,setCount]=useState(0);
    const [todos,setTodos]=useState([]);
    const increment=()=>{
        setCount((c)=>c+1);
    };
    //count function
    const addTodo=useCallback(()=>{
        setTodos((t)=>[...t,"New Todo"]);
    },[]);
    // 可以不用寫[todos]
    //定義Todos不會被一起render

    return(
        <>
        <h1>useCallback不會渲染函式</h1>
        <Todos todos={todos} addTodo={addTodo}/>
        {/* Todos function 的位置，要提出的值 */}
        <div>
            Count:{count}
            <button onClick={increment}>+</button>
        </div>
        </>
    );
}

export default Callback;