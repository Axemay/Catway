//Código do personagem

//variáveis personagem
let comprimentoPersonagem = 30;
let alturaPersonagem = 25;
let yPersonagem = 370;
let xPersonagem = 100
let colisao = false;
let meusPontos = 0;
let record = 0;

function mostraPersonagem(){
  image(imagemPersonagem, xPersonagem, yPersonagem, comprimentoPersonagem,alturaPersonagem);
}


function movimentaPersonagem()
{
  if (keyIsDown(UP_ARROW) && yPersonagem > 0){
    yPersonagem -= 5;
  }
  if (keyIsDown(DOWN_ARROW)&& yPersonagem < 370){
    yPersonagem += 5;
  }
  if (keyIsDown(RIGHT_ARROW)&& xPersonagem < 570){
    xPersonagem += 5;
  }
  
  if (keyIsDown(LEFT_ARROW)&& xPersonagem > 0){
    xPersonagem -= 5;
  }
}

function verificaColisao(){
  //collideRectRect(x, y, width, height, x2, y2, width2, height2 )
  for (let i = 0; i < imagemCarros.length; i = i +1){
    colisao = collideRectRect(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xPersonagem, yPersonagem, comprimentoPersonagem, alturaPersonagem)
    if(colisao){
      atualizaRecord();
      colidiu();
    }
  }  
}

function colidiu(){
  somColisao.play();
  yPersonagem = 370;
  meusPontos = 0;
}

function incluiPontos(){
  fill(255,215,0);
  textAlign(CENTER);
  textSize(20);
  text("Pontuação: "+meusPontos, 300, 23);
  text("Record: "+record, 460, 23);
}

function marcaPonto(){
  if(yPersonagem < 20){
    somPonto.play();
    meusPontos += 1;
    yPersonagem = 370;
    
  }
}

function voltaPersonagemInicio(){
  yPersonagem = 370;
}

function atualizaRecord(){
  if(record < meusPontos){
        record = meusPontos;         
  }
}


