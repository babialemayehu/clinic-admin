import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public root = "http://clinic.com"; 
  constructor(public http:HttpClient) { }

  postCreateUser(data){
    let $url = this.root+"/ajax/post/create user"; 
    return this.http.post($url,data); 
  }
  
  authUser(){
    let $url = this.root+"/ajax/get/auth user"
    return this.http.get($url); 
  }
}
