import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajAgencijuComponent } from './dodaj-agenciju.component';

describe('DodajAgencijuComponent', () => {
  let component: DodajAgencijuComponent;
  let fixture: ComponentFixture<DodajAgencijuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajAgencijuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajAgencijuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
