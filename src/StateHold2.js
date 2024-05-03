import { useState } from "react";
function MyCar2(){
    const[car]=useState({
        brand:"Ford",
        model:"Mustang",
        year:"1964",
        color:"red"
    });
    return(
        <>
        <h1>My {car.brand} (useState(`brand:"Ford"`))</h1>
        <p>It is a {car.color} {car.model} from {car.year}.</p>
        </>
    )
}
export default MyCar2