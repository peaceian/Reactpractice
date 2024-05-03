//Logical && Operator
//packing to a component, array has to use map() to render the property.
const myStyle={
    whiteSpace:'nowrap'
} 
const cars = ['Ford ','BMW ','Audi '];
function MyGarage(props){
    const mycars = cars.map((cars)=><>{cars}</>);
    return(
        <>
        <h1 style={myStyle}>Garage</h1>
        {mycars.length > 0 && <h2>You have {mycars.length} cars: {mycars} in your garage.</h2>}
        </>
    );
}

export default MyGarage;

/*
function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}

const cars = ['Ford', 'BMW', 'Audi'];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage cars={cars} />);
*/