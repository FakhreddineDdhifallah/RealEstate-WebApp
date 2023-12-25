import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OglasivacRegisterComponent } from './oglasivac-register.component';

describe('OglasivacRegisterComponent', () => {
  let component: OglasivacRegisterComponent;
  let fixture: ComponentFixture<OglasivacRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OglasivacRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OglasivacRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
