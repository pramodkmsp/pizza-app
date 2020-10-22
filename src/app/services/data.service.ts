import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Register } from '../interface/register';
const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class DataService {

  /* Orders Mock JSON Data */
  orders: any[] = [{
      id: 1,
      customerId: 1001,
      customerName: 'Rupesh',
      address: 'Bangalore',
      status: 'Preparing',
      items: [{
        itemName: 'Pizza',
        price: 300,
        quantity: 2
      }]
    },
    {
      id: 2,
      customerId: 1002,
      customerName: 'Pramod',
      address: 'Mysore',
      status: 'Ready to serve',
      items: [{
          itemName: 'Pizza',
          price: 100,
          quantity: 2
        },
        {
          itemName: 'Pizza Special',
          price: 1150,
          quantity: 2
        }
      ]
    },
    {
      id: 3,
      customerId: 1003,
      customerName: 'Prajwal',
      address: 'Manglore',
      status: 'Order Received',
      items: [{
        itemName: 'Pizza',
        price: 400,
        quantity: 2
      }]
    },
    {
      id: 4,
      customerId: 1004,
      customerName: 'Ravikumar',
      address: 'Mandya',
      status: 'Order Received',
      items: [{
        itemName: 'Pizza',
        price: 300,
        quantity: 2
      }]
    },
    {
      id: 5,
      customerId: 1005,
      customerName: 'Rajesh',
      address: 'Andrapradesh',
      status: 'Order Received',
      items: [{
        itemName: 'Pizza',
        price: 500,
        quantity: 2
      }]
    },
    {
      id: 6,
      customerId: 1006,
      customerName: 'Ganesh',
      address: 'Bangalore',
      status: 'Order Received',
      items: [{
        itemName: 'Pizza',
        price: 600,
        quantity: 2
      }]
    },
    {
      id: 7,
      customerId: 1001,
      customerName: 'Rupesh',
      address: 'Bangalore',
      status: 'Preparing',
      items: [{
        itemName: 'Burger',
        price: 200,
        quantity: 2
      }]
    },
    {
      id: 8,
      customerId: 1002,
      customerName: 'Pramod',
      address: 'Mysore',
      status: 'Ready to serve',
      items: [{
          itemName: 'Burger',
          price: 100,
          quantity: 2
        },
        {
          itemName: 'Burger Special',
          price: 1150,
          quantity: 2
        }
      ]
    },
    {
      id: 9,
      customerId: 1002,
      customerName: 'Pramod',
      address: 'Mysore',
      status: 'Ready to serve',
      items: [{
          itemName: 'Pizza',
          price: 100,
          quantity: 2
        },
        {
          itemName: 'Pizza Special',
          price: 1150,
          quantity: 2
        }
      ]
    },
  ];

  constructor(private httpClient: HttpClient) {
    if (!JSON.parse(localStorage.getItem('orders'))) {
      localStorage.setItem('orders', JSON.stringify(this.orders));
    }
  }

  register(data: Register) {
    return;
  }

  /* get Orders */
  getOrders() {
    const orders = JSON.parse(localStorage.getItem('orders'));
    return new Promise(resolve => {
      resolve(orders);
    });
  }

  /* Calculate Total Amount Based on Items Quantity Per Orders */
  getTotalAmount(items) {
    if (items) {
      return items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }
    return 0;
  }

  /* Get Order details by OrderID */
  getOrderDetails(orderId: any) {
    const orders = JSON.parse(localStorage.getItem('orders'));
    return new Promise(resolve => {
      orders.forEach(order => {
        if (order.id === Number(orderId)) {
          resolve(order);
        }
      });
    });
  }

  /* Change Order Status */
  changeStatus(req: any) {
    const orders = JSON.parse(localStorage.getItem('orders'));
    return new Promise(resolve => {
      const index = orders.findIndex(order => order.id === req.id);
      orders[index].status = req.status;
      localStorage.setItem('orders', JSON.stringify(orders));
      resolve(orders);
    });
  }
}
