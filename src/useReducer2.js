import { useReducer } from "react";
// Step1: import {useReducer}
// Step2: 建立一個function, 有state及action兩個參數
//        並利用switch(action.type)建立多個控制state的動作
function myReducer(state, action) {
    switch (action.type) {
        case "A":
            return "Press A";
        case "B":
            return "Press B";
        case "C":
            return "Press C";
        default:
            return state;
    }
}

function ShowDiffText() {
    const [state, dispatch] = useReducer(myReducer, "Reducer Demo");//宣告useReducer
    return (
        <>
            <h2>{state}</h2>
            <div>
                <button onClick={() => dispatch({ type: "A" })}>A</button>
                <button onClick={() => dispatch({ type: "B" })}>B</button>
                <button onClick={() => dispatch({ type: "C" })}>C</button>
            </div>
        </>
    );
}
export default ShowDiffText;
// Step3: 呼叫useReducer並給予你的reducer func及初始狀態，
//        回傳的array[0]: state
//        回傳的array[1]: dispatch, 一種新的stateFunc,但他會自動連結你的reducer func，進行switch(action.type)的分析
// Step4: 我們用一個button的onClick事件來呼叫dispatch，並放入swtch中的case，來完成對應的動作