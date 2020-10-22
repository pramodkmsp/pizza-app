import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class OrdersModule { }
