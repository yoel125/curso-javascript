let txtano = document.getElementById("txtano")
let btnverificar = document.getElementById("btnverificar")
let rs = document.getElementById("rs")

btnverificar.onclick = function(){
// if(txtano.value % 4 == 0){
//     rs.innerHTML = "este ano é bissexto"
// }
// else{
//     rs.innerHTML = "este ano não é bissexto"
// }

rs.innerHTML = txtano.value % 4 == 0 ? "este ano é bissexto" : "este ano não é bissexto"

}