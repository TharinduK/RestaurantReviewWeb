//core 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthtkService, CookiesService, WindowService } from './services';


//services 
import { RestaurantService } from './shared';

//componenets 
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard';
import { RestaurantsComponent } from './restaurants';
import { RestaurantReviewsComponent } from './restaurant-reviews';
import { RestaurantDetailsComponent } from './restaurant-details';
import { CuisineRestaurantsComponent } from './cuisine-restaurants';

//modules
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { ProtectedDirective } from './directives/protected.directive';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RestaurantsComponent,
    RestaurantReviewsComponent,
    RestaurantDetailsComponent,
    CuisineRestaurantsComponent,
    AddRestaurantComponent,
    AddReviewComponent,
    ProtectedDirective
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],

  providers: [
    RestaurantService,
    AuthtkService,
    CookiesService,
    WindowService,
    AUTH_PROVIDERS
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

/*//core 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard';

//services 
import { RestaurantService } from './shared';

//componenets 
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard';
import { RestaurantsComponent } from './restaurants';
import { RestaurantReviewsComponent } from './restaurant-reviews';
import { RestaurantDetailsComponent } from './restaurant-details';
import { CuisineRestaurantsComponent } from './cuisine-restaurants';

//modules
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AddReviewComponent } from './add-review/add-review.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RestaurantsComponent,
    RestaurantReviewsComponent,
    RestaurantDetailsComponent,
    CuisineRestaurantsComponent,
    AddRestaurantComponent,
    AddReviewComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],

  providers: [
    RestaurantService,
    AuthService,
    AUTH_PROVIDERS,
    AuthGuard

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
*/