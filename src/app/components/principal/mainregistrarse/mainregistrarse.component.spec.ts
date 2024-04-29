import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainregistrarseComponent } from './mainregistrarse.component';

describe('MainregistrarseComponent', () => {
  let component: MainregistrarseComponent;
  let fixture: ComponentFixture<MainregistrarseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainregistrarseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainregistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
