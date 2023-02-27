import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from '../interfaces/data-type';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  showLogin:boolean=false;
  constructor( private sellerService:SellerService,private router:Router){

  }
  loginForm(){
    this.showLogin=true

  }
  SignuploginForm(){
    this.showLogin=false;

  }
  signup(data:Signup){
    this.sellerService.signup(data);

  }
  login(dataLogin:Signup){
    console.log(dataLogin);
    

  }

}
