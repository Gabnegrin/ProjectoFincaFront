import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PClienteComponent } from './p-cliente.component';

describe('PClienteComponent', () => {
  let component: PClienteComponent;
  let fixture: ComponentFixture<PClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
