import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild("formulario",{static:true}) f:NgForm
  @Output() onLogged = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

}
