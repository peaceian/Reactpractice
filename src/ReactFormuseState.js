/*Handing Form
資料更改值或提交時如何處理資料、HTML中表單資料由DOM處理，React中由Component處理。
元件處理資料時，所有資料都儲存在元件狀態(state)中，可以透過onChange在屬性中新增事件處理程序來控制。
可以使用"useState"Hook追蹤每個輸入值，並為整個應用程式提供"單一事件來源"。*/
/*Multiple Input Fields
You can control the values of more than one input field by adding a name attribute to each element.
We will initialize our state with an empty object.
To access the fields in the event handler use the event.target.name and event.target.value syntax.
To update the state, use square brackets [bracket notation] around the property name.*/ 


import {useState} from 'react';
// import useState
// HTML is created first that better to create a function part after.
function StateForm(){
    const [inputs, setInputs] = useState({}); 
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values =>({...values,[name]:value}))
    }
    //...表示存住的數值value
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }
    //onChange={(e)=>setInputs(e.target.value)} edited into onChange={handleChange}
    //and const handleChange = (event) =>{const name=;const value=; setInputs(value=>({...values,[name]:value}))}
    //return is created first
    return(
        <><h2>useState storage the values</h2>
    <form onSubmit={handleSubmit}>
        <label>Enter Your Name:
            <input type="text" name="username" value={inputs.username||""} onChange={handleChange} />
        </label>
        <label>Enter Your Age:
            <input type="number" name="age" value={inputs.age||""} onChange={handleChange} />
        </label>
        <input type="submit"/>
    </form></>)
}
export default StateForm;