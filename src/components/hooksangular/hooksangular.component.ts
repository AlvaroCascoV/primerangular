import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'hooks-angular',
  standalone: false,
  templateUrl: './hooksangular.component.html',
  styleUrls: ['./hooksangular.component.css'],
})
export class HooksAngular implements OnInit {
  public mensaje: string;
  constructor() {
    console.log('Constructor: Primer método de inicio de Component');
    this.mensaje = 'Hoy es miercoles';
  }

  cambiarMensaje(): void {
    this.mensaje = 'y mañana juernes!!';
  }

  ngOnInit(): void {
    console.log('Soy on init, despues de constructor ?');
  }
  ngDoCheck(): void {
    console.log('NgCheck cambiando algo en render¿');
  }
}
