import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsolicitudesComponent } from './csolicitudes.component';

describe('CsolicitudesComponent', () => {
  let component: CsolicitudesComponent;
  let fixture: ComponentFixture<CsolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsolicitudesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CsolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
