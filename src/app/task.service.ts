import { ITask } from './i-task';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tareas: ITask[] = [
    {
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
    }
  ];
  constructor() {}
  mostrarTareas(opc) {
    console.log('OPCION->', opc);
    let returnArray;

    switch (opc) {
      case '/':
        return this.tareas;
        break;
      case 'all':
        return this.tareas;
        break;
      case 'todo':
        returnArray = this.tareas.filter(tarea => {
          return tarea.state === opc;
        });
        break;
      case 'doing':
        returnArray = this.tareas.filter(tarea => {
          return tarea.state === opc;
        });
        break;
      case 'complete':
        returnArray = this.tareas.filter(tarea => {
          return tarea.state === opc;
        });
        break;

      default:
        break;
    }
    console.log('Listar tareas ', opc, ' -> ', this.tareas);
    return Object.assign([], returnArray);
    //return Object.assign([],this.tareas)
  }

  agregarTarea(task) {
    this.tareas.push(task);
  }

  filtrarTarea(id) {
    return this.tareas.filter(tarea => {
      return tarea.id === id;
    });
  }

  updateTarea(taskUpd) {
    console.log('<Update> ', taskUpd);

    this.tareas.map(tarea => {
      console.warn('tarea: ', tarea.id + ' -> ' + taskUpd.id);

      if (tarea.id === taskUpd.id) {
        console.warn('tarea: ', taskUpd);
        tarea.name = taskUpd.name;
        tarea.description = taskUpd.description;
      }
    });

    return this.tareas;
  }
}
