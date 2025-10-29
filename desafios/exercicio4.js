/*​3.1) Com o mesmo array de produtos acima como você pode Filtrar Produtos com Preço Menor que R$8 ? */

const products = [
    { name: 'Maça', price: 2.5 },
    { name: 'Coca cola', price: 8 },
    { name: 'Guarana', price: 5 },
    { name: 'Chocolate', price: 20 }
];

const produtoMenorQueVinte = products.filter((produto) => {
    if(produto.price < 8)
    console.log(`Produtos merno do que R$20,00 ${produto.name}`)
})