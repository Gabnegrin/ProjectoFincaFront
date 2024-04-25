import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcambiarComponent } from './ccambiar.component';

describe('CcambiarComponent', () => {
  let component: CcambiarComponent;
  let fixture: ComponentFixture<CcambiarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcambiarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CcambiarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
