import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { EditProductComponent } from './shared/components/products/edit-product/edit-product.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { EditUserComponent } from './shared/components/users/edit-user/edit-user.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { UsersComponent } from './shared/components/users/users.component';
import { AuthGuard } from './shared/services/auth.guard';
import { UserRoleGuard } from './shared/services/user-role.guard';

const appRoute: Routes = [
  {
    path: '', component: LoginComponent, title: 'Login' // localhost: 4200/home component
  },
  {
    path: 'dashboard', component: HomeComponent // localhost: 4200/home
  },
  {
    path: 'products', component: ProductsComponent, canActivate: [AuthGuard, UserRoleGuard], canActivateChild: [AuthGuard],
    data: {
      userRole: "ADMIN"
    },
    children: [ // localhost: 4200/products
      {
        path: ':id', component: ProductComponent
      },
      {
        path: ':id/edit', component: EditProductComponent // localhost: 4200/products
      },
    ]
  },

  {
    path: 'users', component: UsersComponent, canActivateChild: [AuthGuard], title: 'Users', children: [
      {
        path: ':id', component: UserComponent//
      },
      {
        path: ':id/edit', component: EditUserComponent // localhost: 4200/products
      },
    ] // localhost: 4200/users
  },

  {
    path: 'page-not-found', component: PagenotfoundComponent,
    data: {
      msg: "This Page is not Available!" // passing static data using routing
    }
  },
  {
    path: '**', redirectTo: 'page-not-found'                      //wildCard
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



