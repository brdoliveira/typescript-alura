import { NegociacaoController } from "./controllers/negociacao-controller.js"; // precisa colocar .js no final, no Angular, React não precisa

const controller = new NegociacaoController();
const form =  document.querySelector('.form');
if(form){
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    })
}else{
    throw Error("Não possivel inicializar a aplicação. Verifique se o formulario é valido");
}