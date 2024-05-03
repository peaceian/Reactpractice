import './Hello.css'

const myStyle={
    color:'whitesmoke',
    backgroundColor:'black',
    fontFamily:'Times-Roman',
}
const styleP={
    color: 'aliceblue',
    backgroundColor: 'black',
    fontSize:'30px',
}

function Hello(){
    return(<>
        <div>
            <h1 style={myStyle}>Hello World !</h1>
            <p style={styleP}>This is a test that studies the coding of React!</p>
            <p style={styleP}>And try to adapt earlier.</p>
            <h2 className='Hellotest'>This is importing a css sheet to render the css. </h2>
        </div>
    </>)
}
export default Hello;

