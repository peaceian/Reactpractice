// Here is an example of a useEffect Hook that is dependent on a variable. If the count variable updates, 
// the effect will run again.依賴變數的Hook範例，如果count變數更新，效果再次運行。
import { useState,useEffect } from "react";
function Counter(){
    const [nownumber,newnumber]=useState(0);
    const [calculation,newcalculation]=useState(0);
    
    // const Newcount=()=>{
    //     newnumber((c)=>c+1);
    // }
    // 第一種寫法


    useEffect(
        ()=>{newcalculation(()=>nownumber*6);
        },[nownumber]
    );
    // If there are multiple dependencies, they should be included in the useEffect dependency array.
    // 若有多個依賴數，就將他們包含在依賴數組中(array)

    // 第二種寫法
    //add the count variable here，依賴變數的更新
    return(
        <>
        <p>Count:{nownumber}</p>
        {/* <button onClick={Newcount}>+</button>第一種寫法 */}
        <button onClick={()=>newnumber((c)=>c+1)}>+</button>
        {/* 第二種寫法 */}
        <p>Calculation:{calculation}</p>
        </>
    );
}
export default Counter