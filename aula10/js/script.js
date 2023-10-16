const url_filmes = "https://api.themoviedb.org/3/movie/popular?api_key=cbf7cf8842a4939a896949602197ea5b&language=pt-br&page=1"

const url_img = "https://image.tmdb.org/t/p/w500";
// fazer referencia ao corpo da pagina 
const body = document.body;

body.onload = ()=>{
     carregarFilmes();
};

function carregarFilmes(){
    const h1 = document.createElement("h1");
    h1.innerHTML = "lista de filmes"
    const header = document.createElement("header")
    const main = document.createElement("main")
    const footer = document.createElement("footer")
    header.appendChild(h1);

// realizar a chamada da api e tratar dados qie retornem
// utilizarmos o comando fetch(buscar) e, este comando
// promise.sendo assim. ele tem 2 elementos de retorno
// 1-resolve : then e o 2-reject -> catch
// quanto tudo da certo, temos um resolve e quanto temos um erro
// retorno e reject

fetch(url_filmes).then((responce)=>responce.json()).
then((saida)=>{
    console.log(saida.results)
    saida.results.map((item)=>{
        let divfilme = document.createElement("div");
        divfilme.setAttribute("class","divfilme")

        let imgfilme = document.createElement("img");
        imgfilme.src = `${url_img}${item.poster_path}`
        imgfilme.setAttribute("class","imgfilme")

        let titulofilme = document.createElement("h2");
        titulofilme.innerHTML = item.title;

        let lancamento = document.createElement("h4");
        lancamento.innerHTML = item.release_date;

        divfilme.appendChild(imgfilme)
        divfilme.appendChild(titulofilme)
        divfilme.appendChild(lancamento)
        
        divfilme.onclick = ()=>{
            detalheFilme();
        }
        main.appendChild(divfilme)
    })
})
.catch((erro)=>console.error(`erro ao carregar a api ${erro}`))


    // adicionar as areas header,main e footer ao body
    body.appendChild(header);
    body.appendChild(main);
    body.appendChild(footer);
}

function detalheFilme(){
    const detalhe_filme =
    "https://api.themoviedb.org/3/movie/575264?api_key=cbf7cf8842a4939a896949602197ea5b&language=pt-br"
    let divsombra = document.createElement("div")
    divsombra.style.width="100vw"
    divsombra.style.height="100vw"
    divsombra.style.position="fixed"
    divsombra.style.zIndex="10000"
    divsombra.style.backgroundColor="rgba(0,0,0,0.8)";
    divsombra.style.top="0px";
    divsombra.style.left = "0px";
    divsombra.style.display="flex";
    divsombra.style.justifyContent="center";
    

    let divbranca = document.createElement("div")
    divbranca.style.width="70vw"
    divbranca.style.height="60vh"
    divbranca.style.backgroundColor="white"
    divbranca.style.marginTop="10%"

    divsombra.appendChild(divbranca)

    body.appendChild(divsombra);
}