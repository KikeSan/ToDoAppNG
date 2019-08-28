import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TaskService } from '../task.service';
import { ITask } from '../i-task';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {
  /* listaTareas:ITask[]*/
  Tareas: TaskService;
  group: FormGroup;

  constructor(task: TaskService, private activatedRouter: ActivatedRoute) {
    this.Tareas = task;
  }

  ngOnInit() {
    //this.listar()
    /* this.activatedRouter.paramMap.subscribe((data:any)=>{
      console.log('Subscribe',data.params);
      
      this.listar(data.params.state)
    }) */
    this.group = new FormGroup({
      titulo: new FormControl(null, Validators.required),
      descripcion: new FormControl(null, Validators.required)
    });
  }

  /* listar(estado){
    this.listaTareas = this.Tareas.mostrarTareas(estado)
  } */

  abrirModal(opc) {
    let element = document.getElementById(opc);
    element.classList.add('modal', 'is-active');
  }
  cerrarModal(opc) {
    let element = document.getElementById(opc);
    element.classList.remove('is-active');
  }
  crearTask() {
    console.log('Vamos a crear la tarea: ', {
      name: this.group.value.titulo,
      description: this.group.value.descripcion
    });
    this.Tareas.agregarTarea({
      id: 34567,
      name: this.group.value.titulo,
      description: this.group.value.descripcion,
      status: 'todo'
    });
  }
}
