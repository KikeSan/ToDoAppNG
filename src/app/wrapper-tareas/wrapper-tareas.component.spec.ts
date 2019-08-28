import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperTareasComponent } from './wrapper-tareas.component';

describe('WrapperTareasComponent', () => {
  let component: WrapperTareasComponent;
  let fixture: ComponentFixture<WrapperTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapperTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
