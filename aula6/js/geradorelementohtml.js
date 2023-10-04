function gerarInputs(){
    // vamos referenciar o documento html 
    const body = document.body;
    // criar um elemento de titulo(h1)
    const h1 = document.createElement("h1")
    h1.innerHTML = "criar elementos"
    // vamos add o elemento h1 ao body
     body.appendChild(h1); /*add um elemento filho */

    //  criar um elemento de formulario
    const form = document.createElement("form");
    // add um atributo ao elemento no form
    form.setAttribute("id","cadastro")

var ninput = 0;
while(ninput < 10){
    let caixa = document.createElement("input")
    // add o atributo type
    caixa.setAttribute("type","text")

    // add o atributo id
    caixa.setAttribute("id","caixa"+ninput)


// add o elemento input (caixa) ao form
form.appendChild(caixa);
ninput++;
}

body.appendChild(form); /*add o formulario ao body */

for(let inp = 0; inp < 10; inp++){
 var estilo = document.getElementsByTagName("input")[inp].style;
estilo.display = "block"
estilo.width = "80%"
estilo.padding = "10px"
estilo.margin = "10px"
estilo.fontFamily = "arial"
}

}