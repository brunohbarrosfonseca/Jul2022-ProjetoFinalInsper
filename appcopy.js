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
    
    //Declara variáveis mapaUFMalha (SVG), mapaUFDados (JSON) e dadosUFIntox (JSON)
    let mapaUFMalha;
    let mapaUFDados;
    let dadosUFIntox;
    let dadosMunIntox;
    let mapa31Malha;
    let mapa35Malha;
    let mapaMunDados;
    
        
    //Função de carregar mapa - assíncrona
    async function loadMapData(){
    
        //Declara mapaUFSvgUrl - SVGs dos estados a partir da API do IBGE
        let mapaUFSvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=UF'
        //Declara dadosUFUrl - JSON dos estados a partir da API do IBGE
        let dadosUFUrl='https://servicodados.ibge.gov.br/api/v1/localidades/estados';
    
        //Declara mapaUFSvgUrl - SVGs dos estados a partir da API do IBGE
        let mapa31SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/31?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio'
        //Declara mapaUFSvgUrl - SVGs dos estados a partir da API do IBGE
        let mapa35SvgUrl='https://servicodados.ibge.gov.br/api/v3/malhas/estados/35?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio'
     
        //Declara dadosUFUrl - JSON dos estados a partir da API do IBGE
        let dadosMunUrl='https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome';
        
        
        //Declara que mapaUFSvg (malha SVG dos estados) é um fecth do Url de SVGs do IBGE
        let mapaUFSvg = await fetch(mapaUFSvgUrl);
        //Declara que mapaUFMalha é mapaUFSVG transformado em string/texto
        mapaUFMalha = await mapaUFSvg.text();    
    
    
        //apagar
        //Declara que mapaUFSvg (malha SVG dos estados) é um fecth do Url de SVGs do IBGE
        let mapa31Svg = await fetch(mapa31SvgUrl);
        //Declara que mapaUFMalha é mapaUFSVG transformado em string/texto
        mapa31Malha = await mapa31Svg.text(); 
        //Declara que mapaUFSvg (malha SVG dos estados) é um fecth do Url de SVGs do IBGE
        let mapa35Svg = await fetch(mapa35SvgUrl);
        //Declara que mapaUFMalha é mapaUFSVG transformado em string/texto
        mapa35Malha = await mapa35Svg.text(); 
    
    
    
        //Declara que dadosUFJson é um fetch do Url de JSON do IBGE
        let dadosUFJson = await fetch(dadosUFUrl);
        //Converte fetch da variável dadosUFJson em um arquivo JSON
        mapaUFDados = await dadosUFJson.json();
        
        //Declara que dadosUFJson é um fetch do Url de JSON do IBGE
        let dadosMunJson = await fetch(dadosMunUrl);//apagar
        //Converte fetch da variável dadosUFJson em um arquivo JSON
        mapaMunDados = await dadosMunJson.json();//apagar
    
    
    
        //Declara que DadosUFIntoxJson é um fetch do arquivo de intoxicações local
        let dadosUFIntoxJson = await fetch("./UF-intoxicacoes-obitos-2012-2022.json");
        //Converte fetch da variável DadosUFIntoxJson em um arquivo JSON
        dadosUFIntox = await dadosUFIntoxJson.json();
        
        //Declara que DadosUFIntoxJson é um fetch do arquivo de intoxicações local
        let dadosMunIntoxJson = await fetch("./Mun-intoxicacoes-obitos-2012-2022.json");
        //Converte fetch da variável DadosUFIntoxJson em um arquivo JSON
        dadosMunIntox = await dadosMunIntoxJson.json(); 
    
    
    
        //Declara que mapaConteudo é uma seleção dentro do elemento #mapa-conteudo no HMTL
        let mapaContent = document.querySelector('#map-content');
        //Declara que o HMTL da variável mapaConteúdo é o HTML da variável mapaMalha (SVG)
        mapaContent.innerHTML = mapaUFMalha;
        
        //Declara que path dos SVGs dos estados são variáveis a serem selecionadas
        let elemUF = document.querySelectorAll('#map-content svg path');
        
        
        //Define ação para cada um dos elementos do array
        elemUF.forEach((elemento) => {
            
            //Define variável Alvo3 como o id do elemento    
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
    }
    
    //Função de colorir UF no mouseover
    function marcaUF(event){
    
        //Define variável elemento como alvo do evento que está sendo ouvido
        let elemento = event.target;    
    
        //Define variável Alvo1 como o id do elemento
        let codigoAlvo2 = parseInt (elemento.id);  
        //Método filter para filtrar id de cada SVG com id do JSON de dados do UF
        let dadosUF = mapaUFDados.filter(function(item){
            return item.id === codigoAlvo2;
            });   
        //Define que variável nome é que retorna da coluna nome do estado do JSON
        let nome = dadosUF[0].nome;
        //Define que variável uf é que retorna da coluna sigla do estado do JSON
        let uf = dadosUF[0].sigla;
    
        //Define variável Alvo2 como o id do elemento    
        let codigoAlvo3 = parseInt (elemento.id);  
         //Método filter para filtrar id de cada SVG com id do JSON de dados de intoxicações
        let dadosIntox = dadosUFIntox.filter(function(item){
            return item.id === codigoAlvo3;
            });
        //Define que variável qtdIntox é que retorna da coluna intoxicacoes do estado do JSON  
        let qtdIntox = dadosIntox[0].intoxicacoes;
        //Define que variável qtdIntox é que retorna da coluna intoxicacoes do estado do JSON  
        let qtdMortes = dadosIntox[0].mortes;
        
        // tira a classe 'ativo' da seleção anterior, se houver
        let selecaoAnterior = document.querySelector('path.ativo');
        if(selecaoAnterior){ selecaoAnterior.classList.remove("ativo") }    
        //Muda classe CSS do elemento para ativo no mouseover
        elemento.classList.add("ativo");
        
        // preenche os elementos com nome, UF, qtd de intoxicacões e de mortes
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
        //Define variável Alvo1 como o id do elemento
        let codigoAlvo4 = parseInt (elemento.id);
        //Método filter para filtrar id de cada SVG com id do JSON de dados do UF
        let filtroUF = mapaUFDados.filter(function(item){
            return item.id === codigoAlvo4;
            });
        //Define que variável uf é que retorna da coluna sigla do estado do JSON
        let clickUF = filtroUF[0].id;
    
        //Declara que mapaConteudo é uma seleção dentro do elemento #mapa-conteudo no HMTL
        let mapaContent = document.querySelector('#map-content');
    
        if (clickUF === 31) {
            //Declara que o HMTL da variável mapaConteúdo é o HTML da variável mapaMalha (SVG)
            mapaContent.innerHTML = mapa31Malha;
        }
    
        if (clickUF == 35) {
            //Declara que o HMTL da variável mapaConteúdo é o HTML da variável mapaMalha (SVG)
            mapaContent.innerHTML = mapa35Malha;
        }
        
        let elemMun = document.querySelectorAll('#map-content svg path');
        elemMun.forEach((elemento) => {
                        
            //Define variável Alvo3 como o id do elemento    
            let codigoAlvoMun = parseInt (elemento.id);
        
            //Método filter para filtrar id de cada SVG com id do JSON de dados de intoxicações
            let indiceIntoxMun = dadosMunIntox.filter((item) => {
            return item.id === codigoAlvoMun;
            });
            //Define que variável corIntox é que retorna da coluna intoxicacoes do estado do JSON
            let corIntoxMun = indiceIntoxMun[0].intoxicacoes;
                
            //Define que o indice para preenchimento é baseado em um cálculo do valor de intoxicações de cada UF
            elemento.dataset.indice = ((corIntoxMun * 100 / 30097)*5).toFixed(2); 
            //Define opacidade do preenchimento a partir do índice
            elemento.setAttribute('fill-opacity', elemento.dataset.indice);
            });
        
    
    }
    
    
    
    
    
    //console.log (clickUF);
    
    
    loadMapData();