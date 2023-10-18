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
            detalheFilme(item.id);
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

let divsombra = document.createElement("div")
let divbranca = document.createElement("div")
let fechar = document.createElement("a")
let divcamada = document.createElement("div")
let divcapa = document.createElement("div")
divcapa.className = "divcapa"

let divinfo = document.createElement("div")
divinfo.className = "divinfo"

let imgcapa = document.createElement("img")
let title = document.createElement("h2")


function detalheFilme(idfilme){


    const detalhe_filme =
    `https://api.themoviedb.org/3/movie/${idfilme}?api_key=cbf7cf8842a4939a896949602197ea5b&language=pt-br`;

    
    divsombra.style.width="100vw"
    divsombra.style.height="100vw"
    divsombra.style.position="fixed"
    divsombra.style.zIndex="10000"
    divsombra.style.backgroundColor="rgba(0,0,0,0.8)";
    divsombra.style.top="0px";
    divsombra.style.left = "0px";
    divsombra.style.display="flex";
    divsombra.style.justifyContent="center";
    

    
    divbranca.style.width="70vw"
    divbranca.style.height="60vh"
    
    divbranca.style.marginTop="10%"


fechar.href = "#";
fechar.innerHTML = "&times;";
// chamando a classe fechar que esta no arquivo de css e formatar o botao fechar
fechar.className = "fechar";
fechar.onclick = () =>{
    fechardetalhe();
}




divcamada.className = "divcamada";
divcamada.appendChild(fechar);
divbranca.appendChild(divcamada);


// realizar a chamada da api com os dados do filme especifico
fetch(detalhe_filme)
.then((response)=>response.json())
.then((rs)=>{

    divbranca.style.backgroundImage = `url(${url_img}${rs.backdrop_path})`
    divbranca.style.backgroundSize = "cover";
    divbranca.style.backgroundRepeat = "no-repeat";

    imgcapa.src = `${url_img}${rs.poster_path}`;
    divcapa.appendChild(imgcapa)
    divcamada.appendChild(divcapa);

title.innerHTML = rs.title;
divinfo.innerHTML += rs.release_date;
divinfo.innerHTML += rs.genres[0].name;
divinfo.innerHTML += rs.genres[1].name;
    divinfo.appendChild(title);
    divcamada.appendChild(divinfo);
})
.catch((erro) => console.error(`erro ao carregar o filme ${erro}`));

    divsombra.appendChild(divbranca)

    body.appendChild(divsombra);
}

function fechardetalhe(){
    divcamada.removeChild(fechar);
    divbranca.removeChild(divcamada)
    divsombra.removeChild(divbranca);
    body.removeChild(divsombra); 
}