/*2) Desafio da Verificação de Elemento em um Array: Crie uma função que deve esperar receber 2 parâmetros, primeiro deve ser um array de números e o segundo parâmetro é um numero que deseja conferir se esse numero existe dentro do array e com isso você deve mostrar o resultado se esse numero que colocou existe dentro do seu array de números.  */

const arrayDeNumeros = [1, 3, 7, 9 , 11];

function validaNumero(array, numero){
    if(array.includes(numero)){
        console.log("O número está dentro do array");
    } else{
        console.log("o número não está dentro do array");
    }
}

validaNumero(arrayDeNumeros, 11)