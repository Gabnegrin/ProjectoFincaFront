import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitemSolicitudComponent } from './citem-solicitud.component';

describe('CitemSolicitudComponent', () => {
  let component: CitemSolicitudComponent;
  let fixture: ComponentFixture<CitemSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitemSolicitudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitemSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
