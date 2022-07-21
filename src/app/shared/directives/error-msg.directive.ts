import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;
  @Input() set color(color: string) {
    this.htmlElement.nativeElement.style.color = color;
  }
  @Input() mensaje: string = 'Este campo es requerido';

  constructor(
    private el: ElementRef<HTMLElement>,
  ) {
    this.htmlElement = el; 
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
  }

  setColor(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

}
