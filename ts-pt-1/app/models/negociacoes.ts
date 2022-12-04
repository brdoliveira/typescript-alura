import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  public lista(): readonly Negociacao[] { // não conseguir mudar os valores da lista
    return this.negociacoes;
  }
}
