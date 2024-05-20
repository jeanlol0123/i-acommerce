import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { InfoUsuarioComponent } from './info-usuario.component';

describe('InfoUsuarioComponent', () => {
  let component: InfoUsuarioComponent;
  let fixture: ComponentFixture<InfoUsuarioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoUsuarioComponent ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule,IonicModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});