const numeros = [20,35,45,12]
console.log(numeros)
numeros.push(50)
console.log(numeros)
numeros.unshift(200)
console.log(numeros)
console.log("--- numeros adicionados pelo usuario---")

// var valores = prompt("digite numeros separados por virgula(,)")
// console.log("isso é uma string:"+valores)

// // o comando split é responsavel por pegar uma string e analisar o separador de caracteres
// // assim dividir em um array
// const array_valores = valores.split(",")
// console.log(array_valores)

// // verificar o tipo dos elementos valores e array_valores
// console.log(typeof(valores))
// console.log(typeof(array_valores))

const lista_produtos = [
["codigo","nome","preço"],
["51","mouse","r$ 50,20"],
]
console.log(lista_produtos)
// console.log(lista_produtos[1][1])
lista_produtos.push(["53","ssd","r$ 200,00"])
console.log(lista_produtos)
var novo_produto = prompt("adicioone o codigo , nome e preço separado por ;").split(";")
lista_produtos.push(novo_produto)
console.log(lista_produtos)