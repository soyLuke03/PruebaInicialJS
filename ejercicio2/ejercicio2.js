
let numeroEmpleado = 3;
let arrayDeDNI = [];
for(let i = 0; i<tabla.getElementsByTagName("tr").length; i++){
    arrayDeDNI.push(tabla.getElementsByTagName("tr")[i]);
}


function insertar(){

let tabla = document.getElementById("tabla");
let tr = document.createElement("tr");
let td = document.createElement("td");


let numeroEmp = numeroEmpleado + 1;
numeroEmpleado += 1;





let dniEmp = prompt("DNI");


while (arrayDeDNI.includes(dniEmp)){
    dniEmp = prompt("DNI no válido. Prueba otro");
}

let nombreEmp = prompt("Nombre");
let apellidosEmp = prompt("Apellidos");


let nodoNumeroEmp = document.createTextNode(numeroEmp);
let nodoDni = document.createTextNode(dniEmp);
let nodoNombre = document.createTextNode(nombreEmp);
let nodoApellidos = document.createTextNode(apellidosEmp);

tabla.appendChild(tr);

tr.append(td);
td.appendChild(nodoNumeroEmp)
td = document.createElement("td");

tr.append(td);
td.appendChild(nodoDni)
td = document.createElement("td");

tr.append(td);
td.appendChild(nodoNombre)
td = document.createElement("td");

tr.append(td);
td.appendChild(nodoApellidos)


}

function eliminar(){

}

function modificar(){

}


