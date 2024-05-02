import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerificacionPage } from './verificacion.page';

describe('VerificacionPage', () => {
  let component: VerificacionPage;
  let fixture: ComponentFixture<VerificacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
