console.log("Miau!")

function setup() {
  createCanvas(600, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraPersonagem();
  mostraCarros();
  movimentaPersonagem();
  movimentaCarros();
  voltaPosicaoInicial();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}






  