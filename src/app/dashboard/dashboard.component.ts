import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cuisine, RestaurantService } from '../shared';
import {AuthtkService} from '../services/authtk.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public cuisines: Cuisine[];
    public errorMessage: string;

  constructor(
    private restaurantSvc: RestaurantService,
    private router: Router,
    private authSvc:AuthtkService
  ) { }

  gotoRelatedRestaurants(cuisineSelected: Cuisine): void {
    let link = ['/cuisine', cuisineSelected.id];
    this.router.navigate(link);

  }

  //life-cycle hooks 
  ngOnInit() {
    this.restaurantSvc.getCuisines().subscribe(
      data => this.cuisines = data,
      error => this.errorMessage = <any>error,
      () => console.log("Finished getting cuisines"));

  }

}

/*import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cuisine, RestaurantService } from '../shared';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public cuisines: Cuisine[];
    public errorMessage: string;

  constructor(
    private restaurantSvc: RestaurantService,
    private router: Router,
    private authSvc:AuthService
  ) { }

  gotoRelatedRestaurants(cuisineSelected: Cuisine): void {
    let link = ['/cuisine', cuisineSelected.id];
    this.router.navigate(link);

  }

  //life-cycle hooks 
  ngOnInit() {
    this.restaurantSvc.getCuisines().subscribe(
      data => this.cuisines = data,
      error => this.errorMessage = <any>error,
      () => console.log("Finished getting cuisines"));

  }

}
*/