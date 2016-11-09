import {Directive, OnDestroy} from "@angular/core";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

import {AuthtkService} from "../services";

@Directive({
  selector: '[appProtected]'
})
export class ProtectedDirective {
  private sub: any = null;
    constructor(
      private authService: AuthtkService, 
      private router: Router, 
      private location: Location) {
        if (!authService.isAuthenticated()) {
            this.location.replaceState('/');
            this.router.navigateByUrl('public');
        }

        this.sub = this.authService.subscribe((val) => {
            console.log("Val from auth service:", val);
            if (!val.authenticated) {
                this.location.replaceState('/');
                this.router.navigateByUrl('loggedout');
            }
        });
    }

    ngOnDestroy() {
        if (this.sub != null) {
            this.sub.unsubscribe();
        }
    }

}
