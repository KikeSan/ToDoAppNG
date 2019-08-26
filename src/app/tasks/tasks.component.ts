import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ITask } from '../i-task';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  listaTareas:ITask[]
  Tareas:TaskService

  constructor(task:TaskService, private activatedRouter:ActivatedRoute) {
    this.Tareas = task
   }

  ngOnInit() {
    //this.listar()
    /* this.activatedRouter.queryParamMap.subscribe((data:any)=>{
      console.log('Subscribe',data.params);
      
      this.listar(data.params)
    }) */
    this.listar(window.location.pathname.replace('/',''))
  }

  listar(estado){
    this.listaTareas = this.Tareas.mostrarTareas(estado)
    console.log('Retorno:: ',this.listaTareas);
    
  }

}
