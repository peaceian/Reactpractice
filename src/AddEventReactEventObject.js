//3.React Event Object

function Football3(){
    const shoot = (a,b)=>{alert(b.type);}
    return(<button onClick={(event)=>shoot('Goal',event)}>Take the shot!</button>);
}
export default Football3