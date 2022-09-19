function inicializar(){

let arrayNombres = [];
let lista = document.getElementById("lista");


let nombre;

nombre = prompt("Dame un nombre");   

    lista.innerText += nombre + " , ";
    arrayNombres.push(nombre);

do{


    
    nombre = prompt("Dame un nombre");   

    if(arrayNombres.indexOf(nombre) != -1){
        alert("no se puede");
    }
    else {

    
    lista.innerText += nombre + " , ";
    arrayNombres.push(nombre);
    }

}
while(
    arrayNombres.length < 5
);

}