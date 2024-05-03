//2.Passing Argument

function Football2(){
    const shoot = (a) =>{alert(a);}
    return(<div>
    <button onClick={()=>shoot('Goal!')}>Take a shot!</button></div>
    );
}
export default Football2;