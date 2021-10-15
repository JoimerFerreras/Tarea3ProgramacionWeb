var Cadena = "";
var Elementos = new Array();
var NumElements = 0;

var divContenedor = document.getElementById("ContenedorDeDivs");
function getContactos(){
    
    fetch("http://www.raydelto.org/agenda.php").then(function(datos){
        return datos.json();

    }).then(function(Listado){
        
        var CadenaListado = "";
        for(Contacto of Listado){
            console.log(Contacto);
         //   CadenaListado += Contacto.nombre + " " + Contacto.apellido + " " + Contacto.telefono + "<br>";
         //   Cadena = Contacto.nombre + " " + Contacto.apellido + " " + Contacto.telefono + "<br>\n";
            Elementos.push(Contacto.nombre + " " + Contacto.apellido + ": " + Contacto.telefono + "<br>\n");
        }
        CrearDiv();
        console.log("Estos son los numeros de elementos: " + Elementos.length);
        document.getElementById("DivContactosTotales").innerHTML = "Contactos totales: " + Elementos.length;
    })
}

function CrearDiv(){
    var Texto = "";
    NumElements = Elementos.length;
    for (var i = 0; i < NumElements; i++) {
        const newDiv = document.createElement("div");
        Texto = Elementos[i];
        newDiv.innerHTML = Texto;
        console.log("add");
        newDiv.classList.add("Contenedor"); 
        divContenedor.appendChild(newDiv);
    }   
}

function AgregarContacto(){

    var Nombre = document.getElementById('txtNombre')
    var Apellido = document.getElementById('txtApellido')
    var Telefono = document.getElementById('txtTelefono')

    var newPost = {
        nombre: Nombre.value,
        apellido: Apellido.value,
        telefono: Telefono.value,
    }


    fetch('http://www.raydelto.org/agenda.php', {
    method: 'POST',
    body: JSON.stringify(newPost),
})
.then(function(response){
    return response.text();
})
.then(function(texto){
    console.log(texto);
})
location.reload()
}



  
     
  

    