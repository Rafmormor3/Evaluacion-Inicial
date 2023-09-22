//Creamos las constantes con la que vamos a trabajar y la asociamos a los elementos de nuestro html
const tabla=document.getElementById("tabla");
const hora = document.getElementById("hora");
const lunes = document.getElementById("lunes");
const martes = document.getElementById("martes");
const miercoles = document.getElementById("miercoles");
const jueves = document.getElementById("jueves");
const viernes = document.getElementById("viernes");
const crear = document.getElementById('crear');
const reiniciar = document.getElementById('del');
const borrarFilas=document.getElementById('borrarFila')

//Lista vacía para almacenar las horas que vamos poniendo en nuestro horario
let lista = [];

//------------------------------------------------------------------------------------

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
//
    let time = hora.value.split(":").join('');
//condiciones: si están todos los input vacíos o no ponemos la hora, nos salta una alarma.
//Si la variable anterior es true (la hora que queremos poner esta en la lista), salta una alarma.
//Si esta todo correcto ponemos las columnas en la fila creada anteriormente y se la añadimos a la tabla
    if(hora.value=='' || lunes.value=='' && martes.value=='' && miercoles.value=='' && jueves.value=='' && viernes.value==''){
        alert(`No se puede crear una fila vacía.`);
    }else if(res==true){
        alert("No se puede meter una hora ya metida.");
    }else{
        fila.insertAdjacentHTML('beforeend',`<td class="h1">${hora.value}</td>`);
        lista.push(hora.value);
        fila.insertAdjacentHTML('beforeend',`<td>${lunes.value}</td>`);
        fila.insertAdjacentHTML('beforeend',`<td>${martes.value}</td>`);
        fila.insertAdjacentHTML('beforeend',`<td>${miercoles.value}</td>`);
        fila.insertAdjacentHTML('beforeend',`<td>${jueves.value}</td>`);
        fila.insertAdjacentHTML('beforeend',`<td>${viernes.value}</td>`);

    }

})

//------------------------------------------------------------------------------------


borrarFilas.addEventListener('click',()=>{
    //almacenamos las filas y preguntamos la fila que borraremos
    let filas = tabla.getElementsByTagName("tr");
    let r=parseInt(prompt("Seleccione una fila"));
    
    //si la fila es 0 salta alerta para que no podamos borrar los días de la semana , si no es el caso, borramos la fila de la posición
    //que hemos escrito.
    if(r<=0){
        alert('Esa fila no está disponible.')
    }else{
        filas[r].remove();//eliminamos la fila 
        lista[r].remove();//eliminamos la hora en la lista para poder voler a elegirla
    }
})