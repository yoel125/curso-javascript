// criar as variáveis para fazer referenca aos controles html
var txtnome = document.getElementById("txtnome")
var txtsalario = document.getElementById("txtsalario")
var txtinss = document.getElementById("txtinss")
var txtconvenio = document.getElementById("txtconvenio")
var txtnfilhos = document.getElementById("txtnfilhos")
var txtliquido = document.getElementById("txtliquido")
var btncalcular = document.getElementById("btncalcular")
var texto = document.getElementById("texto")

txtsalario.onclick = function(){
    texto.innerHTML = "digite apenas o valor do salario sem r$"
}
txtinss.onclick = function(){
    var inss = "de r$ 0,00 até r$ 1.320,00 -> 7,5% <BR>"
    inss += "de r$ 1.320,01 até R$ 2.571,29 -> 9% <BR>"
    texto.innerHTML = inss
inss += "de R$ 2.571,30 até R$ 3.856,94 -> 12% <BR>"
inss += "de R$ 3.856,95 até R$ 7.507,49-> 14% <BR>"
texto.innerHTML = inss
}

txtconvenio.onclick = function(){
    texto.innerHTML = "salários até 2.500,00 o desconto é de 5%; caso contrario o desconto será de 7,5%"
}
txtnfilhos.onclick = function(){
    texto.innerHTML = "se o funcionario não ter filhos não recebera; caso contrario, recebera 5% do salário por filho"
}
btncalcular.onclick = function(){
    var rsinss
    var rsconvenio
    var rsnfilho
    var rsliquido
}
    if(txtsalario.value <= 1320){
        rsinss = txtsalario.value* (7.5/100)
    }
    else if(txtsalario.value <=2571,29){
        rsinss = txtsalario.value* (9/100)
    }
    else if(txtsalario.value <= 3856.94){
            rsinss = txtsalario.value* (12/100)
        }
        
        else if(txtsalario.value <= 7507.49){
            rsinss = txtsalario.value* (14/100)
        }
        else{
            rsinss = 7507.49 * (14/100)
        }

        if(txtconvenio.value <= 2500){
            rsconvenio = txtsalario.value * (5/100)
        }
        else {
            rsconvenio = txtsalario.value * (7.5/100)
        }

        txtliquido.value = rsinss