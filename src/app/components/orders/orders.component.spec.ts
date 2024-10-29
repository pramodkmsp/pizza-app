import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersComponent } from './orders.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;
  let service: DataService;
  let snackBar: MatSnackBar;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatSnackBarModule],
      declarations: [ OrdersComponent ],
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
    snackBar = TestBed.inject(MatSnackBar);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
