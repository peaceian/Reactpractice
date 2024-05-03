import { useReducer } from "react";

const initialState = {count:0};
function reduce(state,action){
    switch(action.type){
        case"plus":
        return{count:state.count+1};
        case"minus":
        return{count:state.count-1};
        default:
            throw new Error();
    }
}
function Counter3(){
    const [state,dispatch]=useReducer(reduce,initialState);
    return(
        <>
        <div>
            <p>you clicked {state.count} times!</p>
            <button onClick={()=>{dispatch({type:"plus"})}}>+</button>
            <button onClick={()=>{dispatch({type:"minus"})}}>-</button>
        </div>
        </>
    )
}
export default Counter3