import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VentaDetailComponent} from './Venta-detail.component';
 
describe('VentaDetailComponent', () => {
  let component: VentaDetailComponent;
  let fixture: ComponentFixture<VentaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});