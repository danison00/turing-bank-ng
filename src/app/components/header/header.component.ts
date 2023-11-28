import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {

  constructor(private loginServ: LoginServiceService, private router: Router) { }
  ngOnDestroy(): void {
    this.logout$.unsubscribe();
  }


  logout$!: Subscription;
  logout() {
    this.logout$ = this.loginServ.logout().subscribe(
      () => {
        this.router.navigate(["/login"]);
      }
    );
  }
}
