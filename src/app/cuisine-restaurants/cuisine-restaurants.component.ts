import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Restaurant, RestaurantService } from '../shared';
import { AuthtkService } from '../services/authtk.service'
import { RestaurantsComponent } from '../restaurants';


@Component({
  selector: 'app-cuisine-restaurants',
  templateUrl: '../restaurants/restaurants.component.html',
  styleUrls: ['../restaurants/restaurants.component.css']
})
export class CuisineRestaurantsComponent extends RestaurantsComponent implements OnInit {
  public restaurants: Restaurant[]
  public errorMessage: string;

  protected route: ActivatedRoute;

  constructor(restaurantSvc: RestaurantService, router: Router, authSvc: AuthtkService, route: ActivatedRoute) {
    super(restaurantSvc, router, authSvc);
    this.route = route;
  }


  getCuisineRelatedRestaurants(id: number): void {
    this.restaurantSvc.getCuisineRelatedRestaurants(id).subscribe(
      data => this.restaurants = data,
      error => this.errorMessage = <any>error,
      () => console.log("Finished getting restaurants for cuisine"));

  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.getCuisineRelatedRestaurants(id);

    });

  }
}

/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Restaurant, RestaurantService } from '../shared';
import { AuthService } from '../auth.service'
import { RestaurantsComponent } from '../restaurants';


@Component({
  selector: 'app-cuisine-restaurants',
  templateUrl: '../restaurants/restaurants.component.html',
  styleUrls: ['../restaurants/restaurants.component.css']
})
export class CuisineRestaurantsComponent extends RestaurantsComponent implements OnInit {
  public restaurants: Restaurant[]
  public errorMessage: string;

  protected route: ActivatedRoute;

  constructor(restaurantSvc: RestaurantService, router: Router, authSvc: AuthService, route: ActivatedRoute) {
    super(restaurantSvc, router, authSvc);
    this.route = route;
  }


  getCuisineRelatedRestaurants(id: number): void {
    this.restaurantSvc.getCuisineRelatedRestaurants(id).subscribe(
      data => this.restaurants = data,
      error => this.errorMessage = <any>error,
      () => console.log("Finished getting restaurants for cuisine"));

  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.getCuisineRelatedRestaurants(id);

    });

  }
}
*/