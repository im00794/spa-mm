import {Component, OnInit} from '@angular/core';
import {ActiveCartService, AuthService, OrderEntry, UserService} from '@spartacus/core';
import {Observable} from 'rxjs';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-cart2',
  templateUrl: './cart2.component.html',
  styleUrls: ['./cart2.component.scss'],
})
export class Cart2Component implements OnInit {
  loginForme = new FormGroup({
    uid: new FormControl(''),
    pass: new FormControl(''),
  });

  orderEntries$: Observable<OrderEntry[]> = this.cartService.getEntries();
  isLoggedIn$: Observable<boolean> =  this.authService.isUserLoggedIn();
  constructor(private cartService: ActiveCartService,
              private userService: UserService,
              private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) {}


  ngOnInit(): void {}

  loginForm(credentials) {
    this.authService.authorize(credentials.uid, credentials.pass);
    this.authService.isUserLoggedIn().subscribe(data => {
      if( data === true) {
        this.router.navigate(['/']);
      }
    });
  }
  logout() {
    this.authService.logout();
  }
  randomEntries() {
    this.cartService.addEntry('1002', 5);
    this.cartService.addEntry('1003', 10);
    this.cartService.addEntry('1002', 5);
  }
}
