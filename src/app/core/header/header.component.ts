import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgAuthService } from '../../user/ng-auth.service'
import { Observable} from 'rxjs'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public ngAuthService: NgAuthService,
    private router: Router) { }
    ngOnInit(): void {
    }
    get isLoggedIn(): boolean {
      return this.ngAuthService.isLoggedIn;
    }
    logoutHandler(): void {
        this.ngAuthService.SignOut;
      }
    
      ngOnDestroy(): void {
      }

}