import { useState } from "react";
function MyTextarea(){
    const [textarea, setTextarea] = useState('The content of a textarea goes in the value attribute');
    const handleChange = (event)=>{
        setTextarea(event.target.value)
    }
    const handleSubmit = ()=>{
        console.log(textarea);
    }
    return(
        <><h2>Textarea(之後再修改到提交後不出錯)</h2>
        <form onSubmit={handleSubmit}>
            <textarea onChange={handleChange} value={textarea}/>
            {/* <input type='submit'/> */}
        </form>
        </>
    )
}
export default MyTextarea
//React中textarea value被放置在value屬性中，使用useState Hook管理文字區域的值