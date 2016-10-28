import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';

import { RestaurantService, Restaurant } from '../shared';
import { AuthService } from '../auth.service'


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  protected restaurantSvc: RestaurantService;
  protected router: Router;
  protected authSvc: AuthService;

  public restaurants: Restaurant[];
  public errorMessage: string;
  mode = 'Observable';

  constructor(
    restaurantSvc: RestaurantService,
    router: Router,
    authSvc: AuthService
  ) { 
    this.restaurantSvc = restaurantSvc;
    this.router = router;
    this.authSvc = authSvc;
  }
  
  gotoRestaurant(restSelected: Restaurant): void {
    let link = ['/detail', restSelected.id];
    this.router.navigate(link);
  }

  getRestaurants(): void {
    this.restaurantSvc.getRestaurants().subscribe(
      restaurantsSvc => this.restaurants = restaurantsSvc,
      error => this.errorMessage = <any>error);
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

  gotoAddReview(restSelected: Restaurant) {
    let link = ['/addReview', restSelected.id];
    this.router.navigate(link);
  }

  //lifecycle hooks 
  ngOnInit() {
    this.getRestaurants();

  }
}
