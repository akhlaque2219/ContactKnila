import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  readonly apiUrl = 'https://localhost:7281/api/';

  constructor(private http: HttpClient) { }

  getContactList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'contact');
  }

  addContact(cont: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl + 'contact', cont, httpOptions);
  }

  updateContact(id: any, cont: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl + 'contact/'+id, cont, httpOptions);
  }

  deleteContact(contId: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.apiUrl + 'contact/' + contId, httpOptions);
  }

}
