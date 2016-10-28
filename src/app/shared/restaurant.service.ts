import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

import { Cuisine, Restaurant, Review } from '.';

@Injectable()
export class RestaurantService {
  public Server: string = 'https://tharindudemoapi.azurewebsites.net/api/'; //'http://localhost:5214/api/';  //
  private restaurantsUrl = this.Server + 'restaurants';
  private cuisinesUrl = this.Server + 'cuisines';
  private cuiRestPreUrl = this.Server + 'cuisines/';
  private cuiRestPostUrl = '/restaurants';
  private singleRestaurantUrl = this.Server + 'restaurants/';
  private ReviewPreUrl = this.Server + 'restaurants/';
  private ReviewPostUrl = '/reviews';
  


  constructor(private http: Http) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get(this.restaurantsUrl)
      .map(resp => resp.json())
      .catch(this.handleError);
  }

  getCuisineRelatedRestaurants(cusineId: number): Observable<Restaurant[]> {
    return this.http.get(this.cuiRestPreUrl + cusineId + this.cuiRestPostUrl)
      .map(resp => resp.json())
      .catch(this.handleError);
  }

  getCuisines(): Observable<Cuisine[]> {
    return this.http.get(this.cuisinesUrl)
      .map(resp => resp.json())
      .catch(this.handleError);
  }

  getRestaurant(id: number): Observable<Restaurant> {
    return this.http.get(this.singleRestaurantUrl + id)
      .map(resp => resp.json())
      .catch(this.handleError);
  }

  getReviews(id:number): Observable<Review[]> {
    return this.http.get(this.ReviewPreUrl + id + this.ReviewPostUrl)
      .map(resp => resp.json())
      .catch(this.handleError);
  }

  addReview(id: number, rating: number, comment: string): Observable<Review> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    var reviewToAdd: Review;
    reviewToAdd.comment = comment;
    reviewToAdd.rating = rating;
    reviewToAdd.userName = "test";//must remove hard coded value
    reviewToAdd.postedDateTime = new Date();

    return this.http.post(this.ReviewPreUrl + id + this.ReviewPostUrl, { reviewToAdd }, options)
      .map(resp => resp.json())
      .catch(this.handleError);
  }

  removeRestaurant(id: number): Observable<boolean> {
    return this.http.delete(this.singleRestaurantUrl + id)
      .catch(this.handleError);

  }

  // private extractData(res: Response) {
  //   let body = res.json();
  //   console.log(body);
  //   return body.data || {};
  // }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }




}
