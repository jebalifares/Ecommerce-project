import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [

  {
    component:SignupComponent,
    path:'signup'
  },{
    component:SellerHomeComponent,
    path:'seller-home',
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
