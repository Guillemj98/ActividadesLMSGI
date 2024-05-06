
class TarjetaGrafica{
    constructor(marcaGrafica,modeloGrafica,nucleoCudaGrafica, precioGrafica,ramGrafica ){
        this.marcaGrafica = marcaGrafica;
        this.modeloGrafica = modeloGrafica;
        this.nucleoCudaGrafica = nucleoCudaGrafica;
        this.precioGrafica = precioGrafica;
        this.ramGrafica = ramGrafica;
    }
}



class PlacaBase{
    constructor(marcaPlacaBase, precioPlacaBase, tipoPlacaBase ){
        this.marcaPlacaBase = marcaPlacaBase
        this.precioPlacaBase = precioPlacaBase
        this.tipoPlacaBase = tipoPlacaBase
    }
}

class Procesador{
    constructor(marcaProcesador, modeloProcesador, numeroNucleosProcesador, precioProcesador){
        this.marcaProcesador = marcaProcesador
        this.modeloProcesador = modeloProcesador
        this.numeroNucleosProcesador =numeroNucleosProcesador
        this.precioProcesador =precioProcesador

    }

    
}

class Ram {
    constructor(marcaRam, capacidaRam, precioRam ){
        this.marcaRam = marcaRam;
        this.capacidaRam = capacidaRam;
        this.precioRam = precioRam;
    }
   
}

class Periferico{
    constructor(tipoPeriferico,marcaPeriferico,precioPeriferico ){
        this.tipoPeriferico = tipoPeriferico
        this.marcaPeriferico = marcaPeriferico
        this.precioPeriferico = precioPeriferico
    }
    
}
class Ordenador{
   constructor(precioOrdenador){
    this.precio = precioOrdenador;
    this.procesador = new Procesador('Marca', 'Modelo', 4, 300); // Ejemplo de valores de procesador
    this.tarjetaGrafica = new TarjetaGrafica('Nvidia', 'RTX 3080', 8704, 1000, 12); // Ejemplo de valores de tarjeta gráfica
    this.placaBase = new PlacaBase('ASUS', 200, 'ATX'); // Ejemplo de valores de placa base
    this.listaRAMs = []; // Lista vacía de RAMs
    this.listaPerifericos = [];

   }
   
    calcularPrecioOrdenador(){
        let precioTotal = parseFloat(this.precio) || 0;

        // Sumar el precio del procesador
        precioTotal += parseFloat(this.procesador.precioProcesador) || 0;

        // Sumar el precio de la tarjeta gráfica
        precioTotal += parseFloat(this.tarjetaGrafica.precioGrafica) || 0;

        // Sumar el precio de la placa base
        precioTotal += parseFloat(this.placaBase.precioPlacaBase) || 0;

        // Sumar el precio de cada RAM en listaRAMs
        this.listaRAMs.forEach(ram => {
            precioTotal += parseFloat(ram.precioRam) || 0;
        });

        // Sumar el precio de cada periférico en listaPerifericos
        this.listaPerifericos.forEach(periferico => {
            precioTotal += parseFloat(periferico.precioPeriferico) || 0;
        });

        return precioTotal;
    

   }
   agregarPerifericos(perifericos) {
    perifericos.forEach(periferico => {
        this.listaPerifericos.push(periferico);
    });
}

agregarRAMs(rams) {
    rams.forEach(ram => {
        this.listaRAMs.push(ram);
    });
}
}
let listaPerifericos =[
    new Periferico ("Teclado","Razer",200 ),
    new Periferico("Raton", "Razer",90),
    new Periferico("Cascos", "Razer" , 169.99)
];
console.log(listaPerifericos)
let listaRAMs=[
   new Ram("HyperX" , 16, 100),  
   new Ram("HyperX,", 16, 100)
];
console.log(listaRAMs)
let ramGrafica = new Ram("Kingston", 32, 0);
let procesador = new Procesador("Intel", "Core i9", 1000);
let placaBase = new PlacaBase("ASUS", "ROG Strix Z590", 250);
let tarjetaGrafica = new TarjetaGrafica("Nvidia","4090", 8000,2700,ramGrafica)
console.log(ramGrafica)
console.log(procesador)
console.log(placaBase)
console.log(tarjetaGrafica)

let miOrdenador = new Ordenador(0)
miOrdenador.agregarPerifericos(listaPerifericos);
miOrdenador.agregarRAMs(listaRAMs);

let precioOrdenador = miOrdenador.calcularPrecioOrdenador();
document.getElementById("resultado").textContent = ("El precio es: " + precioOrdenador )