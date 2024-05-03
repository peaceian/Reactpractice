import React from "react";

const myStyle = {
    color: 'whitesmoke',
    border: 'groove 3px whitesmoke',
    fontFamily: 'Times'
}

function Car(props) {
    return <>
    <h2 style={myStyle}>
        Hello, this is a practice! The props car brand is {props.brand}!
    </h2>
    </>;
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement)

export default Car;