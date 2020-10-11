import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';
@Directive({
  selector: '[appSombraNaTabela]'
})
export class SombraNaTabelaDirective {
  @HostBinding('style.boxShadow') sombra: string;
  /*constructor(
  private elementRef: ElementRef,
  private renderer: Renderer2
  ) {
  }*/
  @Input() sombraEntrada: string;
  @HostListener('mouseover') quandoOMousePassarPorCima() {
    /*this.renderer.setStyle(
    this.elementRef.nativeElement,
    'box-shadow', '10px 10px'
    )*/
    this.sombra = this.sombraEntrada;
  }
  @HostListener('mouseleave') quandoOMouseSair() {
    /*this.renderer.removeStyle(
    this.elementRef.nativeElement,
    'box-shadow');*/
    this.sombra = "";
  }
}

