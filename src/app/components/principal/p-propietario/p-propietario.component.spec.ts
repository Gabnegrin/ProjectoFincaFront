import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPropietarioComponent } from './p-propietario.component';

describe('PPropietarioComponent', () => {
  let component: PPropietarioComponent;
  let fixture: ComponentFixture<PPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PPropietarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
