import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsComponent } from './order-details.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('OrderDetailsComponent', () => {
  let component: OrderDetailsComponent;
  let fixture: ComponentFixture<OrderDetailsComponent>;
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ OrderDetailsComponent ], // Add this line
      providers: [
        DataService,
        {
          provide: ActivatedRoute,
          useValue: { params: of({ id: 1 }) } // Mock route parameters
        }
      ]
    });
    service = TestBed.inject(DataService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
