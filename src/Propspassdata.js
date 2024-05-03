function Car(props){return<h2>A {props.brand} !</h2>;}
function Garage(){return(
    <><h1>
        Who lives in my garage?</h1>
        <Car brand='Ford'/></>
);}
//Car was passed data in Garage
export default Garage;