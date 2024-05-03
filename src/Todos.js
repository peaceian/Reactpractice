import { memo } from "react";
const Todos = ({todos,addTodo}) =>{
    console.log('child render');
    return(
        <>
        <h2>My Todos</h2>
        {todos.map((todo,index)=>{
            return(<p key={index}>{todo}</p>)
        })}
        <button onClick={addTodo}>addTodo</button>
        </>
    );
};
// export default Todos;
export default memo(Todos);
//沒有用memo時，<p></p>會因為計數器重新渲染跟著重新渲染
//跟ReactMemo.js一起看
// 增加addTodo,index,key={index},onClick={addTodo}，可以生成<p></p>
// ({todos, addTodo}) 是一个參數解構的語法，用於從傳入的 props 對象中提取 todos 和 addTodo 兩個屬性，並將它們分别賦值給變量 todos 和 addTodo。
// 具體來說，这段代码在函数参数中使用了对象解构的语法，它告诉 JavaScript 解析器从传入的 props 对象中提取名为 todos 和 addTodo 的属性，
// 并将它们赋值给本地变量 todos 和 addTodo。这样做可以方便在函数体内直接使用这两个属性，而不需要通过 props 对象来访问。