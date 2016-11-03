import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Restaurant, Review, RestaurantService } from '../shared';


@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  public restaurant: Restaurant;
  public errorMessage: string;
  public newReview: Review;

  private submitted: boolean = false;


  constructor(
    private location: Location,
    private restaurantSvc: RestaurantService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.newReview = new Review();
    this.newReview.comment = "";
    this.newReview.rating = 1;
    console.log("Comment:" + this.newReview.comment + "  rating:" + this.newReview.rating);
  }

  get diagnostic() { return JSON.stringify(this.newReview); }

  getRestaurant(id: number): void {
    this.restaurantSvc.getRestaurant(id).subscribe(
      data => this.restaurant = data,
      error => this.errorMessage = <any>error,
      () => console.log("Finished getting restaurants for cuisine"));
  }

  addReview(): void {
    debugger;
    this.restaurantSvc.addReview(this.restaurant.id, this.newReview.rating, this.newReview.comment)
      .subscribe(
      data => this.newReview = data,
      error => this.errorMessage = <any>error,
      () => console.log("Finished adding review"));

  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    this.submitted = true;
    this.addReview();
  }
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.getRestaurant(id);
    });
  }

}
