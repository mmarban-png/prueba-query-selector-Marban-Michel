//imprimir el titulo del documento
console.log("El título de esta página es:", document.title); //extraer el titulo del documento e imprimir en consola

// Guardar el contenido de la id "titulo principal en una variable"
let titulo = document.querySelector("#tituloprincipal"); 
console.log(titulo);

//estraer y editar propiedades
console.log(titulo.textContent);
titulo.textContent = "Soy otro";
titulo.style.color = "peru";
titulo.style.backgroundColor = "ivory";
titulo.style.fontSize = "1.5rem";

//agregar texto sin borrar lo anterior
titulo.textContent = titulo.textContent + "Texto nuevo";
//+= es para añadir algo
titulo.textContent += "Otro texto nuevo";

//
titulo.innerHTML = "Hola";

let parrafo = document.querySelector("#pp");

parrafo.innerHTML = "Nuevo texto <i> Pero este texto está en cursiva </i>";

let caja1 = document.querySelector("#caja1");

caja1.innerHTML += "<p>Producto muestra $1200</p>"

/*
let presupuesto = prompt("Introduce tu presupuesto:");

if(presupuesto >= 1200) {
    caja1.classList.add("aprobado");
} else {
    caja1.classList.add("no-aprobado");
}
*/

const bodega = [
    {nombre: "Cosplay Mario", precio: 300, stock: 5},
    {nombre: "Cosplay Link", precio: 700, stock: 1},
    {nombre: "Cosplay Phoenix", precio: 920, stock:1},
    {nombre: "Cosplay Stanley Marsh", precio: 200, stock:0}
];

let caja = document.querySelector(".caja-vacia");

bodega.forEach( item => {

    //nombres de variables no van con guion porque significa resta
    let claseColor = ""; //simplemete texto y cambia según el stock

    if(item.stock > 0) { //Stock define texto de clase color
        claseColor = "aprobado";
    } else {
        claseColor = "no-aprobado";
    }
    
    //contenido de esa variable
    caja.innerHTML += `
    <div class = "caja-producto ${claseColor}"> 
        <h2>Producto: ${item.nombre}</h2>
        <p>Precio: ${item.precio}</p>
        <p>Stock: ${item.stock}</p>
    </div>


    `;


});
