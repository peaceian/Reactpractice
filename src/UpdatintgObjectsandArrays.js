import { useState } from "react";
function MyCar3(){
    const[car,setCar]=useState({
        brand:"Ford",
        model:"Mustang",
        year:"1964",
        color:"red"
    });
    const updateColor=()=>{
        setCar(presentState=>{
            return{...presentState,color:'blue'}
        });
    }
    // 用presentState保留舊資料

    const updateBrand=()=>{
        setCar(presentState=>{
            return{...presentState,brand:'Toyota'}
        });
    }
    // 用presentState保留舊資料

    const updateModel=()=>{
        setCar(presentState=>{
            return{...presentState,model:'Collora'}
        });
    }
    // 用presentState保留舊資料，沒有使用則onClick的話不會出現其他數值

    const updateYear=()=>{
        setCar(presentState=>{
            return{...presentState,year:'2020'}
        });
    }

    const resetCar=()=>{
        setCar(()=>{
            return{
            brand:"Ford",
            model:"Mustang",
            year:"1964",
            color:"red"
            }
        });
    }
    // 用presentState保留舊資料，順序不影響結果
    return(
        <>
        <h1>My {car.brand} (useState(`brand:"Ford"`))</h1>
        <p>It is a {car.color} {car.model} from {car.year}.</p>
        <button onClick={updateColor} type="button">Blue</button>
        <button onClick={()=>setCar(presentState=>{return{...presentState,color:'black'}})} type="button">Black</button>

        <button onClick={updateBrand} type="button">Toyota</button>
        <button onClick={()=>setCar(presentState=>{return{...presentState,brand:'Benz'}})} type="button">Benz</button>
        
        <button onClick={updateModel} type="button">collora</button>
        <button onClick={()=>setCar(presentState=>{return{...presentState,model:'C300'}})} type="button">C300</button>
        
        <button onClick={updateYear} type="button">2020</button>
        <button onClick={()=>setCar(presentState=>{return{...presentState,year:'1990'}})} type="button">1990</button>

        <button onClick={resetCar} type="button">Reset</button>


        </>
    )
}
// 第二種是共歸個updateXXXX搬入onClick內底。
export default MyCar3
// 因為有多個數值，如果只要改變color，要用...previousState保留不變的數值