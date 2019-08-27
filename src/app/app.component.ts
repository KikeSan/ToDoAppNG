import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDoAppNG';
  logueado: boolean = false
  ngOnInit(): void {
    if(localStorage.getItem('inSession')){
      this.logueado = true
    }
  }
  validar(valor) {
    this.logueado = valor
  }

}
