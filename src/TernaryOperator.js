
function renderApp(){
    document.getElementById('demo').innerHTML="Welcome";
}
function renderLogin(){
    document.getElementById('demo').innerHTML="Pleade Login";
}

let authenticated = true;
if(authenticated){
    renderApp();
}
else{renderLogin();}

