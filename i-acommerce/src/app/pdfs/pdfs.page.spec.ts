import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PDFsPage } from './pdfs.page';

describe('PDFsPage', () => {
  let component: PDFsPage;
  let fixture: ComponentFixture<PDFsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PDFsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
