import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./components/orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'order-details/:id',
    loadChildren: () => import('./components/order-details/order-details.module').then(m => m.OrderDetailsModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
