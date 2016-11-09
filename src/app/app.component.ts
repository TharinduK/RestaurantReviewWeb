import { Component } from '@angular/core';

import {AuthtkService} from './services/authtk.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private authSvc:AuthtkService){

  }


}
/*import { Component } from '@angular/core';

import {AuthService} from './auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private authSvc:AuthService){

  }


}
*/