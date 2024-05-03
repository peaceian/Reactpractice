import {useState} from 'react';
//no handleChange
function TestForm(){
    const [name,setName]= useState('');//const the [get,set]= useState()--event
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        alert(`The name you entered was: ${name}`);
    }//using ``
    return(
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input 
                type='text' 
                value={name} 
                onChange={(e)=>setName(e.target.value)} />
            </label>
            <input type='submit'/>
        </form>
    )
}
export default TestForm;
//useState could storage the latest data in Component.
//Event(e)->using "e.target.value" to get value 
//<input type='text' value={name} onChange={(e)=>setName(e.target.value)} /> value substitutes value--> name
//setName(e.target.value) the value in target of the event.
//onChange could control the new added event process.






//onChange={(e)=>setName(e.target.value)} is same the following:

// function clickHandler(e){
    // setName(e.terget.value)
// }
//  <input type='text'
//         value={name}
//         onChange={clickHandler} />
