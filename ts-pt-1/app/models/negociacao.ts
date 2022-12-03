export class Negociacao {
  constructor(
    public _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get data(): Date {
    const date = new Date(this._data.getTime());
    return date;
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }
}
