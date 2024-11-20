// Definindo a história com opções interativas
const story = {
  1: {
    text: "Maria acorda no meio da noite com um barulho vindo do andar de baixo. A casa está quieta, mas ela sabe que algo não está certo.",
    options: [
      { text: "Investigar o barulho", next: 2 },
      { text: "Ficar na cama e tentar ignorar", next: 3 },
    ],
  },
  2: {
    text: "Maria desce lentamente as escadas e vê a porta da cozinha entreaberta. O barulho vem de lá. Ela sente um arrepio na espinha.",
    options: [
      { text: "Entrar na cozinha e investigar", next: 4 },
      { text: "Voltar para o quarto e trancar a porta", next: 5 },
    ],
  },
  3: {
    text: "Maria decide ignorar o barulho, mas não consegue dormir. Ela sente uma presença na casa e o medo começa a tomar conta.",
    options: [
      { text: "Levantar e verificar a casa", next: 6 },
      { text: "Pegar o celular e ligar para alguém", next: 7 },
    ],
  },
  4: {
    text: "Ao entrar na cozinha, Maria encontra uma figura sombria em frente à geladeira. Ela não consegue ver o rosto, mas sente que está em perigo.",
    options: [
      { text: "Tentar fugir para o jardim", next: 8 },
      { text: "Enfrentar a figura", next: 9 },
    ],
  },
  5: {
    text: "Maria corre para o quarto e tranca a porta, mas logo ouve passos do lado de fora. Ela precisa agir rápido.",
    options: [
      { text: "Pular pela janela e correr", next: 10 },
      { text: "Esconder-se no armário", next: 11 },
    ],
  },
  6: {
    text: "Maria levanta e percorre a casa. No corredor, ela encontra uma porta entreaberta, com luz vindo de dentro. Algo está errado.",
    options: [
      { text: "Entrar na sala", next: 12 },
      { text: "Ignorar e voltar para o quarto", next: 13 },
    ],
  },
  7: {
    text: "Maria pega o celular e tenta ligar para um amigo, mas a linha cai. Ela ouve um suspiro atrás dela.",
    options: [
      { text: "Gritar por ajuda", next: 14 },
      { text: "Virar-se e encarar a escuridão", next: 15 },
    ],
  },
  8: {
    text: "Maria corre para o jardim, mas antes que possa alcançar a cerca, a figura a agarra pelo braço. O que ela fará?",
    options: [
      { text: "Lutar para se soltar", next: 16 },
      { text: "Implorar por sua vida", next: 17 },
    ],
  },
  9: {
    text: "Maria enfrenta a figura e vê seu rosto. É alguém de seu passado, um antigo amigo perdido. Ele diz que precisa da ajuda dela para escapar.",
    options: [
      { text: "Ajudá-lo", next: 18 },
      { text: "Rejeitar e tentar fugir", next: 19 },
    ],
  },
  10: {
    text: "Maria pula pela janela, mas cai no chão com força. Ela sente uma dor intensa, mas precisa se levantar rapidamente.",
    options: [
      { text: "Correr para a rua e pedir ajuda", next: 20 },
      { text: "Esconder-se no jardim e esperar", next: 21 },
    ],
  },
  11: {
    text: "Maria se esconde no armário, segurando a respiração. Ela escuta passos se aproximando. A figura para em frente ao armário, esperando.",
    options: [
      { text: "Sair do armário e atacar a figura", next: 22 },
      { text: "Permanecer em silêncio e esperar", next: 23 },
    ],
  },
  12: {
    text: "Maria entra na sala e vê uma mesa cheia de documentos. Há algo escrito no papel que a faz tremer.",
    options: [
      { text: "Ler os documentos", next: 24 },
      { text: "Sair rapidamente da sala", next: 25 },
    ],
  },
  13: {
    text: "Maria volta para o quarto, trancando a porta novamente. Mas o medo não a deixa descansar. Algo está errado.",
    options: [
      { text: "Ligar para a polícia", next: 26 },
      { text: "Pegar uma faca e se preparar", next: 27 },
    ],
  },
  14: {
    text: "Maria grita por ajuda, mas ninguém responde. A figura se aproxima cada vez mais. Ela precisa agir antes que seja tarde.",
    options: [
      { text: "Lutar contra a figura", next: 28 },
      { text: "Tentar fugir pela porta dos fundos", next: 29 },
    ],
  },
  15: {
    text: "Maria vira-se para encarar a escuridão, mas a figura desaparece. Um alívio momentâneo, mas logo algo mais surge na casa.",
    options: [
      { text: "Investigar o que apareceu", next: 30 },
      { text: "Fugir para a rua", next: 31 },
    ],
  },
  16: {
    text: "Maria luta com todas as suas forças e consegue se soltar, correndo para a rua, onde grita por ajuda. A polícia chega a tempo.",
    options: [],
  },
  17: {
    text: "Maria implora por sua vida, mas a figura não tem piedade. Ela é capturada e levada para um lugar desconhecido.",
    options: [],
  },
  18: {
    text: "Maria decide ajudar o amigo, mas ele revela que tudo isso era uma armadilha. Ela é capturada e levada.",
    options: [],
  },
  19: {
    text: "Maria tenta fugir, mas a figura é mais rápida. Ela é capturada e levada para um local misterioso.",
    options: [],
  },
  20: {
    text: "Maria corre para a rua e encontra a polícia. Ela é resgatada e levada para segurança.",
    options: [],
  },
  21: {
    text: "Maria se esconde no jardim, mas logo os perseguidores a encontram. Ela é capturada.",
    options: [],
  },
  22: {
    text: "Maria ataca a figura e consegue escapar. Ela foge para a rua e encontra segurança.",
    options: [],
  },
  23: {
    text: "Maria permanece em silêncio, mas a figura a encontra e a captura. O destino de Maria é incerto.",
    options: [],
  },
  24: {
    text: "Maria lê os documentos e descobre um segredo sombrio. Ela se torna parte de um mistério maior e mais perigoso.",
    options: [],
  },
  25: {
    text: "Maria sai da sala e tenta encontrar uma saída da casa, mas é interceptada pela figura.",
    options: [],
  },
  26: {
    text: "Maria chama a polícia, mas antes que eles possam chegar, ela é atacada pela figura e levada.",
    options: [],
  },
  27: {
    text: "Maria pega uma faca e se prepara. Ela enfrenta a figura e luta pela sua vida.",
    options: [],
  },
  28: {
    text: "Maria luta contra a figura e consegue escapar. Ela corre para a rua e encontra segurança.",
    options: [],
  },
  29: {
    text: "Maria tenta fugir pela porta dos fundos, mas é alcançada e capturada. O mistério se aprofunda.",
    options: [],
  },
  30: {
    text: "Maria investiga o que apareceu, mas é atacada e levada para um lugar desconhecido.",
    options: [],
  },
  31: {
    text: "Maria corre para a rua, mas os perseguidores a alcançam. O que será de Maria?",
    options: [],
  },
};

// Função para iniciar a história
document.getElementById("start-btn").addEventListener("click", () => {
  document.getElementById("intro-container").style.display = "none";
  document.getElementById("story-container").style.display = "block";
  loadStoryStep(1);
});

// Função para carregar o texto e as opções da história
function loadStoryStep(step) {
  const currentStep = story[step];
  document.getElementById("story-text").innerHTML = currentStep.text;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = ""; // Limpa opções anteriores

  currentStep.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.onclick = () => loadStoryStep(option.next);
    optionsDiv.appendChild(button);
  });
}
