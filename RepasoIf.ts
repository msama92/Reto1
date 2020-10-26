function zodiaco (fecha)
{
    let aquarius = new Date(fecha.getFullYear(),2,18)
    let piscis = new Date(fecha.getFullYear(),3,20)
    let aries = new Date(fecha.getFullYear(),4,20)
    let taurus = new Date(fecha.getFullYear(),5,20)
    let gemini = new Date(fecha.getFullYear(),6,20)
    let cancer = new Date(fecha.getFullYear(),7,20)
    let leo = new Date(fecha.getFullYear(),8,21)
    let virgo = new Date(fecha.getFullYear(),9,22)
    let libra = new Date(fecha.getFullYear(),10,22)
    let scorpio = new Date(fecha.getFullYear(),11,22)
    let sagitario = new Date(fecha.getFullYear(),12,20)
    let capricornio = new Date(fecha.getFullYear(),1,20)
    let signo

    if (fecha.getTime() <= capricornio.getTime()){signo = "Capricornio"}

    else if (fecha.getTime() <= piscis.getTime()){signo = "Piscis"}

    else if (fecha.getTime()<= aquarius.getTime()){signo = "Aquario";}

    else if(fecha.getTime() <= aries.getTime()){signo = "Aries";}

    else if(fecha.getTime() <= taurus.getTime()){signo = "Tauro"}
    
    else if(fecha.getTime() <= gemini.getTime()){signo = "Geminis"}
     
    else if(fecha.getTime() <= cancer.getTime()){signo = "Cancer"}
 
    else if(fecha.getTime() <= leo.getTime()){signo = "Leo"}
 
    else if(fecha.getTime() <= virgo.getTime()){signo = "Virgo"}
 
    else if(fecha.getTime() <= libra.getTime()){signo = "Libra"}
 
    else if(fecha.getTime() <= scorpio.getTime()){signo = "Escorpio"}
 
    else if(fecha.getTime() <= sagitario.getTime()){signo = "Sagitario"}
 
    else {signo = "Capricornio"}

    return signo ;

}
function continentes (pais)
{
    let vuelta;
    let europa = ['Europa','Grecia',"Italia",'Francia'];
    let america= ['America','Mexico','Canada',';EEUU'];
    let africa = ['Africa','Marruecos','Congo','Egipto'];
    let asia = ['Asia','China','Japon','Corea'];
    let mundo =[europa, america, africa, asia];

    for (let i=0; i<mundo.length; i++)
    {
        for (let j=0; j< mundo[i].length; j++)
        {
            if (mundo[i][j] == pais)
            {
                vuelta = mundo[i][0];
            }
        }
    }
    return vuelta;
}
function cambio (vector)
{
    let vector2 = [];
    for (let i =0 ; i< vector.length; i++)
    {
        vector2[vector.length-1-i]=vector[i];
    }
    return vector2;
}
function impares(numero)
{
    for (let i=0; i<numero ; i++)
    {
        if((i+1) % 2 != 0) 
        {
            console.log(i+1)
        }
    }
}
function colores(muestras)
{
    let arcoiris = ["Rojo", "Naranja", "Amarillo","Verde","Azul", "Indigo", "Violeta"]
    for (let i=0; i<muestras.length; i++)
    {
        for (let j=0; j<arcoiris.length; j++)
        {
           
            if (muestras[i] == arcoiris[j] )
            {
                console.log (muestras[i] + " esta en el arcoiris")
            }
        }
    }
}
function par (vector)
{
    let texto = "No existe numero par";
    for (let i = 0; i<vector.length; i++)
    {
        if (vector[i] % 2 == 0)
        {
            texto='Existe Numero Par'
        }
    }
    console.log(texto)
}

function letram(vector)
{
    for (let i = 0 ; i<vector.length; i++)
    {
        let resultado = true;
        if (vector[i][0] != 'M')
        {
            resultado = false;
        }
        return resultado;
    }
}
function sumaletras (vector)
{
    let suma = 0;
    for (let i = 0; i<vector.length; i++)
    {
        suma = suma + vector[i].length;
    }
    return suma;
}
function paroimpar (numero)
{
    if(numero % 2 ==0)
    {
        console.log("El numero es par")
    }
    else
    {
        console.log("El numero es impar")
    }
}
let vector1 =["Casa","Coche","Ciudad","Cesta"];
let vector2 =["Barco","Baca","Bicicleta","Balon","Bisiesto","Brasil"];
let vector3 =["Venezuela","Veneno","Voltaje"];
//Funcion 1
console.log(zodiaco(new Date(1992,6,26)))

//Funcion 2
console.log(continentes('Corea'))

//Funcion 3
console.log(cambio([1,2,3,4,5,6,7,8,9]))

//Funcion 4
impares(7)

//Funcion 5
colores(['Negro','Amarillo'])

//Funcion 6
par([2,3,4,5,6])
par([3,5,7])

//Funcion 7
console.log(letram(['Mojo','Megro','Mmarillo']))

//Funcion 8 y 9
paroimpar(sumaletras(vector1));
paroimpar(sumaletras(vector2));
paroimpar(sumaletras(vector3));







