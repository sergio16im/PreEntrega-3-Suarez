
let formulario= document.getElementById("inicioDT");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(info){
    //Cancelamos el comportamiento del evento
    info.preventDefault();
    //Obtenemos el elemento desde el cual se disparó el evento
    let miformulario = info.target
    //Obtengo el valor del primero hijo <input type="text">
    
    //Obtengo el valor del segundo hijo <input type="number"> 
    
    
}

function inicioSesion(){
    let advertencia=""
    let pista=""
    for(let i=2;i>=0;i--){
        
        if(userIn===myUser.nombre && passwordIn==myUser.contraseña){
            alert("Bienvenido "+ myUser.nombre)
            menuPrincipal();
            break;
        }
        else if(userIn=="x" || userIn=="X"){
            menuSecundario()
            break;
        }
        else{
            
            alert('Usuario o contraseña incorrectos.');
            advertencia="Le quedan "+ (i) + " intentos"
        }
        if((i)==1){
            pista="Usuario:Camilo Contraseña:1234"
        }
        if((i)==0){
            alert("Lo sentimos. Ha superado el limite de intentos permitidos \nSe cerrará el programa")
            break;
        }

    }
}
