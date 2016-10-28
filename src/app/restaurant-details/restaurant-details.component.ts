import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common'

import { Restaurant, RestaurantService, Cuisine, Review } from '../shared';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  public errorMessage: string;
  public restaurant: Restaurant;
  public cuisines: Cuisine[];
  public reviews: Review[];

  constructor(
    private restaurantSvc: RestaurantService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private authSvc: AuthService
  ) { }

  getRestaurant(id: number): void {
    this.restaurantSvc.getRestaurant(id)
      .subscribe(data => this.restaurant = data,
      error => this.errorMessage = <any>error,
      () => console.log("Finished getting restaurant"));
  }

  getCuisines(): void {
    this.restaurantSvc.getCuisines().subscribe(
      data => this.cuisines = data,
      error => this.errorMessage = <any>error,
      () => console.log("Finished getting cuisines"));
  }

  getReviews(id: number): void {
    this.restaurantSvc.getReviews(id)
      .subscribe(
      data => this.reviews = data,
      error => this.errorMessage = <any>error,
      () => console.log("Finished getting reviews"));

  }

  showMessage(wasSucessful: boolean): void {
    if (wasSucessful) alert("Restaurant removed.");
    else alert("Restaurant was NOT removed.");
  }

  save(): void {
    // this.restaurantSvc..getRestaurant(id)
    //       .subscribe(data => this.restaurant = data,
    //       error => this.errorMessage = <any>error,
    //       () => console.log("Finished getting restaurant"));
  }

  gotoAddReview() {
    let link = ['/addReview', this.restaurant.id];
    this.router.navigate(link);
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.getRestaurant(id);
      this.getReviews(id);
    });

    this.getCuisines();


  }


}
