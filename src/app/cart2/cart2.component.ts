import { Component, OnInit } from '@angular/core';
import {ActiveCartService, AuthService, OccEndpointsService, OrderEntry, UserOrderService, UserService, UserToken} from '@spartacus/core';
import {Observable} from 'rxjs';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-cart2',
  templateUrl: './cart2.component.html',
  styleUrls: ['./cart2.component.scss']
})
export class Cart2Component implements OnInit {

  loginForme = new FormGroup( {
    uid: new FormControl(''),
    pass: new FormControl(''),
  });


  orderEntries$: Observable<OrderEntry[]> = this.cartService.getEntries();

  constructor(private cartService: ActiveCartService,
              private userService: UserService,
              private authService: AuthService,
              private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
  }
  login() {
    this.authService.authorize('fredo1994007@gmail.com_mm', 'Mcm123');
  }
  loginForm(credentials) {
    this.authService.authorize(credentials.uid, credentials.pass);
  }
  logout() {
    this.authService.logout();
  }
  randomEntries() {
    this.cartService.addEntry('1002', 5);
    this.cartService.addEntry('1003', 10);
  }
}
