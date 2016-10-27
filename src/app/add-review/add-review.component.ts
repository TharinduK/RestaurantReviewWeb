import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Restaurant, RestaurantService } from '../shared';


@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  public restaurant: Restaurant;
  public errorMessage: string;
  public newComment: string;
  public newRating: number;
  public newReview: any;


  constructor(
    private location: Location,
    private restaurantSvc: RestaurantService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  getRestaurant(id: number): void {
    this.restaurantSvc.getRestaurant(id).subscribe(
      data => this.restaurant = data,
      error => this.errorMessage = <any>error,
      () => console.log("Finished getting restaurants for cuisine"));
  }

  addReview(): void {
    this.restaurantSvc.addReview(this.restaurant.id, this.newRating, this.newComment).subscribe(
      data => this.newReview = data,
      error => this.errorMessage = <any>error,
      () => console.log("Finished adding review"));

  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.getRestaurant(id);
    });
  }

}
