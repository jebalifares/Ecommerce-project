import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Signup } from '../interfaces/data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
isSellerLogin=new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient,private router:Router) { }

  signup(data:Signup){
   let response= this.http.post("http://localhost:3000/seller",data,{
    observe:'response'
   }).subscribe((resultat)=>{
    if(resultat){
    //  console.log(JSON.stringify(resultat.body));
      
      this.isSellerLogin.next(true);
      localStorage.setItem('seller',JSON.stringify(resultat.body))
      this.router.navigate(['seller-home'])
    console.log("response",resultat);

    }

   })
   
  }
}
