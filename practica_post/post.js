function postea(){
    alert('Mensaje Enviado')
    const mensaje = document.querySelector("#mensaje").value;
    const display = document.querySelector("#display");

    let p = document.createElement('p');
    display.innerText = 'mensaje';
    
    document.getElementById("display").appendChild(p);

    console.log(p + mensaje);
}
