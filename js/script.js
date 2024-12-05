const nomeMusica = document.getElementById('nomemusica');
const nomeCantor = document.getElementById('artista');
const capa = document.getElementById('capa');
const musica = document.getElementById('audio');
const pause = document.getElementById('pausa');
const proximo = document.getElementById('proximo');
const anterior = document.getElementById('anterior');
const progresso = document.getElementById('mudancaBarra');
const contemProgresso = document.getElementById('contemProgresso');
const embaralha = document.getElementById('embaralha');

//#region musicas
const IhaveN = 
{
   nomeMusica:"I Have Nothing",
   artista: "Whitney Houston",
   arquivo: "wh",
   

}
const Bad = 
{
   nomeMusica:"Bad",
   artista: "Michael Jackson",
   arquivo: "bad"

}
const BR = 
{
   nomeMusica:"Bohemian Rhapsody",
   artista: "Queen",
   arquivo: "queen",
   
}

let taTocando = false;
let taEmbaralhado = false; 
const playlist = [IhaveN, Bad, BR]
const playlist2 = [...playlist]
let index=0;

function playMusica()
{
    pause.querySelector('.bi').classList.remove('bi-play-circle-fill');
    pause.querySelector('.bi').classList.add('bi-pause-circle-fill');
    musica.play();
    taTocando = true;
    
}


function pauseMusica()
{
    pause.querySelector('.bi').classList.add('bi-play-circle-fill');
    pause.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    musica.pause();
    taTocando= false;
      
}

function decide()
{
  if (taTocando === true)
  {
    pauseMusica();
  }
  else
  {
    playMusica();

  }


}
//#endregion

//#region tocar

function iniciar()
{
 capa.src =`ibagens/${playlist2[index].arquivo}.png`;
 musica.src=`musicas/${playlist2[index].arquivo}.mp3`;
 nomeMusica.innerText = playlist2[index].nomeMusica;
 nomeCantor.innerText = playlist2[index].artista;
}

function MusicaAnterior()
{
  if(index === 0)
  index = playlist2.length - 1;
  
  else
  {
     index -= 1;
  }
  iniciar();
  playMusica();
}

function ProximaMusica()
{
  if(index === playlist2.length - 1)
  index = 0;
  
  else
  {
     index += 1;
  }
  iniciar();
  playMusica();
}

function atualizaProgresso()
{
   musica.currentTime; // quantos segundos da musica passaram
   musica.duration; // quantos segundos a musica tem
   const barra = (musica.currentTime/musica.duration)*100;
   progresso.style.setProperty('--progresso', `${barra}%`);


}

function pular(event)
{
  const largura = contemProgresso.clientWidth;
  const click = event.offsetX ;
  const pularPara = (click/largura) * musica.duration;
  musica.currentTime = pularPara;

}

function embaralharArray(antesdeEmbaralhar)
{
  const tamanho = playlist2.length;
  let alteraIndex = tamanho - 1;

  while (alteraIndex > 0)
  {
     let aleatorioIndex= Math.floor(Math.random()* tamanho);
     let aux = antesdeEmbaralhar[alteraIndex];
     antesdeEmbaralhar[alteraIndex] = antesdeEmbaralhar[aleatorioIndex];
     antesdeEmbaralhar[aleatorioIndex] = aux;
     alteraIndex -= 1;
  }

}

function botaoEmbaralha()
{
  if(taEmbaralhado === false)
  {
    taEmbaralhado = true;
    embaralharArray(playlist2);
    botaoEmbaralha.classList.add('embaralha');
  }
  else
  {
    taEmbaralhado = false;
    embaralharArray(playlist2);
    botaoEmbaralha.classList.remove('embaralha');

  }
    
}

iniciar();

pause.addEventListener('click', decide)
anterior.addEventListener('click', MusicaAnterior)
proximo.addEventListener('click', ProximaMusica)
musica.addEventListener('timeupdate', atualizaProgresso)
contemProgresso.addEventListener('click', pular)
embaralha.addEventListener('click', botaoEmbaralha)




