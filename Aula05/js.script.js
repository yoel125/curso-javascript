const display = document.getElementById("display")
const zero = document.getElementById("0")
const um = document.getElementById("1")
const dois = document.getElementById("2")
const tres = document.getElementById("3")
const quatro = document.getElementById("4")
const cinco = document.getElementById("5")
const seis = document.getElementById("6")
const sete = document.getElementById("7")
const oito = document.getElementById("8")
const nove = document.getElementById("9")
const ponto = document.getElementById("•")   /*alt+7*/ 
const soma = document.getElementById("+")
const subtrair = document.getElementById("—") /*alt+0151 */
const multiplicar = document.getElementById("x")
const dividir = document.getElementById("/")
const igual = document.getElementById("igual")

var valor1 = display.innerHTML
var operacao = ""
var rs = 0


um.onclick = function(){
   
    if(display.innerHTML == "0"){
        display.innerHTML = "1"
    }
    else{
        display.innerHTML += "1"
    }
}
    dois.onclick = function(){

        if(display.innerHTML == "0"){
            display.innerHTML = "2"
        }
        else{
            display.innerHTML += "2"
        }
    }

    tres.onclick = function(){

        if(display.innerHTML == "0"){
            display.innerHTML = "3"
        }
        else{
            display.innerHTML += "3"
        }
    }

    quatro.onclick = function(){

        if(display.innerHTML == "0"){
            display.innerHTML = "4"
        }
        else{
            display.innerHTML += "4"
        }
    }

    cinco.onclick = function(){

        if(display.innerHTML == "0"){
            display.innerHTML = "5"
        }
        else{
            display.innerHTML += "5"
        }
    }

    seis.onclick = function(){

        if(display.innerHTML == "0"){
            display.innerHTML = "6"
        }
        else{
            display.innerHTML += "6"
        }
    }

    sete.onclick = function(){

        if(display.innerHTML == "0"){
            display.innerHTML = "7"
        }
        else{
            display.innerHTML += "7"
        }
    }

    oito.onclick = function(){

        if(display.innerHTML == "0"){
            display.innerHTML = "8"
        }
        else{
            display.innerHTML += "8"
        }
    }

    nove.onclick = function(){

        if(display.innerHTML == "0"){
            display.innerHTML = "9"
        }
        else{
            display.innerHTML += "9"
        }
    }

    zero.onclick = function(){

        if(display.innerHTML == "0"){
            display.innerHTML = "0"
        }
        else{
            display.innerHTML += "0"
        }
    }
    ponto.onclick = function(){
        display.innerHTML +="."
        ponto.disabled = true
    }

    dividir.onclick = function(){
        valor1 = display.innerHTML
        operacao = "dividir"
        display.innerHTML = "0"
    }

    multiplicar.onclick = function(){
        valor1 = display.innerHTML
        operacao = "multiplicar"
        display.innerHTML = "0"
    }

    subtrair.onclick = function(){
        valor1 = display.innerHTML
        operacao = "subtrair"
        display.innerHTML = "0"
    }

    soma.onclick = function(){
        valor1 = display.innerHTML
        operacao = "soma"
        display.innerHTML = "0"
    }
    igual.onclick = function(){
        switch(operacao){

            case "dividir":
            rs = valor1 / display.innerHTML
            display.innerHTML = rs
            break

            case "multiplicar":
                rs = valor1 * display.innerHTML
                display.innerHTML = rs
                break

                case "subtrair":
                    rs = valor1 - display.innerHTML
                    display.innerHTML = rs
                    break

                    case "soma":
                        rs = parseFloat(valor1) + parseFloat(display.innerHTML)
                        display.innerHTML = rs
                        break
        }
    }