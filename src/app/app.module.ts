import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Route, Routes } from "@angular/router";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { library } from '@fortawesome/fontawesome-svg-core';
//import { faCoffee,faAngleRight,faEnvelope, faLock, faUsers,faIdBadge, faSearch, faThumbtack, faPlusCircle, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { WrapperTareasComponent } from './wrapper-tareas/wrapper-tareas.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

const rutas:Routes = [
  {path:'tareas',component:WrapperTareasComponent,children:[
    {path:'all',component: TasksComponent},
    {path:'todo',component: TasksComponent},
    {path:'doing',component: TasksComponent},
    {path:'complete',component: TasksComponent},
  ]},
  {path:'edit/:id',component: EditTaskComponent},
  { path: '**', redirectTo: 'tareas/all' },
  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    ListTaskComponent,
    HeaderComponent,
    TasksComponent,
    WrapperTareasComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(rutas),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  /* constructor(){
     library.add(faCoffee,faAngleRight, faEnvelope, faLock, faUsers, faIdBadge, faSearch, faThumbtack, faPlusCircle, faEdit, faTrashAlt); 
  } */
 }
