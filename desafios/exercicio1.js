/*​1) Verificador de Número Negativo, Positivo ou Zero: Escreva uma função que recebe um número como parâmetro e verifica se é negativo, positivo ou igual a zero. A função deve retornar uma string indicando o resultado.*/

function validaNumero(number){
    if(number < 0){
        console.log(`${number} é negativo`)
    } else if( number === 0 ){
        console.log(`${number} é 0`)
    } else {
        console.log(`${number} é maior que 0`)
    }
}

validaNumero(10)//maior que 0
validaNumero(0)
validaNumero(-10)