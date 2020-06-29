import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService, User, UserService} from '@spartacus/core';


@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss']
})
export class CustomHeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean> =  this.authService.isUserLoggedIn();
  user$: Observable<User> = this.userService.get();

  constructor(private authService: AuthService,
              private userService: UserService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
