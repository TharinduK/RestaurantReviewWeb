import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Restaurant, RestaurantService } from '../shared';
import { AuthService } from '../auth.service'


@Component({
  selector: 'app-cuisine-restaurants',
  templateUrl: './cuisine-restaurants.component.html',
  styleUrls: ['./cuisine-restaurants.component.css']
})
export class CuisineRestaurantsComponent implements OnInit {
  public restaurants: Restaurant[]
  public errorMessage: string;

  constructor(
    private restaurantSvc: RestaurantService,
    private router: Router,
    private route: ActivatedRoute,
    private authSvc: AuthService) { }

  gotoRestaurant(restSelected: Restaurant): void {
    let link = ['/detail', restSelected.id];
    this.router.navigate(link);
  }

  getCuisineRelatedRestaurants(id: number): void {
    this.restaurantSvc.getCuisineRelatedRestaurants(id).subscribe(
      data => this.restaurants = data,
      error => this.errorMessage = <any>error,
      () => console.log("Finished getting restaurants for cuisine"));

  }

  removeRestaurant(restSelected: Restaurant) {
    this.restaurantSvc.removeRestaurant(restSelected.id)
      .subscribe(
      wasSucessful => this.showMessage(wasSucessful),
      error => this.errorMessage = <any>error);
  }

  showMessage(wasSucessful: boolean): void {
    if (wasSucessful) alert("Restaurant removed.");
    else alert("Restaurant was NOT removed.");
  }



  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.getCuisineRelatedRestaurants(id);

    });

  }
}
