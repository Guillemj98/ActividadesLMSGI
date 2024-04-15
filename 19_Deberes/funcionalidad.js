// Contador de numero pares.
function contadorPares(){
    let primerNumero = parseInt(document.getElementById("PrimerNumeroRango").value);
    let segundoNumero = parseInt(document.getElementById("SegundoNumeroRango").value);
    let contador = 0;
    if(primerNumero > segundoNumero){
        alert("No vale ");
        return;
    }else if (primerNumero < segundoNumero){
        for(let i =primerNumero; i<segundoNumero; i++ ){
            if(i % 2 ==0){
                contador ++;
            }

        }
        console.log("El numero de pares es: " + contador);
        document.getElementById("ResultadoPares").value = contador;
    }
}
// Conversor de temperaturas
function conversorTemperatura(){
    let conversion = document.getElementById("temperatura").value;
    let temperatura = parseFloat(document.getElementById("TemperaturaConvertir").value);
    let resultado = 0;
    if(conversion === "Farenheit"){
        resultado = temperatura * 9 / 5 + 32;
        document.getElementById("ResultadoTemperatura").value = resultado;

    }else if (conversion === "Celsius"){
        resultado = (temperatura - 32)* 5/9;
        document.getElementById("ResultadoTemperatura").value = resultado;
    }

}

//Juego adivina el numero

function advinaNumero() {
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

    let numeroUsuario = parseInt(document.getElementById("NumeroAleatorio").value);
    if (numeroUsuario < numeroAleatorio) {
        document.getElementById("CalienteCaliente").value = "Te has quedado corto";

    } else if (numeroUsuario > numeroAleatorio) {
        document.getElementById("CalienteCaliente").value = "Te has pasado";
    } else if (numeroUsuario == numeroAleatorio) {
        document.getElementById("CalienteCaliente").value = "HAS GANADOOOOOOOO!!!!"
        flag = false;
    }


}
//Cambiar el color de la pantalla
function cambiarColor(color){
    document.body.style.background = color;

}

//Usuario y contraseña
function ingresarUsuarioPassword(){
    let usuario = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(usuario === "goku" && password === "Vegeta777"){
        alert("Bienvenido!");
    } else{
        alert("Usuario o Contraseña incorrecto!");
    }
}
//Verificador de numeros primos
function numeroPrimo(){
    let numeroPrimo = document.getElementById("numeroPrimo").value;
    let contador =0;
    for (let i = 1; i <= numeroPrimo; i++) {
        if (numeroPrimo % i == 0) {
            contador++;
            if (contador > 2) {
                document.getElementById("ResultadoPrimos").value = "Tu numero no es primo";
                break;
            }
            
        }

    }
    if(contador==2) {
        document.getElementById("ResultadoPrimos").value = "Tu numero es primo";
    }
}





//Generador de la secuencia de Fibonacci
function secuenciaFibonacci() {
    let numero2 = 1;
    let numero3 = 0;
    let suma = 1;
    let numneroSecuencia = parseInt(document.getElementById("NumeroSecuenciaFibonacci").value);
    let resultado = "";

    if (numneroSecuencia === 1) {
        resultado = "Tu número es 0";
    } else if (numneroSecuencia === 2) {
        resultado = "Tu número es: " + numero2;
    } else if (numneroSecuencia > 2) {
        resultado = "Los primeros " + numneroSecuencia + " números son: ";
        for (let i = 0; i < numneroSecuencia - 2; i++) {
            resultado += numero3 + ", ";
            suma = numero3 + numero2;
            numero3 = numero2;
            numero2 = suma;
        }
        resultado += numero3 + ", " + numero2;
    }

    document.getElementById("AreaFibonacci").value = resultado;
}
