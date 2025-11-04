import { Component } from '@angular/core';

//UN COMPONENT DEBE TENER SIEMPRE LA DECLARACION DE SU CONTENIDO
@Component({
  //DEBEMOS DECLARAR EL NOMBRE DEL COMPONENT
  //MEDIANTE SU SELECTOR EN html
  //EN ANGULAR, LOS SELECTIONES LLEVAN GUION
  selector: 'primer-component',
  standalone: false,
  //POR AHORA NO VOY A TENER HTML SEPARADO, PODEMOS INCLUIRLO
  //DENTRO DEL PROPIO COMPONENT
  //   template: `
  //     <h1>Soy el primer component de Angular!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</h1>
  //     <h3 style="color:blue">{{ titulo }}</h3>
  //     <h2 style="color:fuchsia">{{ descripcion }}, {{ year }}</h2>
  //   `,
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.css'],
})

//CADA COMPONENT SIEMPRE DEBE TENER UNA CLASE ASOCIADA EN SU TS
//DICHO NOMBRE DE CLASE SI LLEVA MAYUSCULAS Y SE DECLARA DENTRO DE app-module.ts
export class PrimerComponent {
  //AQUI ES DONDE SE DECLARAN LAS VARIABLES
  //DICHAS VARIABLES DEBEN TENER UN TIPADO SIEORE (TypeScript)
  public titulo: string;
  public descripcion: string;
  public year: number;

  //EN ANGULAR TENEMOS UN CONSTRUCTOR DONDE INICIALIZAREMOS LOS ELEMENTOS DE MI CLASE
  constructor() {
    //PARA ACCEDER A OBJETOS DE LA CLASE, UTILIZAMOS this
    this.titulo = 'Hoy es martes';
    this.descripcion = 'Hoy gana el madrid!!';
    this.year = 2025;
  }
}
