import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class BikeService {
  constructor(private http: HttpClient) {}

  getBikes() {
    return this.http.get('/server/api/v1/bikes');
  }

  getBike(id: number) {
    return this.http.get('/server/api/v1/bikes/' + id);
  }

  createBikeRegistration(bike: any) {
    let body = JSON.stringify(bike);
    console.log(body);
    return this.http.post('/server/api/v1/bikes', body, httpOptions);
  }
}
