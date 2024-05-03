//The Javascript map() array method is generally the preferred method.
function Fruit(props){
    return<li>I have {props.type}</li>
}
function Basket(){
    const fruit = ['apple','banana','cherry']
    return(
        <>
        <h1>Which fruit you have?</h1>
        <h3>I have {fruit.length} types of fruit.</h3>
        <ul>
            {fruit.map((fruit)=><Fruit type={fruit}/>)}
        </ul>
        </>
    );
}
export default Basket;