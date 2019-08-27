import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TaskService } from '../task.service';
import { ITask } from '../i-task';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {
  /* listaTareas:ITask[]
  Tareas:TaskService */
  group:FormGroup

  constructor(task:TaskService, private activatedRouter:ActivatedRoute) {
    //this.Tareas = task
   }

  ngOnInit() {
    //this.listar()
    /* this.activatedRouter.paramMap.subscribe((data:any)=>{
      console.log('Subscribe',data.params);
      
      this.listar(data.params.state)
    }) */
    this.group = new FormGroup({
      nuevatarea:new FormControl(null,Validators.required)
    })
  }

  /* listar(estado){
    this.listaTareas = this.Tareas.mostrarTareas(estado)
  } */

  abrirModal(opc){
    let element = document.getElementById(opc)
    element.className = 'is-active'
  }
  crearTask(){
    console.log('Vamos a crear la tarea: ',this.group.value.nuevatarea);
    
  }

}
