let numeros =[];

function promedio(){
    let suma = 0;
    for(let numero of numeros){
        suma+=numero;
    }
    if(numeros.length > 0){
        let promedio = suma /numeros.length;
        let resultadoPromedio = document.getElementById("resultado");
        resultadoPromedio.textContent = "El promedio es: " + promedio.toFixed(2);
    }else{
        alert("No se ha ingresado ningun numero")
    }
   
}
function agregarNumero(inputId){
    let numeroInput = document.getElementById(inputId);
    let numero1 = parseInt(numeroInput.value);
    if(!isNaN(numero1)){
        numeros.push(numero1);
        numeroInput.value = "";
        console.log("Número agregado:", numero1);
    
    }else{
        alert("Introduce un numero valido")
    }
}
function agregarNumeroText1(){
    agregarNumero("texto1")
}
function agregarNumeroText2(){
    agregarNumero("texto2")
}
function agregarNumeroText3(){
    agregarNumero("texto3")
}
function mayorElemento(){
    if(numeros.length <=0){
        alert("NO hay numeros para calcular el elemento mayor")
        return;
    }
    let mayor = numeros[0]
    for (let i =0;i < numeros.length;i ++){
        if(numeros[i] > mayor){
            mayor = numeros[i];
        }
    }
    
    document.getElementById("resultadoMayor").textContent= "El mayor numero es: " + mayor;
}
function contadorParesImpares(){
    let contadorPares =0;
    let contadorImpares =0;
    for (let i =0; i< numeros.length; i++){
        if(numeros[i]%2==0){
            contadorPares ++;
        }else if(numeros[i]%2!=0){
            contadorImpares ++;
        }
    }
    document.getElementById("resultadoParesImpares").textContent = ("El numero de pares es " + contadorPares 
    + " y el numero de impares es: " + contadorImpares);

}
