import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OglasivacComponent } from './oglasivac.component';

describe('OglasivacComponent', () => {
  let component: OglasivacComponent;
  let fixture: ComponentFixture<OglasivacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OglasivacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OglasivacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
