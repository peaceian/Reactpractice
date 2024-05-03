// The useReducer Hook is similar to the useState Hook.
// It allows for custom state logic.
// If you find youself keeping track of multiple piece of state that rely on complex logic, useReducer may be useful.

// Syntax句法 useReducer Hook 接受兩個參數
// useReducer(<reducer>,<initialstate>)
// 該reducer函數包含自訂狀態邏輯，並且initialState可以是一個簡單的值，但通常會包含一個物件，
// Hook useReducer傳回目前值state和"dispatch"方法。
// useReducer in a counter app:
import { useReducer } from "react";
const initialTodos = [
    {
        id: 1,
        title: "Todo1",
        cmoplete: false,
    },
    {
        id: 2,
        title: "Todo2",
        complete: false,
    },
];
const reducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map(
                (todo) => {
                    if (todo.id === action.id) {
                        return { ...todo, complete: !todo.complete };
                    }
                    else {
                        return todo;
                    }
                }
            );
        default:
            return state;
    }
}
function Todos() {
    const [todos, dispatch] = useReducer(reducer, initialTodos);
    const handleComplete = (todo) => { dispatch({ type: "COMPLETE", id: todo.id }); };
    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <label>
                        <input type="checkbox" checked={todo.complete} onChange={() => handleComplete(todo)} />
                        {todo.title}
                    </label>
                </div>
            ))}
        </>
    );
}
export default Todos;
// step3: 呼叫useReducer並給予你的reducer func及初始狀態，
//        回傳的array[0]: state
//        回傳的array[1]: dispatch, 一種新的stateFunc,但他會自動連結你的reducer func，進行switch(action.type)的分析