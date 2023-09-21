//Creamos las constantes con la que vamos a trabajar y la asociamos a los elementos de nuestro html
const tabla=document.getElementById("tabla");
const hora = document.getElementById("hora");
const lunes = document.getElementById("lunes");
const martes = document.getElementById("martes");
const miercoles = document.getElementById("miercoles");
const jueves = document.getElementById("jueves");
const viernes = document.getElementById("viernes");
const crear = document.getElementById('crear');
const borrar = document.getElementById('del');

//Lista vacía para almacenar las horas que vamos poniendo en nuestro horario
let lista = [];

crear.addEventListener('click',()=>{
//creamos las filas de la tabla y se la añadimos mediante el appendChild()
    const fila = document.createElement("tr");
    tabla.appendChild(fila);
//variable para saber si la hora ya esta en la lista
    let res=false;
//recorremos la lista y variable=true si esta en la lista la hora que vamos a introducir 
    for(let i=0; i<lista.length ;i++ ){
        if(lista[i]==hora.value){
            res=true;
        }
    }
//condiciones: si están todos los input vacíos, nos salta una alarma
//si la variable anterior es true (la hora que queremos poner esta en la lista), salta una alarma
//si esta todo correcto ponemos las columnas en la fila creada anteriormente y se la añadimos a la tabla
    if(hora.value=='' && lunes.value=='' && martes.value=='' && miercoles.value=='' && jueves.value=='' && viernes.value==''){
        alert("No se puede crear una fila entera vacía.");
    }else if(res==true){
        alert("No se puede meter una hora ya metida.");
    }else{
        fila.insertAdjacentHTML('beforeend',`<td id="h1">${hora.value}</td>`);
        lista.push(hora.value);
        fila.insertAdjacentHTML('beforeend',`<td>${lunes.value}</td>`);
        fila.insertAdjacentHTML('beforeend',`<td>${martes.value}</td>`);
        fila.insertAdjacentHTML('beforeend',`<td>${miercoles.value}</td>`);
        fila.insertAdjacentHTML('beforeend',`<td>${jueves.value}</td>`);
        fila.insertAdjacentHTML('beforeend',`<td>${viernes.value}</td>`);

    }

})

//función para borrar filas en el horario
del.addEventListener('click',()=>{
    let num= tabla.getElementsByTagName('tr').length;
//con esta condición no podemos borrar la primera fila.
//cuando entra, borramos el último número de la lista y la fila.
    if(num>1){
        lista.pop();
        tabla.getElementsByTagName('tr')[num-1].remove();
    }


})