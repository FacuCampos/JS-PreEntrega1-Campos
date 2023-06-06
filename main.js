// VARIABLES
let inicio;
let cantidad = 0;
let precio = 0;
let precioFinal = 0;

// Funciones
function totalProductos(precio, cantidad){
    precioFinal = precioFinal + precio*cantidad;
    return precioFinal;
}

function carrito(precio, cantidad){
    let seguir;
    let catan = 1;
    let bang = 2;
    let rubik = 3;
    let dados = 4;
    let manual = 5;
    let eleccion = parseInt(prompt(`Escoja un producto de la lista\n\n
            1 - Catan ($20.000)\n
            2 - Bang ($14.000)\n
            3 - Cubo rubik($8.500)\n
            4 - Set de dados ($2.800)\n
            5 - Manual de D&D ($21.500)\n`));
    while (eleccion > 5 && eleccion <1){
        eleccion = parseInt(prompt(`Valor inexistente. Seleccione uno de la lista:\n\n
                    1 - Catan ($20.000)\n
                    2 - Bang ($14.000)\n
                    3 - Cubo rubik($8.500)\n
                    4 - Set de dados ($2.800)\n
                    5 - Manual de D&D ($21.500)\n`));
    }
    switch (eleccion){
        case eleccion = catan:
            precio = 20000;
            break;
        case eleccion = bang:
            precio = 14000;
            break;
        case eleccion = rubik:
            precio = 8500;
            break;
        case eleccion = dados:
            precio = 2800;
            break;
        case eleccion = manual:
            precio = 21500;
            break;
    }
    cantidad = +prompt("Ingrese la cantidad que desea llevar");
    alert("Se ha seleccionado "+ cantidad + " de la opción " + eleccion + ".");
    totalProductos(precio, cantidad);
    seguir = prompt("Producto agregado con éxito. ¿Desea agregar más productos? Escriba si o no:");
    validacion(seguir, precio, cantidad);
}

function validacion(respuesta, precio, cantidad){
    while (respuesta.toLowerCase() !== "no" && respuesta.toLowerCase() !== "si"){
        respuesta = prompt ("Valor ingresado, no válido. Inténtelo nuevamente con si o no:");
    }
    if (respuesta.toLowerCase() == "si"){
        carrito(precio, cantidad);
    }else {
        alert(`Fin del programa\n\n
            Total a pagar = $` + precioFinal + ".");

    }
}

//Inicio del programa
inicio = prompt("Bienvenido al seleccionador de productos. ¿Desea iniciar? Escriba si o no:");
validacion(inicio, precio, cantidad);



