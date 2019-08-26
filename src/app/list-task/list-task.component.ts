import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TaskService } from '../task.service';
import { ITask } from '../i-task';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {
  /* listaTareas:ITask[]
  Tareas:TaskService */

  constructor(task:TaskService, private activatedRouter:ActivatedRoute) {
    //this.Tareas = task
   }

  ngOnInit() {
    //this.listar()
    /* this.activatedRouter.paramMap.subscribe((data:any)=>{
      console.log('Subscribe',data.params);
      
      this.listar(data.params.state)
    }) */
  }

  /* listar(estado){
    this.listaTareas = this.Tareas.mostrarTareas(estado)
  } */

}
