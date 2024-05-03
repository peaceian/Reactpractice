const myStyle = {
    fontSize: '1.5rem',
    border: 'solid 3px whitesmoke',
}

const myElement = () => {
    return (<><table style={myStyle}>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td>John</td>
        </tr>
        <tr>
            <td>Elsa</td>
        </tr>
    </table></>)
};
export default myElement
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(myElement);
