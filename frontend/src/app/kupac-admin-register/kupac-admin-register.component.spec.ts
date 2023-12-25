import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupacAdminRegisterComponent } from './kupac-admin-register.component';

describe('KupacAdminRegisterComponent', () => {
  let component: KupacAdminRegisterComponent;
  let fixture: ComponentFixture<KupacAdminRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupacAdminRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KupacAdminRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
