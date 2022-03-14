//código imagens e sons

//cenário
let imagemEstrada;

//Personagem
let imagemPersonagem;

//Carros
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

//sons
let somTrilha;
let somColisao;
let somPonto;


function preload(){
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemPersonagem = loadImage("imagens/gato.png");
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png"); 
  imagemCarros = [imagemCarro1,imagemCarro2, imagemCarro3, imagemCarro1,imagemCarro2, imagemCarro3];
  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
}