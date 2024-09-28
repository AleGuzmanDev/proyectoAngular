import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogActivacionCuentaComponent } from './dialog-activacion-cuenta.component';

describe('DialogActivacionCuentaComponent', () => {
  let component: DialogActivacionCuentaComponent;
  let fixture: ComponentFixture<DialogActivacionCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogActivacionCuentaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogActivacionCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
