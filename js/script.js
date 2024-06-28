let inputMostrado = false;
let entrada = document.querySelector("#entrada");
let salida = document.querySelector("#salida");

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

    let input = document.createElement("input");
    input.setAttribute("id","input1");
    input.setAttribute("placeholder","Número 1");
    entrada.appendChild(input);

}

//Crear input 2
function crearInput2() {

    let input = document.createElement("input");
    input.setAttribute("id","input2");
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
function crearInputs(numeroInputs) {
    
    if(inputMostrado) {
        
        salida.innerHTML = "";
        document.querySelector("#input1").remove();

        if(document.querySelector("#input2")) { 

            document.querySelector("#input2").remove();
        }
        borrarBoton();
        inputMostrado=false;
    }
    if(!inputMostrado) {

        entrada.style.visibility="visible";
        crearInput1();

        if(numeroInputs===2) {

            crearInput2();
        }
    }
    crearBoton();
    inputMostrado=true;
}   





function mostrarValorAbsoluto(){
    
    crearInputs(1);
    document.querySelector("#calcular").addEventListener("click",()=> {

        let numero = document.querySelector("#input1").value;

        if (validar(numero)) {

            salida.textContent=`El valor absoluto de ${numero} es ${Math.abs(numero)}`;
        }
    })
} 

function mostrarEnteroSuperior(){
    
    crearInputs(1);
    document.querySelector("#calcular").addEventListener("click",()=> {

        let numero = document.querySelector("#input1").value;

        if (validar(numero)) {

            salida.textContent=`El entero superior de ${numero} es ${Math.ceil(numero)}`;
        }
    })
} 

function mostrarExponencial(){
    
    crearInputs(2);
    document.querySelector("#calcular").addEventListener("click",()=> {
        
        let numero1 = document.querySelector("#input1").value;
        let numero2 = document.querySelector("#input2").value;
        
        if (validar(numero1)&&validar(numero2)) {
                
            salida.textContent=`El exponente ${numero2} de ${numero1} es ${numero1**numero2}`;
        }
    })
} 

function mostrarMaximo(){
    
    crearInputs(2);
    document.querySelector("#calcular").addEventListener("click",()=> {
        
        let numero1 = document.querySelector("#input1").value;
        let numero2 = document.querySelector("#input2").value;
        
        if (validar(numero1)&&validar(numero2)) {
                
            salida.innerHTML=`El número más grande entre el ${numero1} y el ${numero2} es ${Math.max(numero1,numero2)}`;
            
        }
    })
} 

function mostrarMinimo(){
    
    crearInputs(2);
    document.querySelector("#calcular").addEventListener("click",()=> {
        
        let numero1 = document.querySelector("#input1").value;
        let numero2 = document.querySelector("#input2").value;
        
        if (validar(numero1)&&validar(numero2)) {
                
            salida.innerHTML=`El número más grande entre el ${numero1} y el ${numero2} es ${Math.min(numero1,numero2)}`;
            
        }
    })
} 

function mostrarRedondear(){
    
    crearInputs(1);
    document.querySelector("#calcular").addEventListener("click",()=> {

        let numero = document.querySelector("#input1").value;

        if (validar(numero)) {

            salida.textContent=`El ${numero} redondeado es ${Math.round(numero)}`;//solo decimales
        }
    })
} 

function mostrarRaizCuadrada(){
    
    crearInputs(1);
    document.querySelector("#calcular").addEventListener("click",()=> {

        let numero = document.querySelector("#input1").value;

        if (validar(numero)) {

            salida.textContent=`La raíz cuadrada de ${numero} es ${Math.sqrt(numero).toFixed(3)}`;//solo decimales
        }
    })
} 

function mostrarTruncar(){
    
    crearInputs(1);
    document.querySelector("#calcular").addEventListener("click",()=> {

        let numero = document.querySelector("#input1").value;

        if (validar(numero)) {

            salida.textContent=`El ${numero} truncado es ${Math.trunc(numero)}`;//solo decimales
        }
    })
} 
function validar(numero){

    if (isNaN(numero)) {

        salida.textContent="No es un número, chaval. Ponle un número a la calculeitor";
        return false;
    
    } else {

        return true;
    }

}