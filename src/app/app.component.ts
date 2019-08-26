import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDoAppNG';
  logueado: boolean = false
  validar(valor) {
    this.logueado = valor
  }
}
