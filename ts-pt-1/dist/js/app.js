import { NegociacaoController } from "./controllers/negociacao-controller.js"; // precisa colocar .js no final, no Angular, React não precisa
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
