// State can Hold what?
// The useState Hook can be use to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!
// 我們可以創建多個state hooks 來追蹤多個值。
import { useState } from "react";
function MyCar(){
    // const [brand,carbrand]=useState("Ford");
    // const [model,carmodel]=useState("Mustang");
    // const [year,caryear]=useState("1964");
    // const [color,carcolor]=useState("red");
    const [brand]=useState("Ford");
    const [model]=useState("Mustang");
    const [year]=useState("1964");
    const [color]=useState("red");
    return(<>
    <h1>My {brand}(useState("Ford"))</h1>
    <p>It is a {color} {model} from {year}.</p>
    </>
    )
}

export default MyCar;