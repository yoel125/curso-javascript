/*
estamos utilizando o comando export para realizar
a importação das funcçoes dentro do arquivo
javascript e , assim utilizar a chamada do script no html 
*/

export const potencia = function(base, exp){
    let b = base;
    for(let i = 1 ; i < exp ; i++){
        base *= b;
    }
    return base;
    }
    export const menor = function(array){
        let m = array[0]
        for(let i = 1 ; i < array.length ; i++){
            if(array[i] < m){
                m = array[i];
            }
        }
        return m;
    }
    export const qtdletras = function(texto){
        return texto.length;
    }
    export const pontoporvirgula = function(texto){
        let rs = texto;
        for(let i = 0 ; i <texto.length ; i++){
rs = rs.replace(".", ",")
        }
        return rs;
    }
    // arrow function
    export const arrayreverso = (array)=>{
        let reverso=[];
for(let i = array.length-1; i >=0 ; i--){
    reverso.push(array[i])
}
return reverso;
    }
    const n = [2,3,10,5,2,6,10,2,4,3]
    export const frequenciaNumero = (array) => {

        // array para ajudar na contagem de cada número
      
        let contagem = [];
      
        // Variáveis para rastrear o número mais repetido e da contagem
      
        let numeroMaisRepetido;
      
        let contagemMaisRepetida = 0;
      
        // contagem do array e atualiza a contagem para cada número
      
        for (let i = 0; i < array.length; i++) {
      
          let numero = array[i];
      
          // Se o número ainda não estiver no array de contagem, inicialize-o com 1
      
          if (!contagem[numero]) {
      
            contagem[numero] = 1;
      
          } else {
      
            // Se o número já estiver no array de contagem, incremente a contagem
      
            contagem[numero]++;
      
          }
      
          // Verifique se a contagem atual é maior do que a contagem mais repetida
      
          if (contagem[numero] > contagemMaisRepetida) {
      
            numeroMaisRepetido = numero;
      
            contagemMaisRepetida = contagem[numero];
      
          }
      
        }
      
        return numeroMaisRepetido;
      
      };
      
      //No arquivo de script.js colocar o codigo abaixo
      
      const n2 = [2, 3, 10, 10, 2, 10, 10, 2, 4, 3];
      
      const numeroMaisRepetido = frequenciaNumero(n2);
      
      console.log("O número mais repetido é:", numeroMaisRepetido);
      
      