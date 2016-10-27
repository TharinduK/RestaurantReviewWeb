import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthGuard } from '../auth-guard';

import { DashboardComponent } from '../dashboard';
import { RestaurantsComponent } from '../restaurants';
import { RestaurantDetailsComponent } from '../restaurant-details';
import { RestaurantReviewsComponent } from '../restaurant-reviews';
import { CuisineRestaurantsComponent } from '../cuisine-restaurants';
import { AddRestaurantComponent } from '../add-restaurant';
import { AddReviewComponent } from '../add-review';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'cuisine/:id', component: CuisineRestaurantsComponent },
    { path: 'detail/:id', component: RestaurantDetailsComponent },
    { path: 'addRestaurant', component: AddRestaurantComponent, canActivate: [AuthGuard] },
    { path: 'addReview/:id', component: AddReviewComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
