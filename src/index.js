import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';//import CSS
import App from './App';
import Hello from './Hello.js';
import Car from './practice1.js';
import Message from './test1.js';
import Element from './test2table.js';
import Fivefive from './test3.js';
import List from './test4list.js';
import OneTopLevelElement from './test5onetoplevelelement.js';
import Ifelse from './test6ifelse.js';
import Verysimple from './ternaryexpressions.js';
import Car2 from './Component.js';
import Paper from './Properties.js';
import Garage from './Propspassdata.js';
import Football1 from './AddEvent.js';
import Football2 from './AddEventsPassingArguments.js';
import Football3 from './AddEventReactEventObject.js';
import Goal from './ReactConditionalRendering.js';
import MyGarage from './Logical && Operator.js';
import Basket from './ReactLists.js';
import Brand from './keys.js';
import Brand2 from './key2.js';
import MyForm from './ReactForm.js';
import TestForm from './ReactSubmittingForms.js';
import StateForm from './ReactFormuseState.js';
import MyTextarea from './Textarea.js';
import MySelect from './Select.js';
import Page from './App/index.js';
import Memo from './ReactMemo.js';
import FavoriteColor from './ReactHook.js';
import MyCar from './StateHold.js';
import MyCar2 from './StateHold2.js';
import MyCar3 from './UpdatintgObjectsandArrays.js';
import Timer from './ReactuseEffect.js';
import Counter from './ReactuseEffect2.js';
import MultipleuseEffect from './ReactusEffectMultiple.js';
import ClearTimer from './ReactuseEffectCleanup.js';
import Component1 from './useContext1.js';
import Component11 from './useContext2.js';
import Refcount from './useRef.js';
import RefDOM from './useRefDOM.js';
import StateTracking from './useRefTrackingStateChanges.js';
import Todos from './useReducer.js';
import ShowDiffText from './useReducer2.js';
// import TicTacToe from './TicTacToe.js'
import reportWebVitals from './reportWebVitals';
import Counter2 from './useReducer3.js';
import Counter3 from './useReducer4.js';
import Callback from './useCallback.js';
import TestuseMemo from './useMemo.js';
import Home from './CustomHook/Home.js';
import SweetHome from './CustomHook/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    <Hello />
    <Car brand='toyota' />
    <Message />
    {/* <TicTacToe /> */}
    <Element />
    <Fivefive />
    <List />
    <OneTopLevelElement />
    <Ifelse />
    <Verysimple />
    <Car2 />
    <Paper color='red' />
    <Garage />
    <Football1 />
    <Football2 />
    <Football3 />
    <Goal isGoal='True'/> {/* <Goal isGoal={prompt('React Conditional Rendering: True/False')}/> */}
    <MyGarage />
    <Basket />
    <Brand />
    <Brand2 />
    <MyForm />
    <TestForm />
    <StateForm />
    <MyTextarea />
    <MySelect />
    <Page />
    <Memo />
    <FavoriteColor />
    <MyCar />
    <MyCar2 />
    <MyCar3 />
    <Timer />
    <Counter />
    <MultipleuseEffect />
    <ClearTimer />
    <Component1 />
    <Component11 />
    <Refcount />
    <RefDOM />
    <StateTracking />
    <Todos />
    <ShowDiffText />
    <Counter2 />
    <Counter3 />
    <Callback />
    <TestuseMemo />
    <Home />
    <SweetHome />


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*<React.StrictMode> 
包覆的元件都會具備以下效果
發現擁有不安全生命週期的 component
警告使用了 legacy string ref API
警告使用到了被棄用的 findDOMNode
偵測意想不到的副作用
偵測 legacy context API
確保可重用的 state
*/