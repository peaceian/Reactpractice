// The React useMemo Hook return a memoried value 回傳記億數值。
// Think of memoization as cashing a value so that it does not need to be recalulated.不會重新計算。
// The useMemo only runs when one of its dependencies update.僅在依賴項之一更新時運作。
// useMemo 返回記憶值。
// useCallback返回記憶函數。
// This can improve performance.
// The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.
// useMemo可防止量大的資源密集函數不必要地運作。

import { useState, useMemo } from "react";
const TestuseMemo = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);
    // 把原本expensiveCalculation(count)套進useMemo();使其不會重新渲染。
    // useMemo類似把停止外部渲染換成停止內部渲染

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        console.log("New Todo!");
        setTodos((t) => [...t, "NewMTFK"]);
    };

    
    return (
        <div>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => { return <p key={index}>{todo}</p>; })}
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <div>
                Count:{count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
                {/* calculation不會跟著addTodo一起更新 */}
            </div>
        </div>
    );
    
};

// 把整個計算函式當作是外部函式，這樣子就類似memo(function)對外部function限制更新
const expensiveCalculation = (num) => {
    console.log("Calculating......");
    for (let i = 0; i < 10000000; i++) {
        num += 1;
    }
    return num;
}

export default TestuseMemo;