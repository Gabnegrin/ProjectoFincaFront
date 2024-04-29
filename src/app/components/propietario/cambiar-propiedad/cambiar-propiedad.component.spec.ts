import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarPropiedadComponent } from './cambiar-propiedad.component';

describe('CambiarPropiedadComponent', () => {
  let component: CambiarPropiedadComponent;
  let fixture: ComponentFixture<CambiarPropiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CambiarPropiedadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CambiarPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
