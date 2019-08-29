import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ITask } from '../i-task';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  listaTareas: ITask[];
  Tareas: TaskService;
  group: FormGroup;
  types: string[] = ['todo', 'doing','complete'];
  currentType:string

  constructor(task: TaskService, private activatedRouter: ActivatedRoute) {
    this.Tareas = task;
  }

  ngOnInit() {
    //this.listar()
    /* this.activatedRouter.queryParamMap.subscribe((data:any)=>{
      console.log('Subscribe',data.params);
      
      this.listar(data.params)
    }) */
    this.group = new FormGroup({
      titulo: new FormControl('hola', Validators.required),
      descripcion: new FormControl('hola', Validators.required)
    });

    this.listar(window.location.pathname.replace('/tareas/', ''));
  }

  abrirModal(opc) {
    let element = document.getElementById(opc);
    element.classList.add('modal', 'is-active');
  }
  cerrarModal(opc) {
    let element = document.getElementById(opc);
    element.classList.remove('is-active');
  }

  listar(estado) {
    this.listaTareas = this.Tareas.mostrarTareas(estado);
    console.log('Retorno:: ', this.listaTareas);
  }
  callType(value) {
    console.log(value);
    this.currentType = value;
  }
  editarTask() {}
}
