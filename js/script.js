let inputMostrado = true;

window.onload=()=> {

    document.querySelector("#valor-abs").addEventListener("click", mostrarValorAbsoluto);
    document.querySelector("#entero-sup").addEventListener("click", mostrarEnteroSuperior);
    document.querySelector("#expo").addEventListener("click", mostrarExponencial);
    document.querySelector("#max").addEventListener("click", mostrarMaximo);
    document.querySelector("#min").addEventListener("click", mostrarMinimo);
    document.querySelector("#redon").addEventListener("click", mostrarRedondear);
    document.querySelector("#raiz-cuad").addEventListener("click", mostrarRaizCuadrada);
    document.querySelector("#truncar").addEventListener("click", mostrarTruncar);
}


//Crear input 1
function crearInput1() {

    let entrada = document.querySelector("#entrada");
    let input = document.createElement("input");
    input.setAttribute("id","input1");
    input.setAttribute("name","input1");
    input.setAttribute("placeholder","Número 1");
    entrada.appendChild(input);

}

//Crear input 2
function crearInput2() {

    let entrada = document.querySelector("#entrada");
    let input = document.createElement("input");
    input.setAttribute("id","input2");
    input.setAttribute("name","input2");
    input.setAttribute("placeholder","Número 2");
    entrada.appendChild(input);

}


//Borrar input
function borrarBoton() {

    document.querySelector(".boton").remove();
}

//Crear el botón
function crearBoton() {
    
    let boton = document.createElement("button");
    boton.setAttribute("id","calcular");
    boton.classList.add("boton");
    boton.textContent="Calcular";
    entrada.appendChild(boton);
}    


//Crear todo






function mostrarValorAbsoluto(){
    
    crearInput1();
    crearBoton();
} 

function mostrarEnteroSuperior(){
    crearInput1();
    
} 

function mostrarExponencial(){
    crearInput1();
    crearInput2();
    
} 

function mostrarMaximo(){
    crearInput1();
    crearInput2();
    
} 

function mostrarMinimo(){
    crearInput1();
    crearInput2();
    
} 

function mostrarRedondear(){
    crearInput1();
    
} 

function mostrarRaizCuadrada(){
    crearInput1();
    
} 

function mostrarTruncar(){
    crearInput1();

} 