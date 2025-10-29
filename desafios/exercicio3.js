/*3) Com base no array abaixo o desafio como você pode percorrer e encontrar o produto com Preço Igual a R$20 e o resultado deve mostrar apenas o produto que tem o preço igual a R$20: */

const products = [
    { name: 'Maça', price: 2.5 },
    { name: 'Coca cola', price: 8 },
    { name: 'Guarana', price: 5 },
    { name: 'Chocolate', price: 20 }
];

const produtoEspecifico = products.map((produto) =>{
    if(produto.price === 20){
        console.log(`O produto com o preço de R$20,00 é o ${produto.name}`)
    }
})

