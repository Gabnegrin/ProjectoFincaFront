import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSolicitudComponent } from './item-solicitud.component';

describe('ItemSolicitudComponent', () => {
  let component: ItemSolicitudComponent;
  let fixture: ComponentFixture<ItemSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemSolicitudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
