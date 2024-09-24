// Rogue One - Uma História Star Wars, 12, Ficção Científica, Aventura, Fantasia
// Shrek, LIVRE, Aventura, Animação, Comédia
// Interestellar, 10, Ficção Científica, Drama, Aventura 
// Heróis de Ressaca, 14, Ação, Comédia, Ficção Científica
// Madrugada dos Mortos, 18, Ação, Terror

let campoIdade
let campoFiccao
let campoAnimacao

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput ("10");
  campoFiccao = createCheckbox ("Gosta de Ficcção Científica?")
  campoAnimacao = createCheckbox ("Gosta de Animação?");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendacao = geraRecomendacao(idade, gostaDeFiccao, gostaDeAnimacao);
  text(recomendacao, width/2, height/2);
}

function geraRecomendacao(idade, gostaDeFiccao, gostaDeAnimacao) {
  if (idade >= 12){
    if (idade >= 14){
      return "Heróis de Resseca";
    } else {
      if (gostaDeFiccao){
        return "Interestellar"
      }
    }
    } else {
    return "Star Wars - Rogue One";
    }
  if (gostaDeAnimacao){
    return "Shrek"
  }
}