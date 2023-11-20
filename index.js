//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

const ejercicioUno = (numero) => {

    if(numero % 2 == 0){
        return  `El numero ${numero} es par`
    }
    else{
        return `El numero ${numero} es impar`
    }
    
}
console.log(ejercicioUno(20))


//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

const ejercicioDos = (numero1, numero2) =>{
    // indicar si uno es mauor q otro,o si son iguales
    if(numero1 > numero2){
        return `El numero ${numero1} es mayor que ${numero2}`
    }
    else if(numero2 > numero1){
        return `El numero ${numero2} es mayor que ${numero1}`
    }
    else if(numero1 === numero2){
        return `Ambos numeros ${numero1} y ${numero2} son iguales`
    }
}
console.log(ejercicioDos(42, 42))

//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

const ejercicioTres = (numero) => {
    // ver si el numero es multiplo de 5
    if(numero % 5 == 0){
        return `El numero ${numero} es multiplo de 5`
    }
    else {
       return 'Probá con otro numero'
    }
}
console.log(ejercicioTres(5))

//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

const ejercicioCuatro = (numero) => {
    //hacer un bucle para recorrer de 0 a x numero
    for(let i = 0; i <= numero; i++){
        
        console.log(i)
    }
}

console.log(ejercicioCuatro(10))

//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

const ejercicioCinco = (numero,palabra) => {

    
    for(let i= 1; i <= numero; i++){
        console.log(palabra[i])
    }
}
console.log(ejercicioCinco()) // VER EJERCICIO 5

//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const ejercicioSeis = (array) =>{
    for(let i = 0; i <= array.length; i++){
        console.log(array)
    }
}
console.log(ejercicioSeis([1, true, 4, 'messi', 89]))

//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

const ejercicioSiete = (array) => {
    for(let i = 0; i < array.length; i++){
        if(i === 4){
            continue;
        }
        console.log(array[i])
    }
}

console.log(ejercicioSiete([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const ejercicioOcho = (array, num) => {
    for(let i = 0; i < array.length; i++){
        const resultado = array[i] * num
        console.log(resultado)
    }
}

console.log(ejercicioOcho([4, 5, 3], 2))