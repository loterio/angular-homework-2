import { Component, OnInit } from '@angular/core';
import { Cars } from './cars';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cars  : Cars[];
  error : '';
  sucess: String;
  car   : any;
  car2  : any;
  search: any;
  constructor(private CarService: CarService) {
    this.car = new Cars('',0,0);
    this.car2 = new Cars('',0,0);

  }

  ngOnInit(){
    this.getCars();
  }

  getCars() : void {
    this.CarService.getAll().subscribe(
      (res: Cars[]) => {
        this.cars = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  getCar(g) : void {
    this.CarService.getOne(g).subscribe(
      (res: Cars) => {
        this.car2 = res;
        this.search = 'ok';
      },
      (err) => {
        this.error = err;
      }
    );
  }

  addCar(f) {
    this.error = '';
    this.sucess = '';

    this.CarService.store(this.car)
      .subscribe(
        (res: Cars[]) => {
          // update the list of cars
          this.cars = res;

          // informs the user
          this.sucess = "Created succesfuly";

          // reset form
          f.reset();
        },
        (err) => this.error = err
      );
  }

}
