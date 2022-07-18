//Início código scrollytelling

//Evento de escuta
function escutaScroll(event){
    
//Ver gatilhos 
    let gatilhos = document.querySelectorAll(".gatilhos > div");
    
//Loop de gatilhos
    for(let gatilho of gatilhos){
//Posições
    let posicao = gatilho.getBoundingClientRect();
//Propriedade data-alvo
    let alvo = gatilho.dataset.alvo;
// Elemento do alvo
    let passo = document.querySelector('.'+alvo);
//Posição no topo
    if(posicao.top <= 0 && posicao.top > -posicao.height){
// Se está no topo, exibe
    passo.classList.add('passo-ativo');
            }else{
// Se não, não exibe
    passo.classList.remove('passo-ativo');
            }
        }
    }
    
//Javascript escuta evento de rolagem
window.addEventListener('scroll', escutaScroll);

//Fim código scrollytelling

//---------------------------------------------------------------------------------------------------------------

//Início código mapa

//Declara variáveis mapaMalha (SVG) e mapaDados (JSON)
let mapaMalha;
let mapaDados;
    
//Função de carregar mapa - assíncrona
async function loadMapData(){

    //Declara mapaUrl - SVGs dos estados a partir da API do IBGE
    let mapaUrl='https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=UF'
    
    //Declara dados Url - JSON dos estados a partir da API do IBGE
    let dadosUrl='https://servicodados.ibge.gov.br/api/v1/localidades/estados';
    
    //Declara que mapaSvg (malha SVG dos estados) é um fecth do Url de SVGs do IBGE
    let mapaSvg = await fetch(mapaUrl);

    //Declara que mapaMalha é mapaSVG transformado em string/texto
    mapaMalha = await mapaSvg.text();

    //Declara que dadosJson é um fetch do Url de JSON do IBGE
    let dadosJson = await fetch(dadosUrl);
    
    //Converte fetch da variável dadosJson em um arquivo JSON
    mapaDados = await dadosJson.json();

    //Declara que mapaConteudo é uma seleção dentro do elemento #mapa-conteudo no HMTL
    let mapaConteudo = document.querySelector('#mapa-conteudo');

    //Declara que o HMTL da variável mapaConteúdo é o HTML da variável mapaMalha (SVG)
    mapaConteudo.innerHTML = mapaMalha;
    
    //Declara que path dos SVGs dos estados são variáveis a serem selecionadas
    let elemMunicipios = document.querySelectorAll('#mapa-conteudo svg path');

    //Define ação para cada um dos elementos do array
    elemMunicipios.forEach((elemento) => {

        //Cria um número aleatório
        let numAleatorio = Math.random()*0.8;

        //Cria um número aleatório???
        elemento.dataset.indice = (1 - numAleatorio).toFixed(2); 
    
        //Define opacidade do preenchimento a partir do índice
        elemento.setAttribute('fill-opacity', elemento.dataset.indice);
        
        //Define ação no mouseover
        elemento.onmouseover = marcaMunicipio;
        
        //Define a ação no mouseout
        elemento.onmouseout = desmarcaMunicipio;
        });
}

//Função de colorir município no mouseover
function marcaMunicipio(event){

    //Define variável como alvo do evento que está sendo ouvido
    let elemento = event.target;
    
    //Define variável como o id do elemento
    let codigoAlvo = elemento.id;
    
    //Método filter que filtra array de acordo com propriedade do elemento
    let dadosMunicipio = mapaDados.filter(function(item){
        return item.id === codigoAlvo;
        });
    
    //Busca nome do estado do JSON
    let nome = dadosMunicipio[0].nome;
    
    //Precisa arrumar!!!
    let uf = dadosMunicipio[0].nome;
    
    // tira a classe 'ativo' da seleção anterior, se houver
    let selecaoAnterior = document.querySelector('path.ativo');
    if(selecaoAnterior){ selecaoAnterior.classList.remove("ativo") }
    
    //Muda classe CSS do elemento para ativo no mouseover
    elemento.classList.add("ativo");
    
    // preenche os elementos com nome, UF e o índice
    document.querySelector('#muni-titulo').textContent = nome + uf;
    document.querySelector('#muni-valor').textContent = "índice: " + elemento.dataset.indice;
}

//Função de descolorir município mouseout
function desmarcaMunicipio(event){
    
    //Define variável como alvo do evento que está sendo ouvido
    let elemento = event.target;
    
    //Remove classe CSS do elemento de ativo no mouseout
    elemento.classList.remove("ativo");
}
    
loadMapData();