//Allows React to track elemeent. update, or delete one of items, only re-render this item not all list.
function Brand2(){
    const phones = [{id:1,brand:'Apple',model:'12pro'},{id:2,brand:'Samsung',model:'S22'},{id:3,brand:'OPPO',model:'Reno8'},
                    {id:4,brand:'ASUS',model:'Zenfone9'},{id:5,brand:'Xiaomi',model:'12pro'},{id:6,brand:'Vivo',model:'X80'},
                    {id:7,brand:'Sony',model:'Xperia 1 IV'},{id:8,brand:'Google',model:'Pixel 6a'},{id:9,brand:'RealMe',model:'Narzo 50i'}];
    return(
        <>
        <h1>Which mobiles do you have? (Another Expression)</h1>
        <h3>I have {phones.length} brands phones!</h3>
        <ul>{phones.map((phone)=><li key={phone.id} >I have a {phone.brand} {phone.model}</li>)}</ul>
        <h4>All together don't need to added brand=(bigbracket)phone.brand(bigbracket) and model=(bigbracket)phone.model(bigbracket).</h4>
        </>
    );
}
export default Brand2;