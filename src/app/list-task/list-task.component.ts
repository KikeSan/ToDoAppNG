import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { faPlusCircle, faAlignLeft, faFile } from '@fortawesome/free-solid-svg-icons';

import * as _ from 'lodash'

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {
  faPlusCircle = faPlusCircle
  faAlignLeft = faAlignLeft
  faFile = faFile

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
    console.log('UNIQUE_ID---', _.uniqueId('000'));
    
    this.Tareas.agregarTarea({
      id: _.uniqueId('000'),
      name: this.group.value.titulo,
      description: this.group.value.descripcion,
      status: 'todo'
    });
  }
}
