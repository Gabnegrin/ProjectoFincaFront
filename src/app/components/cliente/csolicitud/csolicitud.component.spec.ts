import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsolicitudComponent } from './csolicitud.component';

describe('CsolicitudComponent', () => {
  let component: CsolicitudComponent;
  let fixture: ComponentFixture<CsolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsolicitudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CsolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
