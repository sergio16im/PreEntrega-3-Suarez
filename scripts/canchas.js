//Variables
let desktop="fDesktop"
let movil=""
//Objetos
const cancha1={
    nombre:"Cancha sintética La 20",
    direccion:"Cra. 20 #29-10",
    tipoCancha:"Sintética",
    horarios:[],
    disponibilidad:[],
    tipoHorarios:["Matutino","Nocturno"],
    calificacion: 7,
    precio:25000,
    rutaImagen:"../images/cancha_1.jpg"
}
const cancha2={
    nombre:"El nuevo Maracana",
    direccion:"Cl. 18 #21-16",
    tipoCancha:"Cemento",
    horarios:[],
    disponibilidad:[],
    tipoHorarios:["Nocturno"],
    calificacion: 4,
    precio:30000,
    rutaImagen:"../images/cancha_2.jpg"
}
const cancha3={
    nombre:"Digigol",
    direccion:"Cl. 14 #15-56",
    tipoCancha:"Sintética",
    horarios:[],
    disponibilidad:[],
    tipoHorarios:["Matutino"],
    calificacion: 6,
    precio:35000,
    rutaImagen:"../images/cancha_3.jpg"
}
const cancha4={
    nombre:"Gool de Oro",
    direccion:"Cl. 35 #24-69",
    tipoCancha:"Sintética",
    horarios:[],
    disponibilidad:[],
    tipoHorarios:["Matutino","Nocturno"],
    calificacion: 4,
    precio:20000,
    rutaImagen:"../images/cancha_4.jpg"
}
const cancha5={
    nombre:"Mundo Fútbol Club",
    direccion:"Cl. 22 #21-16",
    tipoCancha:"Sintética",
    horarios:[],
    disponibilidad:[],
    tipoHorarios:["Matutino","Nocturno"],
    calificacion: 8,
    precio:40000,
    rutaImagen:"../images/cancha_5.jpg"
}

//Filtros
const fTipoCancha={
    id:"Zero",
    nombre:"Tipo de cancha",
    valores:["Síntetica","Cemento"]
}
const fTipoHorario={
    id:"One",
    nombre:"Horarios",
    valores:["Matutino","Tardes","Nocturno"]
}
const fPrecio={
    id:"Two",
    nombre:"Precios",
    valores:["25000","30000","40000"]
}
const fCalificacion={
    id:"Three",
    nombre:"Calificación",
    valores:["5 estrellas","7 estrellas","9 estrellas"]
}
//Array de objetos
const aguas=[cancha1,cancha2,cancha3,cancha4, cancha5]
const caliente=[fTipoCancha,fTipoHorario,fPrecio,fCalificacion]
//Funciones
function mostrarCanchas(){
    let padre=document.getElementById("seccionCanchas")
    for(const canchas of aguas){
        let contenedor = document.createElement("div");

        contenedor.innerHTML=`<div class="card jugador" style="width: 18rem;">
        <div class="d-inline text-center">
            <h3 class="d-inline">${canchas.nombre} </h3>
           
        </div>
        
        <img src="${canchas.rutaImagen}" class="card-img-top" alt="Foto_cancha">
        <div class="card-body">
          <h5 class="card-title">${canchas.direccion}</h5>
          <div class="d-inline">
            <img class="estrella img-rounded d-inline" src="../images/estrella.png" alt="Icono_de_estrella" style="width: 2rem;">
            <h3 class="d-inline text-center">${canchas.calificacion}</h3>
          </div>
          <h3 class="d-inline">${canchas.tipoCancha}</h3>
          <p class="card-text">Horarios:<strong>${canchas.tipoHorarios}</strong><div>Precio:<strong>$${canchas.precio}</strong></div></p>
          <a href="perfil_cancha.html" class="btn btn-success">Alquilar Cancha</a>
        </div>
      </div>`;

        padre.appendChild(contenedor);
    }
        

}
function mostrarFiltros(){
    //Para vista desktop
    let padre=document.getElementById("fDesktop")
    for(const filtros of caliente){
                let dcontenedor = document.createElement("div");
            dcontenedor.innerHTML=`<div class="accordion-item">
            <h2 class="accordion-header" id="heading${filtros.id}">
            <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapse${filtros.id}" aria-expanded="false" aria-controls="collapse${filtros.id}">
                ${filtros.nombre}
            </button>
            </h2>
            <div id="collapse${filtros.id}" class="accordion-collapse collapse" aria-labelledby="heading${filtros.id}" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                        
        <ul class="list-group" id="filtro${filtros.id}">
        </ul>
        </div>
            
        </div>`;
        padre.appendChild(dcontenedor);
               
            let madre=document.getElementById(`filtro${filtros.id}`)
            for(const valor of filtros.valores){
                let hijo=document.createElement("div");
                hijo.innerHTML=`<li class="list-group-item">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                ${valor}
                </label>
                </li>`
                madre.appendChild(hijo);
            }
            
        
        

        
    }
 // Para vista movil  
 let papa=document.getElementById("fMovil")
 for(const filtros of caliente){
         let mcontenedor = document.createElement("div");
        mcontenedor.innerHTML=`<div class="dropdown">
                
        <a class="btn btn-success dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        ${filtros.nombre}
        </a>

        <ul class="dropdown-menu " aria-labelledby="dropdownMenuLink" id="list${filtros.id}">
        
        
        </ul>
        </div>`;
        papa.appendChild(mcontenedor);
        let mom=document.getElementById(`list${filtros.id}`)
            for(const valor of filtros.valores){
                let mhijo=document.createElement("div");
                mhijo.innerHTML=`<li >
                <div class="dropdown-item">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                  <label class="form-check-label" for="defaultCheck1">
                    ${valor}
                  </label>
                  </div>
              <li>`
                mom.appendChild(mhijo);
            }

    }

}

function prueba(){
    
        
        
  
        
}

mostrarCanchas()
mostrarFiltros()
prueba()


/**/






