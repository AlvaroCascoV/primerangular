import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  standalone: false,
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css',
})
export class TablamultiplicarComponent {
  @ViewChild('cajanumero') cajaNumeroRef!: ElementRef;

  public numeros: Array<number>;
  public numero: number;
  constructor() {
    this.numeros = new Array<number>();
    this.numero = 0;
  }

  mostrarTabla() {
    this.numero = this.cajaNumeroRef.nativeElement.value;
    let aux = new Array<number>();
    for (let i = 1; i <= 10; i++) {
      var operacion = this.numero * i;
      aux.push(operacion);
    }
    this.numeros = aux;
  }
}
