import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcalificarComponent } from './ccalificar.component';

describe('CcalificarComponent', () => {
  let component: CcalificarComponent;
  let fixture: ComponentFixture<CcalificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcalificarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CcalificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
