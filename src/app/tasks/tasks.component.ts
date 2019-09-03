import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ITask } from '../i-task';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { faFile, faThumbtack, faPlusCircle, faEdit, faTrashAlt, faAlignLeft, faInbox } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})



export class TasksComponent implements OnInit {
  faEdit = faEdit
  faTrashAlt = faTrashAlt
  faThumbtack = faThumbtack
  faPlusCircle = faPlusCircle
  faFile = faFile
  faAlignLeft = faAlignLeft
  faInbox = faInbox

  listaTareas: ITask[];
  Tareas: TaskService;
  group: FormGroup;
  types: string[] = ['todo', 'doing','complete'];
  currentType:string
  IDtaskModal

  emptyTasks = true

  /* OBS = new Observable((observer) => {
    observer.next(JSON.parse(localStorage.getItem('emptyData')))
  })
  OBS.subscribe(x=> console.log(x)) */

  constructor(task: TaskService, private activatedRouter: ActivatedRoute, private fb: FormBuilder) {
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
      descripcion: new FormControl('hola', Validators.required),
      //selectType: new FormControl('todo'),
    });
    /* this.group = this.fb.group({
      selectType: ['todo']
    }) */
    this.listar(window.location.pathname.replace('/tareas/', ''))
    
    
  }
  

  editModal(opc) {
    let element = document.getElementById('editTareaModal');
    
    element.classList.add('modal', 'is-active');

    console.log('[ID] ', opc.currentTarget.id);
    console.log('[Name] ', this.Tareas.filtrarTarea(+opc.currentTarget.id));
    
    this.IDtaskModal = opc.currentTarget.id
    let data:any = this.Tareas.filtrarTarea(opc.currentTarget.id)
    console.log('DATA ',data);
    
    this.group.setValue({
      titulo: data[0].name,
      descripcion: data[0].description
      //selectType: data[0].state
    })
    
    //this.group.controls['selectType'].setValue(data[0].state, { onlySelf: true });
    //this.group.patchValue({ state: data[0].state });
    /* this.group.controls['selectType'].patchValue(
      data[0].state
    ) */
    console.log('[ACTIVE] ',data[0].state);
    
  }
  cerrarModal(opc) {
    let element = document.getElementById(opc);
    element.classList.remove('is-active');
  }

  listar(estado) {
    this.listaTareas = this.Tareas.mostrarTareas(estado);
    //this.listaTareas = JSON.parse(localStorage.getItem('dataBD'))
    console.log('Retorno:: ', this.listaTareas.length)
    if (this.listaTareas.length>0){
      this.emptyTasks = false
    }
  }
  
  callType(value) {
    console.log('[CALLTYPE]',value);
    this.currentType = value;
  }
  updateTask(e){
    console.log('UPD:: ',this.group.value);
    let arrMod = {
      id:this.IDtaskModal,
      name:this.group.value.titulo,
      description:this.group.value.descripcion,
      status: this.currentType
    }
    this.listaTareas = this.Tareas.updateTarea(arrMod)
    console.log('RESULTADO ACTUALIZADO', this.listaTareas);
    
  }
  removeTask(e){
    console.log('ELIMINAR-',e.currentTarget.id);
    
    this.listaTareas = this.Tareas.deleteTask(e.currentTarget.id)
    if (this.listaTareas.length === 0) {
      this.emptyTasks = true
    }
  }
}
