import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpointAPI = "http://localhost:50862/api";
  
  constructor(private httpClient: HttpClient) { }

  public getConsults(){
    return this.httpClient.get(`${this.endpointAPI}/consult`);
  }

  public postConsult(body){

    const httpOptions: { headers; observe; } = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response'
    };

    return this.httpClient.post(`${this.endpointAPI}/consult`, body, httpOptions);
        
  }
}
