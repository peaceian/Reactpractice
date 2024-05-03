//Allows React to track elemeent. update, or delete one of items, only re-render this item not all list.
function Phone(props){
    return<li>I have a {props.brand} {props.model}</li>
} 
//Repeat parts were separated into components is a better method.
function Brand(){
    const brands = [{id:1,brand:'Apple',model:'12pro'},{id:2,brand:'Samsung',model:'S22'},{id:3,brand:'OPPO',model:'Reno8'},
                    {id:4,brand:'ASUS',model:'Zenfone9'},{id:5,brand:'Xiaomi',model:'12pro'},{id:6,brand:'Vivo',model:'X80'},
                    {id:7,brand:'Sony',model:'Xperia 1 IV'},{id:8,brand:'Google',model:'Pixel 6a'},{id:9,brand:'RealMe',model:'Narzo 50i'}];
    return(
        <>
        <h1>Which mobiles do you have?</h1>
        <h3>I have {brands.length} brands phones!</h3>
        <ul>{brands.map((phone)=><Phone key={phone.id} brand={phone.brand} model={phone.model}/>)}</ul>
        </>
    );
}
export default Brand;