// 使用useContext,createContext
// To create context, you must Import createContext and initialize it:
// 變數定義成createContext()之後用變數操作
// useContext再使用createContext()保留的值
// CreateContext(),useContext()全域管理，傳送狀態用
import { useState,useContext,createContext } from "react";

const UserContext = createContext();
// createContext needed to initialize
function Component11(){
    const [user]=useState('Jesse Hall');
    return(
        // UserContext變成一個屬性，.Provider將value視為提供源
        <UserContext.Provider value={user}>
        <h1>{`Hello ${user} !`}</h1>
        <Component22 />
        </UserContext.Provider>
    );
}
function Component22(){
    return(
        <>
        <h1>Component22</h1>
        <Component33 />
        </>
    );
}
function Component33(){
    return(
        <>
        <h1>Component33</h1>
        <Component44 />
        </>
    );
}
function Component44(){
    return(
        <>
        <h1>Component44</h1>
        <Component55 />
        </>
    );
}
function Component55(){
    // 重點，需要引用的元件中要用useContext()並提取createContext()的值
    const number5 = useContext(UserContext);
    // 


    return(
        <>
        <h1>{`Hello ${number5} again!`}</h1>
        </>
    );
}

export default Component11;