import { Component, OnInit } from '@angular/core';
import { AuthtkService } from '../services/authtk.service'

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common'

import { Restaurant, RestaurantService, Cuisine, Review } from '../shared';


@Component({
  selector: 'app-restaurant-reviews',
  templateUrl: './restaurant-reviews.component.html',
  styleUrls: ['./restaurant-reviews.component.css']
})
export class RestaurantReviewsComponent implements OnInit {
  public errorMessage: string;
  public reviews: Review[];

  constructor(
    private authSvc: AuthtkService,
    private route: ActivatedRoute,
    private restaurantSvc: RestaurantService
  ) { }

  getReviews(id: number): void {
    this.restaurantSvc.getReviews(id)
      .subscribe(
      data => this.reviews = data,
      error => this.errorMessage = <any>error,
      () => console.log("Finished getting reviews"));

  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.getReviews(id);

    });
  }
}
/*import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common'

import { Restaurant, RestaurantService, Cuisine, Review } from '../shared';


@Component({
  selector: 'app-restaurant-reviews',
  templateUrl: './restaurant-reviews.component.html',
  styleUrls: ['./restaurant-reviews.component.css']
})
export class RestaurantReviewsComponent implements OnInit {
  public errorMessage: string;
  public reviews: Review[];

  constructor(
    private authSvc: AuthService,
    private route: ActivatedRoute,
    private restaurantSvc: RestaurantService
  ) { }

  getReviews(id: number): void {
    this.restaurantSvc.getReviews(id)
      .subscribe(
      data => this.reviews = data,
      error => this.errorMessage = <any>error,
      () => console.log("Finished getting reviews"));

  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.getReviews(id);

    });
  }
}
*/