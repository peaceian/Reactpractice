/* 如果元件props沒有變更過，使用memo將造成React跳過渲染元件。這可以促進工作效能。
EX:範例中，Todos即使代辦事項未更改，元件也會重新呈現index.js。*/
import {useState} from 'react';
import Todos from './Todos';
const Memo = () => {
    const [count,setCount]=useState(0);
    const [todos,]=useState(['todo1','todo2']);
    //起始為0
    // const [todos,setTodos]=useState(['todo1','todo2']);本為正式寫法，但是一直報錯    


    const increment=()=>{
        setCount((c)=>c+1);
    };
    return(
        <>
        <h3>使用memo使todos不跟著重新更新</h3>
        <Todos todos={todos} />
        <hr/>
        <div>
            Count:{count}
            <button onClick={increment}>+</button>
        </div>
        </>
    );
};

export default Memo;