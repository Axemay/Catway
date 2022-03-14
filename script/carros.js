//Código dos carros
let comprimentoCarros = 50;
let alturaCarros = 40;
let yCarros = [40, 98, 150, 210, 265, 320];
let velocidadeCarros = [2, 2.5,3.2, 5, 3.3, 2.5];
let xCarros = [600, 600, 600, 600, 600, 600];

function movimentaCarros(){
  for (i=0; i < imagemCarros.length; i++)
  {
    xCarros[i] -= velocidadeCarros[i];     
  }
}

function voltaPosicaoInicial(){
  for (i=0; i < imagemCarros.length; i++)
  {
    if (passouTela(xCarros[i]))
    {
      xCarros[i] = 600;
    }
  } 
}

function passouTela(xCarro){
  return xCarro < -30;
}

function mostraCarros(){
  for (let i = 0; i < imagemCarros.length; i++)
  {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros,alturaCarros);
  }
}