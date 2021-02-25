import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Cars } from './cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  baseUrl = 'http://localhost/api';
  cars: Cars[];
  constructor(private http: HttpClient) { }
  car: Cars;

  getAll(): Observable<Cars[]> {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res) => {
        this.cars = ['data'];
        return this.cars;
      }),
      catchError(this.handleError));
  }

  getOne(id: any): Observable<Cars> {
    console.log(id.value);
    return this.http.get(`${this.baseUrl}/list`,{params: id.value});
      map((res) => {
        //console.log(res['solo']);
        this.car = res['solo'];
        //console.log(this.car);
        return this.car;
      }),
      catchError(this.handleError);
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Error. Something went wrong.');
  }

  store(car: Cars): Observable<Cars[]> {
    console.log(car);
    return this.http.post(`${this.baseUrl}/store`, { data: car })
    .pipe(map((res) => {
      this.cars.push(res['data']);
      return this.cars;
    }),
    catchError(this.handleError));
  }
}
