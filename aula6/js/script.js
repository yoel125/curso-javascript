/*
pontos a considerar sobre estruturas de repetição
1 - inicializar a variavel (ponto de partida ) 
2 - condição para repetição(true/false)
3 - estrutura do corpo de execução
4 - incrementação ou descrementação da variavel
*/

function while1(){
    let init = 30
    while(init <= 20){
        console.log(init)
        init++
    }
}

function dowhile1(){
    let i = 20
    do{
        console.log(i)
        i++
    }while(i <= 10)
}

function for1(){
    for (let x = 0; x <= 10; x++){
        console.log(x)
    }
}