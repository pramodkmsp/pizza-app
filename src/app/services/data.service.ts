import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class DataService {

  /* Orders Mock JSON Data */
  orders: any[] = [{
      id: 1,
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
      customerName: 'Ganesh',
      address: 'Bangalore',
      status: 'Order Received',
      items: [{
        itemName: 'Pizza',
        price: 600,
        quantity: 2
      }]
    }
  ];

  constructor(private httpClient: HttpClient) {
    if (!JSON.parse(localStorage.getItem('orders'))) {
      localStorage.setItem('orders', JSON.stringify(this.orders));
    }
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
