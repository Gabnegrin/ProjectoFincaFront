import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPropiedadComponent } from './item-propiedad.component';

describe('ItemPropiedadComponent', () => {
  let component: ItemPropiedadComponent;
  let fixture: ComponentFixture<ItemPropiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemPropiedadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
