export abstract class View<T> {
  protected elemento: HTMLElement;
  private escapar : boolean;

  constructor(seletor: string, escapar ?: boolean) { // o primeiro parametro não pode ser opcional
    const elemento = document.querySelector(seletor);
    if(elemento){
        this.elemento = elemento as HTMLElement;
    }else{
        throw(`Seletor ${seletor} não existe no DOM. Verifique`)
    }

    if(escapar){
        this.escapar = escapar;
    }
  }

  protected abstract template(model: T): string;

  public update(model: T): void {
    let template = this.template(model);
    if(this.escapar){
        template = template.replace(/<script>[\s\S]*?<\/script>/,'')
    }
    this.elemento.innerHTML = template;
  }
}
