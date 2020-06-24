import { Component, OnInit } from '@angular/core';
import {ActiveCartService, AuthService, OccEndpointsService, OrderEntry, UserOrderService, UserService, UserToken} from '@spartacus/core';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';
// import {UserAuthenticationTokenService} from '@spartacus/core/src/auth/services/user-authentication/user-authentication-token.service';

@Component({
  selector: 'app-cart2',
  templateUrl: './cart2.component.html',
  styleUrls: ['./cart2.component.scss']
})
export class Cart2Component implements OnInit {

  orderEntries$: Observable<OrderEntry[]> = this.cartService.getEntries();

  constructor(private cartService: ActiveCartService,
              private userService: UserService,
              private authService: AuthService) { }

  ngOnInit(): void {

  }
  login() {
    this.authService.authorize('fredo1994007@gmail.com_mm', 'Mcm123');
  }
  loginForm(uid: string, pass: string) {
    this.authService.authorize(uid , pass);
  }
  logout() {
    this.authService.logout();
  }
  randomEntries() {
    this.cartService.addEntry('1002', 5);
    this.cartService.addEntry('1003', 15);
  }
}
