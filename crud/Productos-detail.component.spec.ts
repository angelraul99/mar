import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductosDetailComponent} from './Productos-detail.component';
 
describe('ProductosDetailComponent', () => {
  let component: ProductosDetailComponent;
  let fixture: ComponentFixture<ProductosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});