// Accessing DOM Elements
// 在React中，我們可以在ref向元素添加屬性以直接在DOM中存取它。
// Use useRef to focus the input:
import { useRef } from "react";

function RefDOM(){
    const inputElement = useRef();
    // 先定義useRef()
    const focusInput = () =>{
        inputElement.current.focus();
    };
    // focus():jQuery事件
    return(<>
    <input type="text" ref={inputElement}/>
    <button onClick={focusInput}>Focus Input</button>
    </>);
}
// put button will focus the input frame.按下按鈕會聚焦在輸入框。
export default RefDOM;