import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FacturaPage } from './factura.page';

describe('FacturaPage', () => {
  let component: FacturaPage;
  let fixture: ComponentFixture<FacturaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
