import { ITask } from './i-task';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash'
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
@Injectable({
  providedIn: 'root'
})

export class TaskService {
  OBSERVALO = new Observable((observer)=>{
    observer.next(
      JSON.parse(localStorage.getItem('dataBD'))
    )
  })

  
  private tareas: ITask[] = [
    /* {
      id: 123456,
      name: 'Rutas',
      description: 'detalle de la tarea',
      state: 'todo'
    },
    {
      id: 987654,
      name: 'Servicios',
      description: 'detalle de la tarea',
      state: 'todo'
    },
    {
      id: 963587,
      name: 'Input / Output',
      description: 'detalle de la tarea',
      state: 'doing'
    },
    {
      id: 741852,
      name: 'Formularios',
      description: 'detalle de la tarea',
      state: 'complete'
    } */
  ];
  constructor() {
    //localStorage.setItem('dataBD',[])
    if (!localStorage.getItem('dataBD')){
      localStorage.setItem('dataBD', JSON.stringify([]));
    }
  }
  mostrarTareas(opc) {
    console.log('OPCION->', opc);
    let data
    let returnArray

    switch (opc) {
      case '/':
        return data;
        break;
      case 'all':
        //return this.tareas;
        returnArray = JSON.parse(localStorage.getItem('dataBD'));
        break;
      case 'todo':
        //console.warn('DATA-> ',data);
        data = JSON.parse(localStorage.getItem('dataBD'));
        returnArray = data.filter((tarea, index) => {
          console.warn('TAREA-> ', tarea.status);
          return tarea.status === opc;
        });
        break;
      case 'doing':
        data = JSON.parse(localStorage.getItem('dataBD'));
        returnArray = data.filter(tarea => {
          return tarea.status === opc;
        });
        break;
      case 'complete':
        data = JSON.parse(localStorage.getItem('dataBD'));
        returnArray = data.filter(tarea => {
          return tarea.status === opc;
        });
        break;

      default:
        break;
    }
    console.log('Listar tareas ', opc, ' -> ', returnArray);
    return Object.assign([], returnArray);
    //return Object.assign([],this.tareas)
  }

  agregarTarea(task) {
    console.log('TAREAS ACTUALES', JSON.parse(localStorage.getItem('dataBD')));
    let temp = JSON.parse(localStorage.getItem('dataBD'));

    temp.push(task);
    localStorage.setItem('dataBD', JSON.stringify(temp));
    //this.mostrarTareas(location.pathname.replace('/tareas/', ''))
    localStorage.setItem('emptyData','false')
  }

  filtrarTarea(id) {
    let temp = JSON.parse(localStorage.getItem('dataBD'));
    return temp.filter(tarea => {
      return tarea.id === id;
    });
  }

  updateTarea(taskUpd) {
    let temp = JSON.parse(localStorage.getItem('dataBD'));
    console.log('<Update> ', taskUpd);

    temp.map(tarea => {
      console.warn('tarea: ', tarea.id + ' -> ' + taskUpd.id);

      if (tarea.id === taskUpd.id) {
        console.warn('tarea: ', taskUpd);
        tarea.name = taskUpd.name;
        tarea.description = taskUpd.description;
      }
    });

    //return this.tareas;
    return temp;
  }

  deleteTask(idT){
    let temp = JSON.parse(localStorage.getItem('dataBD'))

    let res = temp.filter(event=>{
      console.log('_REMOVE:',event.id+' - '+idT);
      
      return event.id !=idT
    })
    console.log('RES===>', res);

    localStorage.setItem('dataBD', JSON.stringify(res));
    return res
  }

}
