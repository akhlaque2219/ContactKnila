import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "https://localhost:7281/api";
    
  constructor(private http:HttpClient) { }

  getContactList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/contact');
  }

  addContact(value:any){
    return this.http.post(this.APIUrl+'/contact', value);
  }

  updateContact(value:any){
    return this.http.put(this.APIUrl+'/contact', value)
  }

  deleteContact(value:any){
    return this.http.delete(this.APIUrl+'contact'+value)
  }

  // refreshList(){
  //   this.http.get(this.APIUrl)
  //   .toPromise()
  //   .then(res=> this.list = res as Contact[]);
  // }
}
