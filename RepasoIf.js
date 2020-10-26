function zodiaco(fecha) {
    var aquarius = new Date(fecha.getFullYear(), 2, 18);
    var piscis = new Date(fecha.getFullYear(), 3, 20);
    var aries = new Date(fecha.getFullYear(), 4, 20);
    var taurus = new Date(fecha.getFullYear(), 5, 20);
    var gemini = new Date(fecha.getFullYear(), 6, 20);
    var cancer = new Date(fecha.getFullYear(), 7, 20);
    var leo = new Date(fecha.getFullYear(), 8, 21);
    var virgo = new Date(fecha.getFullYear(), 9, 22);
    var libra = new Date(fecha.getFullYear(), 10, 22);
    var scorpio = new Date(fecha.getFullYear(), 11, 22);
    var sagitario = new Date(fecha.getFullYear(), 12, 20);
    var capricornio = new Date(fecha.getFullYear(), 1, 20);
    var signo;
    if (fecha.getTime() <= capricornio.getTime()) {
        signo = "Capricornio";
    }
    else if (fecha.getTime() <= piscis.getTime()) {
        signo = "Piscis";
    }
    else if (fecha.getTime() <= aquarius.getTime()) {
        signo = "Aquario";
    }
    else if (fecha.getTime() <= aries.getTime()) {
        signo = "Aries";
    }
    else if (fecha.getTime() <= taurus.getTime()) {
        signo = "Tauro";
    }
    else if (fecha.getTime() <= gemini.getTime()) {
        signo = "Geminis";
    }
    else if (fecha.getTime() <= cancer.getTime()) {
        signo = "Cancer";
    }
    else if (fecha.getTime() <= leo.getTime()) {
        signo = "Leo";
    }
    else if (fecha.getTime() <= virgo.getTime()) {
        signo = "Virgo";
    }
    else if (fecha.getTime() <= libra.getTime()) {
        signo = "Libra";
    }
    else if (fecha.getTime() <= scorpio.getTime()) {
        signo = "Escorpio";
    }
    else if (fecha.getTime() <= sagitario.getTime()) {
        signo = "Sagitario";
    }
    else {
        signo = "Capricornio";
    }
    return signo;
}
function continentes(pais) {
    var vuelta;
    var europa = ['Europa', 'Grecia', "Italia", 'Francia'];
    var america = ['America', 'Mexico', 'Canada', ';EEUU'];
    var africa = ['Africa', 'Marruecos', 'Congo', 'Egipto'];
    var asia = ['Asia', 'China', 'Japon', 'Corea'];
    var mundo = [europa, america, africa, asia];
    for (var i = 0; i < mundo.length; i++) {
        for (var j = 0; j < mundo[i].length; j++) {
            if (mundo[i][j] == pais) {
                vuelta = mundo[i][0];
            }
        }
    }
    return vuelta;
}
function cambio(vector) {
    var vector2 = [];
    for (var i = 0; i < vector.length; i++) {
        vector2[vector.length - 1 - i] = vector[i];
    }
    return vector2;
}
function impares(numero) {
    for (var i = 0; i < numero; i++) {
        if ((i + 1) % 2 != 0) {
            console.log(i + 1);
        }
    }
}
function colores(muestras) {
    var arcoiris = ["Rojo", "Naranja", "Amarillo", "Verde", "Azul", "Indigo", "Violeta"];
    for (var i = 0; i < muestras.length; i++) {
        for (var j = 0; j < arcoiris.length; i++) {
            if (muestras[i] == arcoiris[j]) {
                console.log(muestras[i] + " esta en el arcoiris");
            }
        }
    }
}
function par(vector) {
    var texto = "No existe numero par";
    for (var i = 0; i < vector.length; i++) {
        if (vector[i] % 2 == 0) {
            texto = 'Existe Numero Par';
        }
    }
    console.log(texto);
}
function letram(vector) {
    for (var i = 0; i < vector.length; i++) {
        var resultado = true;
        if (vector[i][0] != 'M') {
            resultado = false;
        }
        return resultado;
    }
}
function sumaletras(vector) {
    var suma = 0;
    for (var i = 0; i < vector.length; i++) {
        suma = suma + vector[i].length;
    }
    return suma;
}
function paroimpar(numero) {
    if (numero % 2 == 0) {
        console.log("El numero es par");
    }
    else {
        console.log("El numero es impar");
    }
}
var vector1 = ["Casa", "Coche", "Ciudad", "Cesta"];
var vector2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
var vector3 = ["Venezuela", "Veneno", "Voltaje"];
paroimpar(sumaletras(vector1));
paroimpar(sumaletras(vector2));
paroimpar(sumaletras(vector3));
console.log(zodiaco(new Date(1992, 6, 26)));
console.log(continentes('Corea'));
console.log(cambio([1, 2, 3, 4, 5, 6, 7, 8, 9]));
impares(7);
//colores(['Rojo','Negro','Amarillo'])
console.log(letram(['Mojo', 'Megro', 'Mmarillo']));
