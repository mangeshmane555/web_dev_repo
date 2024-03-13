import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailserviceService {
  private baseUrl : String="http://localhost:8080";

  constructor(private http:HttpClient ) { }

  sendEmail(data:any)
  { 
    return this.http.post(`${this.baseUrl}/sendemail`, data)
  }

}
