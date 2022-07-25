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
    
    escutaScroll()
    
//Fim código scrollytelling
    
//---------------------------------------------------------------------------------------------------------------
    
//Início código mapa
    
//Declara variáveis mapaUFMalha (SVG), mapaUFDados (JSON), dadosUFIntox (JSON), dadosMunIntox (JSON), malhas dos mun por estado (SVG) e mapaMunDados (JSON)
let mapaUFMalha;
let mapaUFDados;
let dadosUFIntox;
let dadosMunIntox;
let mapa11Malha;
let mapa12Malha;
let mapa13Malha;
let mapa14Malha;
let mapa15Malha;
let mapa16Malha;
let mapa17Malha;
let mapa21Malha;
let mapa22Malha;
let mapa23Malha;
let mapa24Malha;
let mapa25Malha;
let mapa26Malha;
let mapa27Malha;
let mapa28Malha;
let mapa29Malha;
let mapa31Malha;
let mapa32Malha;
let mapa33Malha;
let mapa35Malha;
let mapa41Malha;
let mapa42Malha;
let mapa43Malha;
let mapa50Malha;
let mapa51Malha;
let mapa52Malha;
let mapa53Malha;
let mapaMunDados;
        
//Função de carregar mapa - assíncrona
async function loadMapData(){
    
    //Declara mapaUFSvgUrl - SVGs dos estados a partir da API do IBGE
    let mapaUFSvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=UF';
    //Declara dadosUFUrl - JSON dos estados a partir da API do IBGE
    let dadosUFUrl='https://servicodados.ibge.gov.br/api/v1/localidades/estados';
    
    //Declara mapas de cada estado com seus municípios - SVGs dos municípios de cada estado a partir da API do IBGE
    let mapa11SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/11?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa12SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/12?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa13SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/13?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa14SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/14?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa15SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/15?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa16SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/16?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa17SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/17?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa21SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/21?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa22SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/22?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa23SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/23?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa24SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/24?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa25SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/25?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa26SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/26?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa27SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/27?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa28SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/28?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa29SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/29?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa31SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/31?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa32SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/32?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa33SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/33?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa35SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/35?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa41SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/41?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa42SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/42?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa43SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/43?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa50SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/50?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa51SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/51?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa52SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/52?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
    let mapa53SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/53?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio';
         
    //Declara dadosUFUrl - JSON dos estados a partir da API do IBGE
    let dadosMunUrl='https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome';     
        
    //Declara que mapaUFSvg (malha SVG dos estados) é um fecth do Url de SVGs do IBGE
    let mapaUFSvg = await fetch(mapaUFSvgUrl);
    //Declara que mapaUFMalha é mapaUFSVG transformado em string/texto
    mapaUFMalha = await mapaUFSvg.text();     
        
    //Declara que mapa**Svg (malhas SVG dos municípios por estado) são um fecth do Url de SVGs do IBGE, depois transforma em string/texto
    let mapa11Svg = await fetch(mapa11SvgUrl);
    mapa11Malha = await mapa11Svg.text();

    let mapa12Svg = await fetch(mapa12SvgUrl);
    mapa12Malha = await mapa12Svg.text();

    let mapa13Svg = await fetch(mapa13SvgUrl);
    mapa13Malha = await mapa13Svg.text();

    let mapa14Svg = await fetch(mapa14SvgUrl);
    mapa14Malha = await mapa14Svg.text();

    let mapa15Svg = await fetch(mapa15SvgUrl);
    mapa15Malha = await mapa15Svg.text();

    let mapa16Svg = await fetch(mapa16SvgUrl);
    mapa16Malha = await mapa16Svg.text();

    let mapa17Svg = await fetch(mapa17SvgUrl);
    mapa17Malha = await mapa17Svg.text(); 

    let mapa21Svg = await fetch(mapa21SvgUrl);
    mapa21Malha = await mapa21Svg.text();

    let mapa22Svg = await fetch(mapa22SvgUrl);
    mapa22Malha = await mapa22Svg.text();

    let mapa23Svg = await fetch(mapa23SvgUrl);
    mapa23Malha = await mapa23Svg.text();

    let mapa24Svg = await fetch(mapa24SvgUrl);
    mapa24Malha = await mapa24Svg.text();

    let mapa25Svg = await fetch(mapa25SvgUrl);
    mapa25Malha = await mapa25Svg.text();

    let mapa26Svg = await fetch(mapa26SvgUrl);
    mapa26Malha = await mapa26Svg.text();

    let mapa27Svg = await fetch(mapa27SvgUrl);
    mapa27Malha = await mapa27Svg.text();

    let mapa28Svg = await fetch(mapa28SvgUrl);
    mapa28Malha = await mapa28Svg.text();

    let mapa29Svg = await fetch(mapa29SvgUrl);
    mapa29Malha = await mapa29Svg.text();

    let mapa31Svg = await fetch(mapa31SvgUrl);
    mapa31Malha = await mapa31Svg.text();

    let mapa32Svg = await fetch(mapa32SvgUrl);
    mapa32Malha = await mapa32Svg.text();

    let mapa33Svg = await fetch(mapa33SvgUrl);
    mapa33Malha = await mapa33Svg.text();

    let mapa35Svg = await fetch(mapa35SvgUrl);
    mapa35Malha = await mapa35Svg.text();

    let mapa41Svg = await fetch(mapa41SvgUrl);
    mapa41Malha = await mapa41Svg.text();

    let mapa42Svg = await fetch(mapa42SvgUrl);
    mapa42Malha = await mapa42Svg.text();

    let mapa43Svg = await fetch(mapa43SvgUrl);
    mapa43Malha = await mapa43Svg.text();

    let mapa50Svg = await fetch(mapa50SvgUrl);
    mapa50Malha = await mapa50Svg.text();

    let mapa51Svg = await fetch(mapa51SvgUrl);
    mapa51Malha = await mapa51Svg.text();

    let mapa52Svg = await fetch(mapa52SvgUrl);
    mapa52Malha = await mapa52Svg.text();

    let mapa53Svg = await fetch(mapa53SvgUrl);
    mapa53Malha = await mapa53Svg.text();
      
    //Declara que dadosUFJson é um fetch do Url de JSON do IBGE
    let dadosUFJson = await fetch(dadosUFUrl);
    //Converte fetch da variável dadosUFJson em um arquivo JSON
    mapaUFDados = await dadosUFJson.json();
        
    //Declara que dadosMunJson é um fetch do Url de JSON do IBGE
    let dadosMunJson = await fetch(dadosMunUrl);
    //Converte fetch da variável dadosMunJson em um arquivo JSON
    mapaMunDados = await dadosMunJson.json(); 
    
    //Declara que DadosUFIntoxJson é um fetch do arquivo de intoxicações local
    let dadosUFIntoxJson = await fetch("./UF-intoxicacoes-obitos-2012-2022.json");
    //Converte fetch da variável DadosUFIntoxJson em um arquivo JSON
    dadosUFIntox = await dadosUFIntoxJson.json();
        
    //Declara que dadosMunIntoxJson é um fetch do arquivo de intoxicações local
    let dadosMunIntoxJson = await fetch("./Mun-intoxicacoes-obitos-2012-2022.json");
    //Converte fetch da variável dadosMunIntoxJson em um arquivo JSON
    dadosMunIntox = await dadosMunIntoxJson.json(); 
      
    //Declara que mapaConteudo é uma seleção dentro do elemento #mapa-conteudo no HMTL
    let mapaContent = document.querySelector('#map-content');
    //Declara que o HMTL da variável mapaConteúdo é o HTML da variável mapaMalha do BR por estados (SVG)
    mapaContent.innerHTML = mapaUFMalha;
        
    //Declara que path dos SVGs dos estados são variáveis a serem selecionadas
    let elemUF = document.querySelectorAll('#map-content svg path');       
        
    //Define ação para cada um dos elementos do array
    elemUF.forEach((elemento) => {       
        //Define variável codigoAlvo1 como o id do elemento    
        let codigoAlvo1 = parseInt (elemento.id);  
        //Método filter para filtrar id de cada SVG com id do JSON de dados de intoxicações
        let indiceIntox = dadosUFIntox.filter(function(item){
        return item.id === codigoAlvo1;
        });
        
        //Define que variável corIntox é que retorna da coluna intoxicacoes do estado do JSON
        let corIntox = indiceIntox[0].intoxicacoes;
        //Define que o indice para preenchimento é baseado em um cálculo do valor de intoxicações de cada UF
        elemento.dataset.indice = ((corIntox * 100 / 30098)/10).toFixed(2); 
        //Define opacidade do preenchimento a partir do índice
        elemento.setAttribute('fill-opacity', elemento.dataset.indice);
            
        //Define a ação no mouseover
        elemento.onmouseover = marcaUF;        
        //Define a ação no mouseout
        elemento.onmouseout = desmarcaUF;
        //Define a ação no click
        elemento.onclick = vaiParaMun;            
    });

    //Oculta div do botão de voltar
    document.querySelector('#buttonVoltar').style.display = 'none';
}
    
//Função de colorir UF no mouseover
function marcaUF(event){
    
    //Define variável elemento como alvo do evento que está sendo ouvido
    let elemento = event.target;    
    
    //Define variável codigoAlvo2 como o id do elemento
    let codigoAlvo2 = parseInt (elemento.id);  
    //Método filter para filtrar id de cada SVG com id do JSON de dados do UF
    let dadosUF = mapaUFDados.filter(function(item){
        return item.id === codigoAlvo2;
        });   
    
    //Define que variável nome é que retorna da coluna nome do estado do JSON
    let nome = dadosUF[0].nome;
    //Define que variável uf é que retorna da coluna sigla do estado do JSON
    let uf = dadosUF[0].sigla;
    
    //Define variável codigoAlvo3 como o id do elemento    
    let codigoAlvo3 = parseInt (elemento.id);  
    //Método filter para filtrar id de cada SVG com id do JSON de dados de intoxicações
    let dadosIntox = dadosUFIntox.filter(function(item){
        return item.id === codigoAlvo3;
        });
    //Define que variável qtdIntox é que retorna da coluna intoxicacoes do estado do JSON  
    let qtdIntox = dadosIntox[0].intoxicacoes;
    //Define que variável qtdMortes é que retorna da coluna mortes do estado do JSON  
    let qtdMortes = dadosIntox[0].mortes;
        
    //Tira classe 'ativo' da seleção anterior, se houver
    let selecaoAnterior = document.querySelector('path.ativo');
    if(selecaoAnterior){ selecaoAnterior.classList.remove("ativo") }    
    //Muda classe CSS do elemento para ativo no mouseover
    elemento.classList.add("ativo");
        
    //Preenche box com nome, UF, qtd de intoxicacões e de mortes
    document.querySelector('#UF-nome').textContent = nome + " - " + uf;
    document.querySelector('#UF-valorIntox').textContent =  qtdIntox + " intoxicações";
    document.querySelector('#UF-valorMortes').textContent =  qtdMortes + " mortes";
}
    
//Função de descolorir UF no mouseout
function desmarcaUF(event){
        
    //Define variável elemento como o alvo do evento que está sendo ouvido
    let elemento = event.target;    
    //Remove classe CSS do elemento de ativo no mouseout
    elemento.classList.remove("ativo");
    // preenche os elementos com nome, UF, qtd de intoxicacões e de mortes
    document.querySelector('#UF-nome').textContent = "Brasil";
    document.querySelector('#UF-valorIntox').textContent =  "30.098 intoxicações";
    document.querySelector('#UF-valorMortes').textContent =  "1.765 mortes";
}
    
//Função de clicar no UF
function vaiParaMun(event){
    
    //Define variável elemento como o alvo do evento que está sendo ouvido
    let elemento = event.target;

    //Define variável codigoAlvo4 como o id do elemento
    let codigoAlvo4 = parseInt (elemento.id);
    //Método filter para filtrar id de cada SVG com id do JSON de dados do UF
    let filtroUF = mapaUFDados.filter(function(item){
        return item.id === codigoAlvo4;
        });
    //Define que variável uf é que retorna da coluna sigla do estado do JSON
    let clickUF = filtroUF[0].id;
    
    //Mostra botão de voltar
    document.querySelector('#buttonVoltar').style.display = 'inline-block';
    //Define que click no botao recarrega mapa inicial do BR
    buttonVoltar.onclick = loadMapData;
    
    //Declara que mapaConteudo é uma seleção dentro do elemento #mapa-conteudo no HMTL
    let mapaContent = document.querySelector('#map-content');

    //Define que mapa é carregado de acordo com o id de cada UF clicado
    if (clickUF === 11) {
        mapaContent.innerHTML = mapa11Malha;
    }

    if (clickUF === 12) {
            mapaContent.innerHTML = mapa12Malha;
        }

    if (clickUF === 13) {
            mapaContent.innerHTML = mapa13Malha;
        }

    if (clickUF === 14) {
            mapaContent.innerHTML = mapa14Malha;
        }

    if (clickUF === 15) {
            mapaContent.innerHTML = mapa15Malha;
        }

    if (clickUF === 16) {
            mapaContent.innerHTML = mapa16Malha;
        }

    if (clickUF === 17) {
            mapaContent.innerHTML = mapa17Malha;
        }

    if (clickUF === 21) {
            mapaContent.innerHTML = mapa21Malha;
        }

    if (clickUF === 22) {
            mapaContent.innerHTML = mapa22Malha;
        }

    if (clickUF === 23) {
            mapaContent.innerHTML = mapa23Malha;
        }

    if (clickUF === 24) {
            mapaContent.innerHTML = mapa24Malha;
        }

    if (clickUF === 25) {
            mapaContent.innerHTML = mapa25Malha;
        }

    if (clickUF === 26) {
            mapaContent.innerHTML = mapa26Malha;
        }

    if (clickUF === 27) {
            mapaContent.innerHTML = mapa27Malha;
        }

    if (clickUF === 28) {
            mapaContent.innerHTML = mapa28Malha;
        }

    if (clickUF === 29) {
            mapaContent.innerHTML = mapa29Malha;
        }

    if (clickUF === 31) {
            mapaContent.innerHTML = mapa31Malha;
        }

    if (clickUF === 32) {
            mapaContent.innerHTML = mapa32Malha;
        }

    if (clickUF === 33) {
            mapaContent.innerHTML = mapa33Malha;
        }

    if (clickUF === 35) {
            mapaContent.innerHTML = mapa35Malha;
        }

    if (clickUF === 41) {
            mapaContent.innerHTML = mapa41Malha;
        }

    if (clickUF === 42) {
            mapaContent.innerHTML = mapa42Malha;
        }

    if (clickUF === 43) {
            mapaContent.innerHTML = mapa43Malha;
        }

    if (clickUF === 50) {
            mapaContent.innerHTML = mapa50Malha;
        }

    if (clickUF === 51) {
            mapaContent.innerHTML = mapa51Malha;
        }

    if (clickUF === 52) {
            mapaContent.innerHTML = mapa52Malha;
        }

    if (clickUF === 53) {
            mapaContent.innerHTML = mapa53Malha;
        }
    
    //Define que os SVGs dos municípios são elementos
    let elemMun = document.querySelectorAll('#map-content svg path');

    //Define função para cada SVG
    elemMun.forEach((elemento) => {                     
        //Define variável codigoAlvoMun como o id do elemento    
        let codigoAlvoMun = parseInt (elemento.id);
        //Método filter para filtrar id de cada SVG com id do JSON de dados de intoxicações
        let indiceIntoxMun = dadosMunIntox.filter((item) => {
        return item.id === codigoAlvoMun;
        });
    //Define que variável corIntox é que retorna da coluna intoxicacoes do muncípio do JSON
    let corIntoxMun
    if ( indiceIntoxMun[ 0 ] ) {
        //Se o município tiver dados de intoxicação
        corIntoxMun = indiceIntoxMun[0].intox
        } else
        {
        //Se o município NÃO tiver dados de intoxicação (obrigado, Vini!!)
        corIntoxMun = 0
        }
    //Define que o indice para preenchimento é baseado em um cálculo do valor de intoxicações de cada município
    elemento.dataset.indice = ((corIntoxMun * 100 / 30097)*3).toFixed(2); 
    //Define opacidade do preenchimento a partir do índice
    elemento.setAttribute('fill-opacity', elemento.dataset.indice);

    //Define a ação no mouseover
    elemento.onmouseover = marcaMun;
    //Define a ação no mouseout
    elemento.onmouseout = desmarcaMun;
    });
}

//Função de colorir município no mouseover
function marcaMun(event){
    
    //Define variável elemento como alvo do evento que está sendo ouvido
    let elemento = event.target;

    //Define variável codigoAlvoMun como o id do elemento
    let codigoAlvoMun = parseInt (elemento.id);  
    //Método filter para filtrar id de cada SVG com id do JSON de dados do município
    let dadosMun = mapaMunDados.filter((item) => {
        return item.id == codigoAlvoMun;
        });    
    //Define que variável nome é que retorna da coluna nome do muncípio do JSON
    let nome = dadosMun[0].nome;
    
    //Define variável codigoAlvoIntoxMun como o id do elemento    
    let codigoAlvoIntoxMun = parseInt (elemento.id);  
    //Método filter para filtrar id de cada SVG com id do JSON de dados de intoxicações
    let MunIntox = dadosMunIntox.filter(function(item){
        return item.id === codigoAlvoIntoxMun;
        });
    //Define que variável qtdIntoxMun é que retorna da coluna intox do município do JSON  
    let qtdIntoxMun
    if ( MunIntox[ 0 ] ) {
    // Município tem dados de intoxicação
      qtdIntoxMun = MunIntox[0].intox
    } else {
    // Município NÃO tem dados de intoxicação
      qtdIntoxMun = 0
    }
    //Define que variável qtdMortesMun é que retorna da coluna mortes do município do JSON  
    let qtdMortesMun
    if ( MunIntox[ 0 ] ) {
    // Município tem dados de mortes
      qtdMortesMun = MunIntox[0].mortes
    } else {
    // Município NÃO tem dados de mortes
      qtdMortesMun = 0
    }

    //Tira a classe 'ativo' da seleção anterior, se houver
    let selecaoAnterior = document.querySelector('path.ativo');
    if(selecaoAnterior){ selecaoAnterior.classList.remove("ativo") }    
    //Muda classe CSS do elemento para ativo no mouseover
    elemento.classList.add("ativo");

    //Preenche os elementos com nome, qtd de intoxicacões e de mortes
    document.querySelector('#UF-nome').textContent = nome;
    document.querySelector('#UF-valorIntox').textContent =  qtdIntoxMun + " intoxicações";
    document.querySelector('#UF-valorMortes').textContent =  qtdMortesMun + " mortes";
}

//Função de descolorir Mun no mouseout
function desmarcaMun(event){
        
    //Define variável elemento como o alvo do evento que está sendo ouvido
    let elemento = event.target;    
    //Remove classe CSS do elemento de ativo no mouseout
    elemento.classList.remove("ativo");
    // preenche os elementos com nome, UF, qtd de intoxicacões e de mortes
    document.querySelector('#UF-nome').textContent = "Brasil";
    document.querySelector('#UF-valorIntox').textContent =  "30.098 intoxicações";
    document.querySelector('#UF-valorMortes').textContent =  "1.765 mortes";
}
    
loadMapData();

    
//console.log (clickUF);


// Lista de intoxicados por raça por região
let dados = [
    {
      "regiao": "Todo o Brasil",
      "brancas": 3302,
      "negras": 3859,
      "indígenas": 36,
      "amarelas": 75,
      "sem informação": 1145
    },
    {
      "regiao": "Norte",
      "brancas": 78,
      "negras": 592,
      "indígenas": 3,
      "amarelas": 5,
      "sem informação": 10
    },
    {
      "regiao": "Nordeste",
      "brancas": 148,
      "negras": 1396,
      "indígenas": 15,
      "amarelas": 36,
      "sem informação": 875
    },
    {
      "regiao": "Sudeste",
      "brancas": 1032,
      "negras": 911,
      "indígenas": 3,
      "amarelas": 8,
      "sem informação": 136
    },
    {
      "regiao": "Sul",
      "brancas": 1876,
      "negras": 476,
      "indígenas": 9,
      "amarelas": 21,
      "sem informação": 60
    },
    {
      "regiao": "Centro-Oeste",
      "brancas": 168,
      "negras": 484,
      "indígenas": 6,
      "amarelas": 5,
      "sem informação": 64
    }
  ]
  
  // Seleciona <ul>
  let lista = document.querySelector( 'ul' )
  
  // Cria elementos
  for ( let dado of dados ) {
  
    // Cria elemento pai
    let item = document.createElement( 'li' )
  
    // Cria elementos filhos
    let rotulo = document.createElement( 'span' )
    let barra = document.createElement( 'span' )
    let quantidade = document.createElement( 'span' )
    
    // Adiciona texto
    rotulo.textContent = dado.regiao
  
    // Adiciona classes
    rotulo.classList.add( 'rotulo' )
    barra.classList.add( 'barra' )
    quantidade.classList.add( 'quantidade' )
  
    // Insere os elementos
    item.append( rotulo )
    item.append( barra )
    item.append( quantidade )
    lista.append( item )
  
  }
  
  // Seleciona todas as <li>
  let itens = document.querySelectorAll( 'li' )
  
  // Seleciona o elemento <select>
  let seletor = document.querySelector( 'select' )
  
  // Dispara uma funcão a partir do seletor
  seletor.addEventListener( 'change', redimensionaBarras )
  
  // Função que muda o comprimento das barras
  function redimensionaBarras() {
  
    // Identifica a raça que a pessoa selecionou
    let raca = seletor.value
    
    // Para cada região…
    for ( let dado of dados ) {
  
      // Guardar a região atual
      let regiao = dado.regiao
  
      // Para cada <li>…
      for ( let item of itens ) {
  
        // Seleciona elemento  da região
        let rotulo = item.querySelector( '.rotulo' )
  
        // Se o texto desse elemento é  igual ao da região
        if ( rotulo.textContent == regiao ) {
          
          // Seleciona elementos .barra e .quantidade
          let barra = item.querySelector( '.barra' )
          let quantidade  = item.querySelector( '.quantidade' )
  
          // Guarda o valor
          let valor = dado[ raca ]
  
          // Calcula o comprimento para as barras
          let largura = valor / 5
          
          // Aplica o comprimento
          barra.style.width = largura + 'px' 
  
          // Adiciona um espaço
          quantidade.textContent = ' ' + valor
  
        }
  
      }
  
    }
  
  }
  
  // Desenha o gráfico quando a página é carregada
  redimensionaBarras()